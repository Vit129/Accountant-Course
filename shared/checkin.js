// Daily check-in streak — shared across all subjects (not tied to any single COURSE_CONFIG.storagePrefix).
// A "check-in" only records when a lesson is actually completed (called from engine.js's
// setLessonCompleted()) — NOT just by opening a page. Streak stays 0 until the first lesson passes.

function getCheckInState() {
  return {
    streak: parseInt(localStorage.getItem('cpa_checkin_streak') || '0', 10) || 0,
    bestStreak: parseInt(localStorage.getItem('cpa_checkin_best') || '0', 10) || 0,
  };
}

function localDateStr(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function recordDailyCheckIn() {
  const todayStr = localDateStr(new Date());
  const lastStr = localStorage.getItem('cpa_checkin_last');
  let { streak, bestStreak } = getCheckInState();

  if (lastStr === todayStr) {
    return { streak, bestStreak, isNewToday: false };
  }

  if (lastStr) {
    const diffDays = Math.round((new Date(todayStr) - new Date(lastStr)) / 86400000);
    streak = diffDays === 1 ? streak + 1 : 1;
  } else {
    streak = 1;
  }

  bestStreak = Math.max(bestStreak, streak);
  localStorage.setItem('cpa_checkin_last', todayStr);
  localStorage.setItem('cpa_checkin_streak', String(streak));
  localStorage.setItem('cpa_checkin_best', String(bestStreak));
  return { streak, bestStreak, isNewToday: true };
}

function renderCheckInBanner(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;

  const { streak, bestStreak } = getCheckInState();
  el.innerHTML = `
    <span class="checkin-icon">🔥</span>
    <span class="checkin-text">
      <strong>เข้าเรียนต่อเนื่อง ${streak} วัน</strong>
      <span>สถิติสูงสุด ${bestStreak} วัน</span>
    </span>
  `;
}

function renderCheckInMini(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;

  const { streak } = getCheckInState();
  el.innerHTML = `🔥 เช็คอินต่อเนื่อง <strong>${streak} วัน</strong>`;
}

window.addEventListener('DOMContentLoaded', () => {
  renderCheckInBanner('checkin-banner');
  renderCheckInMini('checkin-mini');
});
