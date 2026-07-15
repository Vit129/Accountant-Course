// การสอบบัญชี 1 (Auditing 1) — CPA Interactive Learning Data
// สถานะ: บทนำ + Roadmap หัวข้อสอบ (จะลงลึกเป็นบทเรียนแบบ การบัญชี 1 ในลำดับถัดไป)

const COURSE_CONFIG = {
  storagePrefix: 'audit1_',
  fileName: 'answer.txt',
  exampleLabel: '📊 ตัวอย่างการคำนวณ (Example)',
  runnerLabel: 'Grading Engine',
  runCommand: 'ตรวจสอบคำตอบข้อ',
  runButtonText: 'ตรวจคำตอบ',
  graduationTitle: 'ผ่านแบบฝึกหัดบทนำวิชาการสอบบัญชี 1 แล้ว',
  graduationBody: 'บทเรียนเชิงลึกของวิชานี้ (TSA, ความเสี่ยง, หลักฐานการสอบบัญชี) จะทยอยเพิ่มในลำดับถัดไป'
};

function parseNumberAfterEquals(text) {
  const match = text.match(/=\s*([\d.]+)/);
  if (!match) return null;
  return parseFloat(match[1]);
}

const LESSONS = [
  {
    id: "intro",
    meta: "บทนำ",
    title: "แนะนำวิชาการสอบบัญชี 1 และ Roadmap หัวข้อสอบ",
    template: `ความเสี่ยงจากการตรวจสอบที่ยอมรับได้ (DR) = `,
    validate: (code, log) => {
      log("🔍 กำลังตรวจแบบจำลองความเสี่ยงจากการสอบบัญชี (Audit Risk Model)...");
      const val = parseNumberAfterEquals(code);
      if (val === null) {
        throw new Error("ไม่พบคำตอบในรูปแบบ 'ความเสี่ยงจากการตรวจสอบที่ยอมรับได้ (DR) = ตัวเลข' (หน่วย %)");
      }
      log(`✓ อ่านค่าคำตอบได้: ${val}%`);
      if (Math.abs(val - 12.5) < 0.01) {
        log("✓ ถูกต้อง: DR = AR ÷ (IR × CR) = 5% ÷ (80% × 50%) = 12.5%");
      } else {
        throw new Error(`คำตอบยังไม่ถูกต้อง (ได้ ${val}%)\nสูตร Audit Risk Model: AR = IR × CR × DR\nDR = AR ÷ (IR × CR) = 5% ÷ (0.8 × 0.5)`);
      }
    },
    hint: "แบบจำลองความเสี่ยงจากการสอบบัญชี: AR = IR × CR × DR\nจัดรูปใหม่: DR = AR ÷ (IR × CR) = 5% ÷ (80% × 50%)",
    solution: `ความเสี่ยงจากการตรวจสอบที่ยอมรับได้ (DR) = 12.5`,
    theory: `<strong>วิชาการสอบบัญชี 1</strong> ปูพื้นฐานแนวคิดและมาตรฐานที่ผู้สอบบัญชีต้องยึดถือ หัวข้อหลักที่ออกสอบ CPA (Roadmap — จะทยอยลงลึกทีละหัวข้อ):<br/><br/>
    <ol>
      <li><strong>แม่บทและมาตรฐานการสอบบัญชี (TSA)</strong> — กรอบมาตรฐานที่สภาวิชาชีพบัญชีรับรอง (อิงตาม ISA สากล)</li>
      <li><strong>จรรยาบรรณของผู้ประกอบวิชาชีพบัญชี (Code of Ethics)</strong> — ความเป็นอิสระ (Independence) ความเที่ยงธรรม ความซื่อสัตย์สุจริต การรักษาความลับ</li>
      <li><strong>การวางแผนงานสอบบัญชีและความมีสาระสำคัญ (Materiality)</strong></li>
      <li><strong>การประเมินความเสี่ยง (Risk Assessment)</strong> — Audit Risk Model: ความเสี่ยงสืบเนื่อง (Inherent Risk) ความเสี่ยงจากการควบคุม (Control Risk) และความเสี่ยงจากการตรวจสอบที่ยอมรับได้ (Detection Risk)</li>
      <li><strong>หลักฐานการสอบบัญชี (Audit Evidence)</strong> — วิธีการตรวจสอบ 8 วิธี: สอบทาน สอบถาม ตรวจสอบเอกสาร สังเกตการณ์ คำนวณใหม่ ปฏิบัติซ้ำ ยืนยันยอด วิเคราะห์เปรียบเทียบ</li>
      <li><strong>การควบคุมภายใน (Internal Control)</strong> — องค์ประกอบตามกรอบ COSO 5 องค์ประกอบ</li>
      <li><strong>การสุ่มตัวอย่างทางการสอบบัญชี (Audit Sampling)</strong></li>
    </ol>`,
    example: `ผู้สอบบัญชีประเมิน IR = 100% (สูงสุด, ไม่พึ่งพาการควบคุม) CR = 60%
ต้องการ Audit Risk รวมไม่เกิน 5%

DR = AR ÷ (IR × CR) = 5% ÷ (100% × 60%) = 8.33%
→ ต้องออกแบบวิธีการตรวจสอบให้ Detection Risk ไม่เกิน 8.33%`,
    task: `ผู้สอบบัญชีประเมิน <strong>ความเสี่ยงสืบเนื่อง (IR) = 80%</strong> และ <strong>ความเสี่ยงจากการควบคุม (CR) = 50%</strong> โดยต้องการให้ <strong>ความเสี่ยงจากการสอบบัญชีโดยรวม (AR) ไม่เกิน 5%</strong><br/><br/>
    จงคำนวณ <strong>ความเสี่ยงจากการตรวจสอบที่ยอมรับได้ (Detection Risk, DR)</strong> แล้วพิมพ์คำตอบเป็นเปอร์เซ็นต์ในรูปแบบ:<br/>
    <code>ความเสี่ยงจากการตรวจสอบที่ยอมรับได้ (DR) = [ตัวเลข]</code>`
  }
];
