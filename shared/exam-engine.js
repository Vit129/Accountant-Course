// Mixed timed mock-exam engine — pulls questions from window.CPA_SUBJECTS
// (populated by every subject's lessons.js when loaded as plain <script> tags before this file).

const EXAM_STATE = {
  questions: [],   // [{ subjectId, subjectTitle, lesson }]
  currentIndex: 0,
  answers: {},     // `${subjectId}:${lesson.id}` -> user text
  endTime: null,
  timerHandle: null,
};

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function questionKey(q) {
  return `${q.subjectId}:${q.lesson.id}`;
}

function getSelectedSubjectIds() {
  return Array.from(document.querySelectorAll('.subject-check:checked')).map(el => el.value);
}

function buildQuestionPool(subjectIds, count) {
  let pool = [];
  for (const sid of subjectIds) {
    const subj = window.CPA_SUBJECTS[sid];
    if (!subj) continue;
    for (const lesson of subj.lessons) {
      pool.push({ subjectId: sid, subjectTitle: subj.subjectTitle, lesson });
    }
  }
  pool = shuffle(pool);
  if (count > 0 && count < pool.length) pool = pool.slice(0, count);
  return pool;
}

function formatTime(ms) {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function startExam() {
  const subjectIds = getSelectedSubjectIds();
  if (subjectIds.length === 0) {
    alert('เลือกอย่างน้อย 1 วิชาก่อนเริ่มสอบ');
    return;
  }

  const countSelect = document.getElementById('question-count');
  const minutesSelect = document.getElementById('exam-minutes');
  const requestedCount = parseInt(countSelect.value, 10);
  const minutes = parseInt(minutesSelect.value, 10);

  EXAM_STATE.questions = buildQuestionPool(subjectIds, requestedCount);
  if (EXAM_STATE.questions.length === 0) {
    alert('ไม่พบข้อสอบในวิชาที่เลือก');
    return;
  }
  EXAM_STATE.currentIndex = 0;
  EXAM_STATE.answers = {};
  EXAM_STATE.endTime = Date.now() + minutes * 60 * 1000;

  document.getElementById('start-screen').classList.remove('show');
  document.getElementById('results-screen').classList.remove('show');
  document.getElementById('exam-screen').classList.add('show');

  renderQuestionNav();
  renderQuestion(0);
  startTimer();
}

function startTimer() {
  if (EXAM_STATE.timerHandle) clearInterval(EXAM_STATE.timerHandle);
  updateTimerDisplay();
  EXAM_STATE.timerHandle = setInterval(() => {
    const remaining = EXAM_STATE.endTime - Date.now();
    if (remaining <= 0) {
      updateTimerDisplay();
      clearInterval(EXAM_STATE.timerHandle);
      submitExam(true);
      return;
    }
    updateTimerDisplay();
  }, 1000);
}

function updateTimerDisplay() {
  const el = document.getElementById('exam-timer');
  if (!el) return;
  const remaining = EXAM_STATE.endTime - Date.now();
  el.textContent = formatTime(remaining);
  el.classList.toggle('timer-warning', remaining <= 5 * 60 * 1000);
}

function saveCurrentAnswer() {
  const q = EXAM_STATE.questions[EXAM_STATE.currentIndex];
  if (!q) return;
  const textarea = document.getElementById('exam-answer');
  EXAM_STATE.answers[questionKey(q)] = textarea.value;
}

function renderQuestionNav() {
  const nav = document.getElementById('question-nav');
  if (!nav) return;
  nav.innerHTML = EXAM_STATE.questions.map((q, idx) => {
    const answered = EXAM_STATE.answers[questionKey(q)] ? 'answered' : '';
    const active = idx === EXAM_STATE.currentIndex ? 'active' : '';
    return `<button class="nav-dot ${answered} ${active}" onclick="goToQuestion(${idx})">${idx + 1}</button>`;
  }).join('');
}

function goToQuestion(idx) {
  saveCurrentAnswer();
  EXAM_STATE.currentIndex = idx;
  renderQuestion(idx);
  renderQuestionNav();
}

function goNext() {
  if (EXAM_STATE.currentIndex < EXAM_STATE.questions.length - 1) {
    goToQuestion(EXAM_STATE.currentIndex + 1);
  }
}

function goPrev() {
  if (EXAM_STATE.currentIndex > 0) {
    goToQuestion(EXAM_STATE.currentIndex - 1);
  }
}

function renderQuestion(idx) {
  const q = EXAM_STATE.questions[idx];
  if (!q) return;

  document.getElementById('exam-progress-label').textContent = `ข้อ ${idx + 1} / ${EXAM_STATE.questions.length}`;
  document.getElementById('exam-subject-tag').textContent = q.subjectTitle;
  document.getElementById('exam-question-body').innerHTML = q.lesson.task;

  const textarea = document.getElementById('exam-answer');
  textarea.value = EXAM_STATE.answers[questionKey(q)] || '';
  textarea.focus();

  document.getElementById('prev-btn').disabled = idx === 0;
  document.getElementById('next-btn').style.display = idx === EXAM_STATE.questions.length - 1 ? 'none' : 'inline-flex';
  document.getElementById('finish-btn').style.display = idx === EXAM_STATE.questions.length - 1 ? 'inline-flex' : 'none';
}

function confirmSubmitExam() {
  const unanswered = EXAM_STATE.questions.filter(q => !EXAM_STATE.answers[questionKey(q)]).length;
  const msg = unanswered > 0
    ? `ยังเหลือ ${unanswered} ข้อที่ยังไม่ตอบ ต้องการส่งคำตอบเลยหรือไม่?`
    : 'ต้องการส่งคำตอบและดูผลคะแนนหรือไม่?';
  if (confirm(msg)) submitExam(false);
}

function submitExam(timeUp) {
  saveCurrentAnswer();
  if (EXAM_STATE.timerHandle) clearInterval(EXAM_STATE.timerHandle);

  let correctCount = 0;
  const results = EXAM_STATE.questions.map(q => {
    const userAnswer = EXAM_STATE.answers[questionKey(q)] || '';
    let isCorrect = false;
    try {
      q.lesson.validate(userAnswer, () => {});
      isCorrect = true;
      correctCount++;
    } catch (e) {
      isCorrect = false;
    }
    return { q, userAnswer, isCorrect };
  });

  // Part 1 (MCQ/calculation) is done — stash the score and move into Part 2 (essay)
  // instead of showing results immediately. Combined results render after finishEssayPhase().
  EXAM_STATE.mcqResults = results;
  EXAM_STATE.mcqCorrectCount = correctCount;
  EXAM_STATE.mcqTimeUp = timeUp;

  document.getElementById('exam-screen').classList.remove('show');
  document.getElementById('essay-screen').classList.add('show');
  window.scrollTo(0, 0);
  startEssayPhase();
}

function showFinalResults() {
  document.getElementById('essay-screen').classList.remove('show');
  document.getElementById('results-screen').classList.add('show');
  renderResults(EXAM_STATE.mcqResults, EXAM_STATE.mcqCorrectCount, EXAM_STATE.mcqTimeUp);
}

function renderResults(results, correctCount, timeUp) {
  const total = results.length;
  const percent = Math.round((correctCount / total) * 100);

  const timeUpNote = timeUp ? `<p class="time-up-note">⏱ หมดเวลา — ระบบส่งคำตอบอัตโนมัติ</p>` : '';

  document.getElementById('score-summary').innerHTML = `
    ${timeUpNote}
    <div class="score-big">${correctCount} / ${total}</div>
    <div class="score-percent">${percent}% (ส่วนที่ 1 ปรนัย/คำนวณ)</div>
    <p class="score-note">ส่วนที่ 2 (อัตนัย 4 เคส) ตรวจเองด้วยเฉลยละเอียดแล้วในหน้าก่อนหน้า ไม่มีคะแนนอัตโนมัติ<br>หมายเหตุ: นี่คือคะแนนจากคลังข้อสอบของเว็บนี้เท่านั้น ไม่ใช่เกณฑ์ผ่านจริงของสภาวิชาชีพบัญชี — โปรดตรวจสอบเกณฑ์สอบผ่านที่เป็นทางการแยกต่างหาก</p>
  `;

  if (percent === 100) {
    localStorage.setItem('exam_full_score_passed', 'true');
    if (typeof checkGrandCertificate === 'function') checkGrandCertificate();
  }

  document.getElementById('results-breakdown').innerHTML = results.map((r, idx) => {
    const icon = r.isCorrect ? '✓' : '✕';
    const cls = r.isCorrect ? 'result-correct' : 'result-wrong';
    return `
      <div class="result-item ${cls}">
        <div class="result-header">
          <span class="result-icon">${icon}</span>
          <span class="result-num">ข้อ ${idx + 1}</span>
          <span class="result-subject">${r.q.subjectTitle}</span>
        </div>
        <div class="result-task">${r.q.lesson.task}</div>
        <div class="result-answer-row">
          <div><strong>คำตอบของคุณ:</strong><pre>${escapeHtmlExam(r.userAnswer || '(ไม่ได้ตอบ)')}</pre></div>
          ${!r.isCorrect ? `<div><strong>เฉลย:</strong><pre>${escapeHtmlExam(r.q.lesson.solution)}</pre></div>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function escapeHtmlExam(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function resetExam() {
  document.getElementById('exam-screen').classList.remove('show');
  document.getElementById('essay-screen').classList.remove('show');
  document.getElementById('results-screen').classList.remove('show');
  document.getElementById('start-screen').classList.add('show');
  EXAM_STATE.questions = [];
  EXAM_STATE.answers = {};
  EXAM_STATE.currentIndex = 0;
  EXAM_STATE.mcqResults = [];
  EXAM_STATE.mcqCorrectCount = 0;
}

function initExamPage() {
  const nav = document.getElementById('subject-checklist');
  if (!nav) return;
  const subjects = Object.values(window.CPA_SUBJECTS || {});
  nav.innerHTML = subjects.map(s => `
    <label class="subject-option">
      <input type="checkbox" class="subject-check" value="${s.subjectId}" checked>
      <span>${s.subjectTitle} (${s.lessons.length} ข้อ)</span>
    </label>
  `).join('');

  const totalAvailable = subjects.reduce((sum, s) => sum + s.lessons.length, 0);
  const countSelect = document.getElementById('question-count');
  countSelect.innerHTML = `
    <option value="10">10 ข้อ</option>
    <option value="20">20 ข้อ</option>
    <option value="30">30 ข้อ</option>
    <option value="${totalAvailable}" selected>ทั้งหมด (${totalAvailable} ข้อ)</option>
  `;
}

window.addEventListener('DOMContentLoaded', initExamPage);

// ── Part 2: Essay phase (ported from the retired exam/subjective.html) ──────
// 4 fixed self-graded case studies, one per non-cost/FM subject cluster. Not part of
// window.CPA_SUBJECTS' auto-graded lesson pool — free-text + journal table, graded by
// the student against the rubric shown after they reveal it.
const ESSAY_CASES = [
  {
    title: "เคสที่ 1: [การบัญชี 1 & 2] การปันส่วนรายได้ TFRS 15 และรายการปรับปรุงงบการเงิน (25 คะแนน)",
    problem: `<strong>สถานการณ์:</strong><br/>บริษัท อุตสาหกรรมนวัตกรรม จำกัด มีรายการค้าเกิดขึ้น ณ วันสิ้นปี 2568 ดังนี้:<br/>
    1. ขายเครื่องจักรพร้อมสัญญาบริการบำรุงรักษา 2 ปี ราคารวม <strong>5,000,000 บาท</strong> (ราคาแยกต่างหาก: เครื่องจักร 4.5M ส่งมอบแล้ว / บริการ 1.5M เริ่มปีหน้า)<br/>
    2. ซื้อรถยนต์นั่งส่วนบุคคลราคา <strong>3,200,000 บาท</strong> บันทึกค่าเสื่อมราคาทางบัญชี 20% = 640,000 บาท (ทางภาษีจำกัดฐานไม่เกิน 1,000,000 บาท)<br/>
    3. ลืมบันทึกดอกเบี้ยค้างจ่ายตั๋วเงินจ่าย 2,000,000 บาท ดอกเบี้ย 6% ต่อปี อายุ 90 วัน (ผ่านไป 60 วันนับถึงสิ้นปี ฐาน 360 วัน/ปี)<br/><br/>
    <strong>คำสั่ง:</strong> จงเขียนแสดงการคำนวณ บันทึกรายการปรับปรุงบัญชีในสมุดรายวันทั่วไป และคำนวณจำนวนเงินบวกกลับทางภาษีให้ครบถ้วน`,
    initialJournal: [
      { date: "31 ธ.ค. 68", title: "Dr. เงินสด", dr: 5000000, cr: 0 },
      { date: "", title: "   Cr. รายได้จากการขายเครื่องจักร", dr: 0, cr: 3750000 },
      { date: "", title: "   Cr. รายได้ค่าบริการรับล่วงหน้า", dr: 0, cr: 1250000 },
      { date: "31 ธ.ค. 68", title: "Dr. ดอกเบี้ยจ่าย", dr: 20000, cr: 0 },
      { date: "", title: "   Cr. ดอกเบี้ยค้างจ่าย", dr: 0, cr: 20000 }
    ],
    rubric: `<h4>💡 เฉลยละเอียดและเกณฑ์การให้คะแนน (Marking Scheme - 25 คะแนนเต็ม)</h4>
    <strong>1. การคำนวณปันส่วนรายได้ตาม TFRS 15 (10 คะแนน):</strong><br/>
    - ผลรวมราคาขายแยกต่างหาก = 4.5M + 1.5M = 6.0M บาท<br/>
    - รายได้เครื่องจักร = 5,000,000 × (4.5M / 6.0M) = <strong>3,750,000 บาท</strong><br/>
    - รายได้ค่าบริการรับล่วงหน้า = 5,000,000 × (1.5M / 6.0M) = <strong>1,250,000 บาท</strong><br/><br/>
    <strong>2. ค่าเสื่อมราคารถยนต์นั่งบวกกลับทางภาษี (ม.65 ตรี) (8 คะแนน):</strong><br/>
    - ค่าเสื่อมทางบัญชี = 3.2M × 20% = 640,000 บาท<br/>
    - ค่าเสื่อมทางภาษี (ฐานไม่เกิน 1M) = 1M × 20% = 200,000 บาท<br/>
    - จำนวนเงินบวกกลับทางภาษี = 640,000 - 200,000 = <strong>440,000 บาท</strong><br/><br/>
    <strong>3. รายการปรับปรุงดอกเบี้ยค้างจ่าย (7 คะแนน):</strong><br/>
    - ดอกเบี้ย = 2,000,000 × 6% × (60/360) = <strong>20,000 บาท</strong><br/>
    - บันทึก: Dr. ดอกเบี้ยจ่าย 20,000 / Cr. ดอกเบี้ยค้างจ่าย 20,000`
  },
  {
    title: "เคสที่ 2: [การสอบบัญชี 1 & 2] การประเมินความเสี่ยงและรายงานผู้สอบบัญชี (25 คะแนน)",
    problem: `<strong>สถานการณ์:</strong><br/>ผู้สอบบัญชีตรวจสอบงบการเงินบริษัท มหาชัยการค้า จำกัด พบประเด็นสำคัญ 2 กรณี:<br/>
    * <strong>กรณี ก:</strong> ลูกหนี้รายใหญ่ยอด 18,000,000 บาท (45% ของลูกหนี้รวม) ล้มละลาย ผู้บริหารปฏิเสธการตั้งค่าเผื่อหนี้เสีย ผู้สอบบัญชีประเมินว่ามีสาระสำคัญแต่ไม่แพร่กระจาย (Material, Not Pervasive)<br/>
    * <strong>กรณี ข:</strong> ไม่สามารถเข้าตรวจนับสินค้าคงเหลือ 30,000,000 บาท (60% ของสินทรัพย์รวม) ได้เนื่องจากเพลิงไหม้ และหาวิธีการอื่นทดแทนไม่ได้ (Material and Pervasive Scope Limitation)<br/><br/>
    <strong>คำสั่ง:</strong> จงระบุประเภทรายงานผู้สอบบัญชีของทั้ง 2 กรณี พร้อมอธิบายเหตุผลตามมาตรฐาน TSA 705`,
    initialJournal: [],
    rubric: `<h4>💡 เฉลยละเอียดและเกณฑ์การให้คะแนน (Marking Scheme - 25 คะแนนเต็ม)</h4>
    <strong>1. กรณี ก (10 คะแนน):</strong> เสนอ <strong>"ความเห็นแบบมีเงื่อนไข (Qualified Opinion)"</strong><br/>
    - เหตุผล: ตรวจพบข้อผิดพลาดการแสดงข้อมูลขัดต่อข้อเท็จจริง (Misstatement) มีสาระสำคัญแต่จำกัดเฉพาะรายการลูกหนี้รายนี้ ไม่แพร่กระจายต่องบการเงินโดยรวม<br/><br/>
    <strong>2. กรณี ข (10 คะแนน):</strong> เสนอ <strong>"การไม่แสดงความเห็น (Disclaimer of Opinion)"</strong><br/>
    - เหตุผล: ถูกจำกัดขอบเขตการตรวจสอบ (Scope Limitation) และผลกระทบขัดต่อข้อเท็จจริงที่อาจเกิดขึ้นมีสาระสำคัญและแพร่กระจาย (Material and Pervasive)<br/><br/>
    <strong>3. ความแตกต่างระหว่าง Adverse กับ Disclaimer (5 คะแนน):</strong><br/>
    - Adverse: ตรวจพบหลักฐานและทราบตัวเลขข้อผิดพลาดชัดเจนว่าผิดอย่างแพร่กระจาย<br/>
    - Disclaimer: ไม่สามารถหาหลักฐานได้เลย (ถูกจำกัดขอบเขต) จึงประเมินไม่ได้ว่างบถูกหรือผิด`
  },
  {
    title: "เคสที่ 3: [กฎหมายวิชาชีพบัญชี] องค์ประชุม มติพิเศษ และการลดทุนบริษัท (25 คะแนน)",
    problem: `<strong>สถานการณ์:</strong><br/>บริษัท มหาชนจำกัด มีทุนชำระแล้ว 40,000,000 บาท (400,000 หุ้น มูลค่าหุ้นละ 100 บาท) เสนอขอลดทุนลง 32,000,000 บาท ให้เหลือ 8,000,000 บาทในการประชุมวิสามัญผู้ถือหุ้น<br/>
    มีผู้เข้าร่วมประชุมถือหุ้นรวม 120,000 หุ้น และมีมติเห็นชอบการลดทุน 100,000 เสียง<br/><br/>
    <strong>คำสั่ง:</strong> จงพิจารณาความชอบด้วยกฎหมายของการลดทุน การตรวจองค์ประชุม (Quorum) และผลของมติพิเศษตามข้อกฎหมาย`,
    initialJournal: [],
    rubric: `<h4>💡 เฉลยละเอียดและเกณฑ์การให้คะแนน (Marking Scheme - 25 คะแนนเต็ม)</h4>
    <strong>1. ความชอบด้วยกฎหมายของการลดทุน (10 คะแนน):</strong><br/>
    - บริษัทนี้เป็นบริษัทมหาชนจำกัด จึงอยู่ภายใต้ <strong>พ.ร.บ.บริษัทมหาชนจำกัด พ.ศ. 2535 มาตรา 139</strong> (ไม่ใช่ ป.พ.พ. ซึ่งใช้กับบริษัทจำกัดเอกชนเท่านั้น) ห้ามลดทุนลงต่ำกว่า 1 ใน 4 (25%) ของทุนเดิม<br/>
    - ทุนเดิม 40,000,000 × 25% = 10,000,000 บาท<br/>
    - การลดทุนเหลือ 8,000,000 บาท ต่ำกว่า 10,000,000 บาท $\\rightarrow$ <strong>ไม่ชอบด้วยกฎหมาย ห้ามลดทุน</strong><br/><br/>
    <strong>2. การตรวจองค์ประชุม (7 คะแนน):</strong><br/>
    - บริษัทมหาชนใช้เกณฑ์องค์ประชุมตาม <strong>พ.ร.บ.บริษัทมหาชนจำกัด มาตรา 103</strong> คือต้องมีหุ้นนับรวมกันไม่น้อยกว่า <strong>1 ใน 3</strong> ของจำนวนหุ้นทั้งหมด (ไม่ใช่ 1 ใน 4 ซึ่งเป็นเกณฑ์ของบริษัทจำกัดเอกชนตาม ป.พ.พ. มาตรา 1178)<br/>
    - เกณฑ์ 1 ใน 3 ของ 400,000 หุ้น = 133,333 หุ้น<br/>
    - มาประชุม 120,000 หุ้น (น้อยกว่า 133,333) $\\rightarrow$ <strong>ไม่ครบองค์ประชุม</strong><br/><br/>
    <strong>3. การตรวจมติพิเศษ (8 คะแนน):</strong><br/>
    - เนื่องจากการประชุมไม่ครบองค์ประชุมตามข้อ 2 มติใด ๆ ที่ลงในที่ประชุมนี้ <strong>ไม่มีผลสมบูรณ์ตามกฎหมาย</strong> รวมถึงมติพิเศษเรื่องลดทุนด้วย ไม่ว่าคะแนนเสียงเห็นชอบจะครบสัดส่วน 3 ใน 4 ของผู้มาประชุม (120,000×3/4=90,000 ≤ 100,000 เสียงที่เห็นชอบ) หรือไม่ก็ตาม — ต้องเรียกประชุมใหม่ให้ครบองค์ประชุมก่อนจึงจะลงมติได้`
  },
  {
    title: "เคสที่ 4: [ภาษีอากร] การคำนวณกำไรสุทธิเพื่อเสียภาษีเงินได้นิติบุคคล (25 คะแนน)",
    problem: `<strong>สถานการณ์:</strong><br/>บริษัทนิติบุคคลขนาดใหญ่ มีกำไรสุทธิตามงบการเงิน 8,000,000 บาท มีรายการปรับปรุงดังนี้:<br/>
    1. ตั้งสำรองประกันสินค้า 350,000 บาท (ยังไม่จ่ายจริง)<br/>
    2. ค่ารับรองลูกค้า 120,000 บาท (รายได้รวม 50 ล้านบาท สิทธิ 0.3% = 150,000 บาท)<br/>
    3. เงินปันผลรับจากบริษัทไทย 400,000 บาท (ถือหุ้น 20% เกิน 3 เดือน ได้รับยกเว้น 50%)<br/><br/>
    <strong>คำสั่ง:</strong> จงคำนวณกำไรสุทธิทางภาษี (Net Taxable Profit) และภาษีเงินได้นิติบุคคลที่ต้องชำระ (อัตรา 20%)`,
    initialJournal: [],
    rubric: `<h4>💡 เฉลยละเอียดและเกณฑ์การให้คะแนน (Marking Scheme - 25 คะแนนเต็ม)</h4>
    <strong>1. กำไรสุทธิเพื่อเสียภาษี (15 คะแนน):</strong><br/>
    - กำไรสุทธิตามงบการเงิน = 8,000,000 บาท<br/>
    - สำรองประกันสินค้า (ยังไม่จ่ายจริง) = +350,000 บาท (บวกกลับตาม ม.65 ตรี (1))<br/>
    - ค่ารับรองลูกค้า 120,000 บาท (ไม่เกิน 0.3% ของ 50M = 150k) = 0 บาท (ไม่ต้องบวกกลับ)<br/>
    - เงินปันผลรับยกเว้น 50% = -200,000 บาท (หักออกตาม ม.65 ทวิ (10))<br/>
    - <strong>กำไรสุทธิทางภาษี = 8,000,000 + 350,000 - 200,000 = 8,150,000 บาท</strong><br/><br/>
    <strong>2. ภาษีเงินได้นิติบุคคลที่ต้องชำระ (10 คะแนน):</strong><br/>
    - ภาษี = 8,150,000 × 20% = <strong>1,630,000 บาท</strong>`
  }
];

let currentCaseIndex = 0;

function startEssayPhase() {
  const selector = document.getElementById('case-selector');
  if (!selector) return;
  selector.innerHTML = ESSAY_CASES.map((c, i) => `
    <button class="case-card-btn ${i === 0 ? 'active' : ''}" onclick="loadCase(${i})">
      <strong>${c.title.split(':')[0]}:${c.title.split(':')[1].split('(')[0]}</strong>
      <span>${c.title.match(/\[(.+?)\]/)?.[1] || ''}</span>
    </button>
  `).join('');
  loadCase(0);
}

function loadCase(index) {
  currentCaseIndex = index;
  document.querySelectorAll('.case-card-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });

  const c = ESSAY_CASES[index];
  document.getElementById('problem-box').innerHTML = `<h3>${c.title}</h3>${c.problem}`;
  document.getElementById('rubric-card').innerHTML = c.rubric;
  document.getElementById('rubric-card').classList.remove('show');

  const savedEssay = localStorage.getItem('exam_essay_case_' + index) || '';
  document.getElementById('essay-input').value = savedEssay;

  const body = document.getElementById('journal-body');
  body.innerHTML = '';
  const journalData = c.initialJournal && c.initialJournal.length > 0 ? c.initialJournal : [
    { date: "", title: "", dr: 0, cr: 0 },
    { date: "", title: "", dr: 0, cr: 0 }
  ];
  journalData.forEach(row => addJournalRow(row.date, row.title, row.dr, row.cr));
  calculateBalance();
}

function addJournalRow(date = '', title = '', dr = 0, cr = 0) {
  const body = document.getElementById('journal-body');
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td><input type="text" value="${date}" placeholder="31 ธ.ค." oninput="calculateBalance()"></td>
    <td><input type="text" value="${title}" placeholder="ชื่อบัญชี (Dr. / Cr.)" oninput="calculateBalance()"></td>
    <td><input type="number" value="${dr || ''}" placeholder="0" style="text-align: right;" oninput="calculateBalance()"></td>
    <td><input type="number" value="${cr || ''}" placeholder="0" style="text-align: right;" oninput="calculateBalance()"></td>
    <td style="text-align: center;"><button onclick="this.closest('tr').remove(); calculateBalance();" style="color:red; background:none; border:none; cursor:pointer;">✖</button></td>
  `;
  body.appendChild(tr);
  calculateBalance();
}

function calculateBalance() {
  let totalDr = 0;
  let totalCr = 0;
  const rows = document.querySelectorAll('#journal-body tr');
  rows.forEach(tr => {
    const inputs = tr.querySelectorAll('input');
    totalDr += parseFloat(inputs[2].value) || 0;
    totalCr += parseFloat(inputs[3].value) || 0;
  });

  const status = document.getElementById('balance-status');
  if (totalDr === totalCr && totalDr > 0) {
    status.className = 'balance-status balanced';
    status.innerHTML = `✓ ดุลเดบิต-เครดิตเท่ากัน (${totalDr.toLocaleString()} บาท)`;
  } else {
    status.className = 'balance-status unbalanced';
    status.innerHTML = `ยอดเดบิต (${totalDr.toLocaleString()}) ≠ เครดิต (${totalCr.toLocaleString()})`;
  }
  autoSaveEssay();
}

function autoSaveEssay() {
  const essay = document.getElementById('essay-input').value;
  localStorage.setItem('exam_essay_case_' + currentCaseIndex, essay);
}

function toggleRubric() {
  document.getElementById('rubric-card').classList.toggle('show');
}

function clearEssayWorkspace() {
  if (confirm('ต้องการล้างข้อมูลซ้อมทำเคสนี้ทั้งหมดหรือไม่?')) {
    localStorage.removeItem('exam_essay_case_' + currentCaseIndex);
    loadCase(currentCaseIndex);
  }
}

function finishEssayPhase() {
  showFinalResults();
}
