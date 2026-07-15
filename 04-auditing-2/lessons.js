// การสอบบัญชี 2 (Auditing 2) — CPA Interactive Learning Data
// สถานะ: บทนำ + Roadmap หัวข้อสอบ (จะลงลึกเป็นบทเรียนแบบ การบัญชี 1 ในลำดับถัดไป)

const COURSE_CONFIG = {
  storagePrefix: 'audit2_',
  fileName: 'answer.txt',
  exampleLabel: '📊 ตัวอย่าง (Example)',
  runnerLabel: 'Grading Engine',
  runCommand: 'ตรวจสอบคำตอบข้อ',
  runButtonText: 'ตรวจคำตอบ',
  graduationTitle: 'ผ่านแบบฝึกหัดบทนำวิชาการสอบบัญชี 2 แล้ว',
  graduationBody: 'บทเรียนเชิงลึกของวิชานี้ (วงจรบัญชี, กระดาษทำการ, รายงานผู้สอบบัญชี) จะทยอยเพิ่มในลำดับถัดไป'
};

const LESSONS = [
  {
    id: "intro",
    meta: "บทนำ",
    title: "แนะนำวิชาการสอบบัญชี 2 และ Roadmap หัวข้อสอบ",
    template: `ประเภทความเห็น = `,
    validate: (code, log) => {
      log("🔍 กำลังตรวจการเลือกประเภทรายงานผู้สอบบัญชี...");
      const hasQualified = /Qualified\s*Opinion/i.test(code);
      const hasUnqualified = /Unqualified/i.test(code);
      const hasAdverse = /Adverse/i.test(code);
      const hasDisclaimer = /Disclaimer/i.test(code);

      if (hasUnqualified || hasAdverse || hasDisclaimer) {
        throw new Error("คำตอบยังไม่ถูกต้อง — ข้อผิดพลาดมีสาระสำคัญ (Material) แต่ไม่กระทบเป็นวงกว้าง (ไม่ Pervasive) จึงไม่ใช่ Unqualified, Adverse, หรือ Disclaimer");
      }
      if (!hasQualified) {
        throw new Error("ไม่พบคำตอบ 'Qualified Opinion'\nพิมพ์ในรูปแบบ: ประเภทความเห็น = Qualified Opinion");
      }
      log("✓ ถูกต้อง: ข้อผิดพลาดมีสาระสำคัญแต่ไม่กระทบเป็นวงกว้าง → แสดงความเห็นแบบมีเงื่อนไข (Qualified Opinion)");
    },
    hint: "ใช้ตารางตัดสินใจ 2 มิติ: สาระสำคัญ (Material?) × ขอบเขตผลกระทบ (Pervasive?)\nMaterial แต่ไม่ Pervasive → Qualified Opinion (แสดงความเห็นแบบมีเงื่อนไข)",
    solution: `ประเภทความเห็น = Qualified Opinion`,
    theory: `<strong>วิชาการสอบบัญชี 2</strong> ต่อยอดจากวิชาการสอบบัญชี 1 เน้นการปฏิบัติงานตรวจสอบจริงและการสรุปผล หัวข้อหลักที่ออกสอบ CPA (Roadmap — จะทยอยลงลึกทีละหัวข้อ):<br/><br/>
    <ol>
      <li><strong>การตรวจสอบตามวงจรบัญชี (Audit Cycles)</strong> — วงจรรายได้ วงจรจัดซื้อ วงจรเงินเดือน วงจรสินค้าคงเหลือ วงจรเงินลงทุนและเงินกู้ยืม</li>
      <li><strong>กระดาษทำการ (Working Papers)</strong> — การจัดทำและเก็บรักษาหลักฐานการตรวจสอบ</li>
      <li><strong>เหตุการณ์ภายหลังวันที่ในงบการเงิน (Subsequent Events)</strong></li>
      <li><strong>การดำเนินงานต่อเนื่อง (Going Concern)</strong></li>
      <li><strong>รายงานของผู้สอบบัญชีรับอนุญาต (Audit Report)</strong> — 4 ประเภทความเห็น: ไม่มีเงื่อนไข (Unqualified), มีเงื่อนไข (Qualified), ไม่แสดงความเห็น (Disclaimer), แสดงความเห็นในทางลบ (Adverse)</li>
      <li><strong>ความรับผิดชอบทางกฎหมายของผู้สอบบัญชี</strong></li>
    </ol>
    <strong>ตารางตัดสินใจประเภทความเห็น:</strong><br/>
    <table>
      <tr><th></th><th>Material (มีสาระสำคัญ)</th><th>Material &amp; Pervasive (กระทบวงกว้าง)</th></tr>
      <tr><td>งบการเงินขัดต่อข้อเท็จจริง</td><td>Qualified Opinion</td><td>Adverse Opinion</td></tr>
      <tr><td>หาหลักฐานไม่เพียงพอ (Scope Limitation)</td><td>Qualified Opinion</td><td>Disclaimer of Opinion</td></tr>
    </table>`,
    example: `กรณี: ผู้สอบบัญชีไม่สามารถเข้าตรวจนับสินค้าคงเหลือได้ (Scope Limitation) และผลกระทบมีสาระสำคัญและกระทบเป็นวงกว้างต่องบการเงินโดยรวม
→ Disclaimer of Opinion (ไม่แสดงความเห็น)`,
    task: `กรณี: ผู้สอบบัญชีพบว่ากิจการบันทึกค่าเสื่อมราคาผิดวิธี ทำให้กำไรสุทธิคลาดเคลื่อนอย่างมีสาระสำคัญ (Material) แต่ผลกระทบจำกัดอยู่เฉพาะรายการนี้ ไม่กระทบภาพรวมงบการเงินทั้งฉบับ (ไม่ Pervasive)<br/><br/>
    จงระบุประเภทความเห็นของผู้สอบบัญชีที่เหมาะสม แล้วพิมพ์คำตอบในรูปแบบ:<br/>
    <code>ประเภทความเห็น = [Unqualified/Qualified/Adverse/Disclaimer] Opinion</code>`
  }
];
