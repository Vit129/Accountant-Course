// Final-Project-only reward. Loaded after ../shared/gamification.js (see index.html) so this
// function declaration overwrites the generic showTrackCertificate() just for this page — every
// other subject still gets the plain certificate from shared/gamification.js, untouched.
//
// Themed around this capstone's own story instead of a generic "Certificate of Completion":
// the case (lessons.js) is a full audit engagement on "บริษัท ตัวอย่าง จำกัด" that ends in
// issuing an opinion, so the reward is a mock "sign-off authorization" instead of a boarding
// pass (there's no travel in this one, unlike QA-Automation-Coding-Course's Final-Project).
// Kept explicitly "honorary/for practice only" — never implies a real CPA license, matching
// this course's existing exam-authenticity honesty note (DESIGN.md's Avoid section).
function showTrackCertificate(trackTitle) {
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(43,38,32,.55);display:flex;align-items:center;justify-content:center;z-index:9999;padding:20px;';
  overlay.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;gap:16px;">
      <div id="signoff-card" style="position:relative;overflow:hidden;background:#FAF4E7;color:#2B2620;border-radius:14px;padding:32px 36px 26px;max-width:440px;width:100%;text-align:left;border:4px double #B45309;box-shadow:0 24px 70px rgba(43,38,32,.4);font-family:'Inter',sans-serif;">
        <div style="position:absolute;top:22px;right:-46px;width:180px;padding:6px 0;background:#b91c1c;color:#fef2f2;text-align:center;font-size:12px;font-weight:800;letter-spacing:1.5px;transform:rotate(28deg);box-shadow:0 4px 10px rgba(0,0,0,.25);border-top:1px dashed rgba(255,255,255,.5);border-bottom:1px dashed rgba(255,255,255,.5);">APPROVED TO SIGN</div>
        <div style="text-align:center;">
          <div style="font-size:36px;">🖋️</div>
          <h2 style="margin:8px 0 2px;font-size:19px;">ใบอนุญาตลงนามกิตติมศักดิ์</h2>
          <p style="margin:0 0 4px;font-size:12.5px;opacity:.7;">Honorary Engagement Sign-Off Authorization</p>
        </div>
        <div style="background:rgba(180,83,9,.08);border:1px solid rgba(180,83,9,.25);border-radius:8px;padding:14px 16px;margin:16px 0;font-size:13px;line-height:1.9;">
          <div style="display:flex;justify-content:space-between;"><span style="opacity:.65;">CLIENT</span><strong>บริษัท ตัวอย่าง จำกัด</strong></div>
          <div style="display:flex;justify-content:space-between;"><span style="opacity:.65;">ENGAGEMENT</span><strong>${escapeHtml(trackTitle)}</strong></div>
          <div style="display:flex;justify-content:space-between;"><span style="opacity:.65;">OPINION ISSUED</span><strong>Unmodified ✅</strong></div>
          <div style="display:flex;justify-content:space-between;"><span style="opacity:.65;">CASE PROGRESS</span><strong>${LESSONS.length}/${LESSONS.length} บททำครบแล้ว</strong></div>
        </div>
        <div style="border-top:2px dashed rgba(43,38,32,.3);margin:0 0 14px;"></div>
        <p style="margin:0 0 4px;font-size:12.5px;">ลงชื่อ ......................................................</p>
        <p style="margin:0 0 16px;font-size:11px;opacity:.65;">ผู้สอบบัญชีรับอนุญาตกิตติมศักดิ์ · ${new Date().toLocaleDateString('th-TH')}</p>
        <p style="margin:0;font-size:10.5px;opacity:.6;line-height:1.5;">🎓 ใบอนุญาตกิตติมศักดิ์เพื่อการฝึกฝนเท่านั้น ไม่ใช่ใบอนุญาตผู้สอบบัญชีรับอนุญาต (CPA) จริงจากสภาวิชาชีพบัญชี</p>
      </div>
      <div style="display:flex;gap:8px;">
        <button id="cert-download-btn" style="background:transparent;color:#B45309;border:2px solid #B45309;border-radius:6px;padding:10px 20px;font-weight:600;cursor:pointer;">📥 ดาวน์โหลด</button>
        <button id="cert-close-btn" style="background:#B45309;color:#FAF4E7;border:none;border-radius:6px;padding:10px 24px;font-weight:600;cursor:pointer;">🖋️ รับใบอนุญาต!</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.querySelector('#cert-close-btn').onclick = () => overlay.remove();
  overlay.querySelector('#cert-download-btn').onclick = () => {
    downloadElementAsImage(overlay.querySelector('#signoff-card'), `certificate-${trackTitle.replace(/\s+/g, '-')}.png`);
  };
}
