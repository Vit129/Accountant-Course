// Gamification layer: milestone messages + completion certificates.
// Requires shared/engine.js's contract to already be loaded first:
//   const COURSE_CONFIG, const LESSONS, function isLessonCompleted(), function showDialog(), function escapeHtml()
// Called from engine.js's setLessonCompleted() and showGraduationMessage().

const MILESTONES = [
  { pct: 50, label: 'ครึ่งทางแล้ว!' },
  { pct: 75, label: 'อีกนิดเดียว!' },
];

function checkMilestones() {
  const completed = LESSONS.filter(l => isLessonCompleted(l.id));
  const percent = Math.round((completed.length / LESSONS.length) * 100);

  MILESTONES.forEach(({ pct, label }) => {
    const key = `${COURSE_CONFIG.storagePrefix}milestone_${pct}`;
    if (percent >= pct && localStorage.getItem(key) !== 'true') {
      localStorage.setItem(key, 'true');
      const skills = completed.map(l => `✓ ${l.title}`).join('\n');
      showDialog(`🎯 ${label} (${percent}%)`, `ตอนนี้คุณเรียนเรื่องเหล่านี้ได้แล้ว:\n\n${skills}`, false);
    }
  });
}

// Downloads a DOM node as a PNG via html2canvas (loaded from CDN alongside this file).
// A plain SVG-foreignObject→canvas rasterization taints the canvas in modern browsers
// (SecurityError on toBlob/toDataURL) — html2canvas avoids that by painting the DOM onto
// canvas itself with Canvas 2D primitives instead of rasterizing an SVG image.
function downloadElementAsImage(el, filename) {
  html2canvas(el, { backgroundColor: null, scale: 2 }).then((canvas) => {
    canvas.toBlob((blob) => {
      const link = document.createElement('a');
      link.download = filename;
      link.href = URL.createObjectURL(blob);
      link.click();
    });
  });
}

// Small "certificate" overlay shown when a track hits 100% (game-like reward, no PDF/print dependency)
function showTrackCertificate(trackTitle) {
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(43,38,32,.45);display:flex;align-items:center;justify-content:center;z-index:9999;padding:20px;';
  overlay.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;gap:16px;">
      <div id="cert-card" style="background:#FAF4E7;color:#2B2620;border-radius:12px;padding:32px 40px;max-width:420px;text-align:center;border:4px double #f59e0b;box-shadow:0 20px 60px rgba(43,38,32,.35);">
        <div style="font-size:40px;">🏅</div>
        <h2 style="margin:8px 0 4px;font-size:20px;">ใบประกาศจบวิชา</h2>
        <p style="margin:0 0 16px;font-size:13px;opacity:.7;">Certificate of Completion</p>
        <p style="font-size:16px;font-weight:600;margin:0 0 4px;">${escapeHtml(trackTitle)}</p>
        <p style="font-size:13px;opacity:.7;margin:0 0 20px;">${LESSONS.length} บทเรียน ครบทุกบทแล้ว! · ${new Date().toLocaleDateString('th-TH')}</p>
      </div>
      <div style="display:flex;gap:8px;">
        <button id="cert-download-btn" style="background:transparent;color:#B45309;border:2px solid #f59e0b;border-radius:6px;padding:10px 20px;font-weight:600;cursor:pointer;">📥 ดาวน์โหลด</button>
        <button id="cert-close-btn" style="background:#f59e0b;color:#2B2620;border:none;border-radius:6px;padding:10px 24px;font-weight:600;cursor:pointer;">เก็บใบประกาศ 🎉</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.querySelector('#cert-close-btn').onclick = () => overlay.remove();
  overlay.querySelector('#cert-download-btn').onclick = () => {
    downloadElementAsImage(overlay.querySelector('#cert-card'), `certificate-${trackTitle.replace(/\s+/g, '-')}.png`);
  };
}

// Composite certificate: fires once BOTH the exam (scored 100%) and the Final-Project (all
// lessons complete) conditions are met. Checked from both trigger points — exam-engine.js's
// renderResults() and engine.js's showGraduationMessage() — since either can complete last.
// No "already shown" guard, deliberately: showTrackCertificate() above has none either, so a
// repeat trigger (e.g. retaking the exam) just re-shows the popup, which is harmless.
function checkGrandCertificate() {
  const examPassed = localStorage.getItem('exam_full_score_passed') === 'true';
  const projectDone = localStorage.getItem('final_project_completed') === 'true';
  if (examPassed && projectDone) {
    showGrandCertificate();
  }
}

function showGrandCertificate() {
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(43,38,32,.45);display:flex;align-items:center;justify-content:center;z-index:9999;padding:20px;';
  overlay.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;gap:16px;">
      <div id="grand-cert-card" style="background:#FAF4E7;color:#2B2620;border-radius:16px;padding:40px 48px;max-width:480px;text-align:center;border:4px double #f59e0b;box-shadow:0 30px 80px rgba(43,38,32,.35);">
        <div style="font-size:56px;">🎓</div>
        <h2 style="margin:8px 0 4px;font-size:24px;">ใบประกาศจบหลักสูตรบัญชี</h2>
        <p style="margin:0 0 20px;font-size:13px;opacity:.7;">Accountant Learning · Certificate of Completion</p>
        <p style="font-size:15px;margin:0 0 20px;line-height:1.6;">สอบผ่านด้วยคะแนนเต็ม 100%<br/>และทำ Final-Project สำเร็จครบทุกบท<br/>${new Date().toLocaleDateString('th-TH')}</p>
      </div>
      <div style="display:flex;gap:8px;">
        <button id="grand-cert-download" style="background:transparent;color:#B45309;border:2px solid #f59e0b;border-radius:6px;padding:11px 24px;font-weight:700;cursor:pointer;">📥 ดาวน์โหลด</button>
        <button id="grand-cert-close" style="background:#f59e0b;color:#2B2620;border:none;border-radius:6px;padding:12px 32px;font-weight:700;cursor:pointer;">🏆 รับใบประกาศ!</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.querySelector('#grand-cert-close').onclick = () => overlay.remove();
  overlay.querySelector('#grand-cert-download').onclick = () => {
    downloadElementAsImage(overlay.querySelector('#grand-cert-card'), 'certificate-Accountant-Learning-Grand.png');
  };
}
