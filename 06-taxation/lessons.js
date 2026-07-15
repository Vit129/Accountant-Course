// ภาษีอากร (Taxation) — CPA Interactive Learning Data
// สถานะ: บทนำ + Roadmap หัวข้อสอบ (จะลงลึกเป็นบทเรียนแบบ การบัญชี 1 ในลำดับถัดไป)

const COURSE_CONFIG = {
  storagePrefix: 'tax_',
  fileName: 'answer.txt',
  exampleLabel: '📊 ตัวอย่างการคำนวณ (Example)',
  runnerLabel: 'Grading Engine',
  runCommand: 'ตรวจสอบคำตอบข้อ',
  runButtonText: 'ตรวจคำตอบ',
  graduationTitle: 'ผ่านแบบฝึกหัดบทนำวิชาภาษีอากรแล้ว',
  graduationBody: 'บทเรียนเชิงลึกของวิชานี้ (ภ.ง.ด.บุคคลธรรมดา/นิติบุคคล, VAT, ภาษีธุรกิจเฉพาะ) จะทยอยเพิ่มในลำดับถัดไป — อ้างอิงเพิ่มเติมได้ที่ skill thai-accountant'
};

function parseNumberAfterEquals(text) {
  const match = text.match(/=\s*([\d,]+(?:\.\d+)?)/);
  if (!match) return null;
  return parseFloat(match[1].replace(/,/g, ''));
}

const LESSONS = [
  {
    id: "intro",
    meta: "บทนำ",
    title: "แนะนำวิชาภาษีอากร และ Roadmap หัวข้อสอบ",
    template: `ภาษีมูลค่าเพิ่ม = `,
    validate: (code, log) => {
      log("🔍 กำลังตรวจการคำนวณภาษีมูลค่าเพิ่ม (VAT)...");
      const val = parseNumberAfterEquals(code);
      if (val === null) {
        throw new Error("ไม่พบคำตอบในรูปแบบ 'ภาษีมูลค่าเพิ่ม = ตัวเลข'");
      }
      log(`✓ อ่านค่าคำตอบได้: ${val.toLocaleString()}`);
      if (val === 700) {
        log("✓ ถูกต้อง: VAT = ราคาสินค้าก่อนภาษี × 7% = 10,000 × 7% = 700");
      } else {
        throw new Error(`คำตอบยังไม่ถูกต้อง (ได้ ${val.toLocaleString()})\nสูตร: VAT = ราคาสินค้าก่อนภาษี × อัตราภาษี 7% = 10,000 × 0.07`);
      }
    },
    hint: "อัตราภาษีมูลค่าเพิ่มมาตรฐานของไทยคือ 7% (รวมภาษีท้องถิ่น)\nVAT = 10,000 × 7%",
    solution: `ภาษีมูลค่าเพิ่ม = 700`,
    theory: `<strong>วิชาภาษีอากร</strong> ครอบคลุมภาษีตามประมวลรัษฎากรที่ผู้สอบบัญชีต้องเข้าใจเพื่อประเมินภาระภาษีของกิจการที่ตรวจสอบ หัวข้อหลักที่ออกสอบ CPA (Roadmap — จะทยอยลงลึกทีละหัวข้อ):<br/><br/>
    <ol>
      <li><strong>ภาษีเงินได้บุคคลธรรมดา (Personal Income Tax)</strong> — เงินได้พึงประเมิน 8 ประเภท ค่าใช้จ่าย ค่าลดหย่อน อัตราภาษีก้าวหน้า</li>
      <li><strong>ภาษีเงินได้นิติบุคคล (Corporate Income Tax)</strong> — การปรับกำไรทางบัญชีเป็นกำไรสุทธิทางภาษี รายจ่ายต้องห้ามตามมาตรา 65 ตรี อัตราภาษี</li>
      <li><strong>ภาษีมูลค่าเพิ่ม (VAT)</strong> — ภาษีขาย ภาษีซื้อ อัตรา 7% ผู้มีหน้าที่จดทะเบียน ฐานภาษี</li>
      <li><strong>ภาษีธุรกิจเฉพาะ (Specific Business Tax)</strong> — ธุรกิจที่ต้องเสียแทน VAT เช่น ธุรกิจสถาบันการเงิน อสังหาริมทรัพย์</li>
      <li><strong>อากรแสตมป์ (Stamp Duty)</strong> — ตราสารที่ต้องปิดอากรแสตมป์</li>
      <li><strong>ภาษีหัก ณ ที่จ่าย (Withholding Tax)</strong> — อัตราตามประเภทเงินได้ หน้าที่นำส่ง</li>
    </ol>
    ดูรายละเอียดเชิงลึกเพิ่มเติมได้จาก skill <code>thai-accountant</code> (references/tax-accounting.md)`,
    example: `กิจการขายสินค้าราคา 50,000 บาท (ก่อน VAT)
ภาษีมูลค่าเพิ่ม = 50,000 × 7% = 3,500
ราคารวมที่เรียกเก็บจากลูกค้า = 50,000 + 3,500 = 53,500`,
    task: `กิจการขายสินค้าราคา <strong>10,000 บาท</strong> (ยังไม่รวมภาษีมูลค่าเพิ่ม)<br/>
    จงคำนวณภาษีมูลค่าเพิ่มที่ต้องเรียกเก็บ แล้วพิมพ์คำตอบในรูปแบบ:<br/>
    <code>ภาษีมูลค่าเพิ่ม = [ตัวเลข]</code>`
  }
];
