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

  document.getElementById('exam-screen').classList.remove('show');
  document.getElementById('results-screen').classList.add('show');
  renderResults(results, correctCount, timeUp);
}

function renderResults(results, correctCount, timeUp) {
  const total = results.length;
  const percent = Math.round((correctCount / total) * 100);

  const timeUpNote = timeUp ? `<p class="time-up-note">⏱ หมดเวลา — ระบบส่งคำตอบอัตโนมัติ</p>` : '';

  document.getElementById('score-summary').innerHTML = `
    ${timeUpNote}
    <div class="score-big">${correctCount} / ${total}</div>
    <div class="score-percent">${percent}%</div>
    <p class="score-note">หมายเหตุ: นี่คือคะแนนจากคลังข้อสอบของเว็บนี้เท่านั้น ไม่ใช่เกณฑ์ผ่านจริงของสภาวิชาชีพบัญชี — โปรดตรวจสอบเกณฑ์สอบผ่านที่เป็นทางการแยกต่างหาก</p>
  `;

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
  document.getElementById('results-screen').classList.remove('show');
  document.getElementById('start-screen').classList.add('show');
  EXAM_STATE.questions = [];
  EXAM_STATE.answers = {};
  EXAM_STATE.currentIndex = 0;
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
