# Graph Report - Accountant-Learning  (2026-08-28)

## Corpus Check
- 70 files · ~140,802 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1588 nodes · 1564 edges · 153 communities (143 shown, 10 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `06722fff`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## God Nodes (most connected - your core abstractions)
1. `LESSONS` - 90 edges
2. `LESSONS` - 34 edges
3. `LESSONS` - 33 edges
4. `LESSONS` - 31 edges
5. `LESSONS` - 29 edges
6. `สรุปเจาะลึก: การสอบบัญชี 2 (Auditing 2) — ระดับข้อสอบ CPA` - 27 edges
7. `สรุปเจาะลึก บัญชีต้นทุน/บัญชีบริหาร (Cost & Managerial Accounting) — ระดับข้อสอบ CPA` - 27 edges
8. `LESSONS` - 26 edges
9. `สรุปเจาะลึก: การสอบบัญชี 1 (Auditing 1) — ระดับข้อสอบ CPA` - 22 edges
10. `LESSONS` - 20 edges

## Cross-Cutting Nodes (span the most distinct areas of the codebase)
A high-degree node isn't always architecturally central - a widely-used
utility/config file can rack up more edges than a real coupler while only
ever touching one area. This ranks by how many DIFFERENT communities a
node's neighbors span, not by raw edge count.
1. `สรุปเจาะลึก บัญชีต้นทุน/บัญชีบริหาร (Cost & Managerial Accounting) — ระดับข้อสอบ CPA` - bridges 23 areas (27 edges)
2. `สรุปเจาะลึก: การสอบบัญชี 2 (Auditing 2) — ระดับข้อสอบ CPA` - bridges 21 areas (27 edges)
3. `สรุปเจาะลึก: การสอบบัญชี 1 (Auditing 1) — ระดับข้อสอบ CPA` - bridges 16 areas (22 edges)
4. `สรุปเจาะลึก การบัญชี 1 (Financial Accounting 1) — ระดับข้อสอบ CPA` - bridges 15 areas (20 edges)
5. `LESSONS` - bridges 1 areas (90 edges)
6. `บทที่ 15: สินทรัพย์ไม่มีตัวตน (Intangible Assets) — TAS 38` - bridges 1 areas (7 edges)
7. `บทที่ 12: ตั๋วเงินรับและดอกเบี้ย (Notes Receivable)` - bridges 1 areas (6 edges)
8. `บทที่ 3: จรรยาบรรณผู้ประกอบวิชาชีพบัญชี (Code of Ethics)` - bridges 1 areas (6 edges)
9. `บทที่ 7: TSA 315 — การระบุและประเมินความเสี่ยงที่สำคัญ (Significant Risk)` - bridges 1 areas (6 edges)
10. `บทที่ 8: TSA 240 — ความรับผิดชอบของผู้สอบบัญชีเกี่ยวกับการทุจริต` - bridges 1 areas (6 edges)

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Project Documentation Set (Vision + Design System + Overview)** — readme, product, design [INFERRED 0.75]

## Communities (153 total, 10 thin omitted)

### Community 0 - "Shared Style Tokens"
Cohesion: 0.02
Nodes (94): :root, .sidebar-title, .btn-hint, .btn-solution, .btn-hint:hover, .btn-solution:hover, .sidebar-title span, .sidebar-subtitle, .lesson-list (+86 more)

### Community 1 - "Financial Accounting 1 UI"
Cohesion: 0.05
Nodes (35): COURSE_CONFIG, LESSONS, ระบบต้นทุนฐานกิจกรรม (Activity-Based Costing - ABC), ผลิตภัณฑ์พลอยได้ (Byproduct) — วิธี Production Method, งบต้นทุนการผลิต (Cost of Goods Manufactured), การตัดสินใจภายใต้ทรัพยากรจำกัด (Constrained Resource / Bottleneck Decision), พฤติกรรมต้นทุน (High-Low Method), การจำแนกต้นทุน (Cost Classification) (+27 more)

### Community 2 - "Financial Accounting 2 UI"
Cohesion: 0.06
Nodes (30): COURSE_CONFIG, LESSONS, การประเมินมูลค่าพันธบัตร (Bond Valuation), การประเมินมูลค่าพันธบัตรที่จ่ายดอกเบี้ยปีละ 2 ครั้ง (Semi-Annual Coupon Bond), ต้นทุนส่วนของผู้ถือหุ้นด้วยแบบจำลอง CAPM, รอบระยะเวลาเงินสด (Cash Conversion Cycle), ต้นทุนหนี้สินหลังภาษี (After-Tax Cost of Debt), อัตราส่วนเงินทุนหมุนเวียน (Current Ratio) (+22 more)

### Community 3 - "Auditing 1 UI"
Cohesion: 0.05
Nodes (42): 1. สัดส่วนตัวเลขสำคัญที่มักสับสนกัน, 2. หน่วยงานกำกับดูแลที่มักสับสน, Source, กรณีศึกษา/สถานการณ์ที่มักออกข้อสอบ, กรณีศึกษา/สถานการณ์ที่มักออกข้อสอบ, กรณีศึกษา/สถานการณ์ที่มักออกข้อสอบ, กรณีศึกษา/สถานการณ์ที่มักออกข้อสอบ, กรณีศึกษา/สถานการณ์ที่มักออกข้อสอบ (+34 more)

### Community 4 - "Auditing 2 UI"
Cohesion: 0.05
Nodes (41): 1.1 หลักการและสูตรหลัก, 1.2 ตัวอย่างตัวเลขซับซ้อน, 1.3 จุดที่ข้อสอบชอบออก / กับดัก, 1. มูลค่าเงินตามเวลา (Time Value of Money), 2.1 ลำดับการคำนวณกระแสเงินสดโครงการที่ถูกต้อง, 2.2 เกณฑ์การประเมินโครงการ, 2.3 การประมาณ IRR ด้วยวิธี Interpolation (เมื่อไม่มีเครื่องคิดเลขการเงิน), 2.4 จุดที่ข้อสอบชอบออก / กับดัก (+33 more)

### Community 5 - "Law Module UI"
Cohesion: 0.05
Nodes (39): 1.1 การจัดตั้งและเงินลงทุนเริ่มแรก, 1.2 การแบ่งกำไรขาดทุน (Profit & Loss Allocation), 1.3 การรับหุ้นส่วนใหม่ (Admission of New Partner), 1.4 การลาออกของหุ้นส่วน (Partner Retirement/Withdrawal), 1.5 การเลิกห้างหุ้นส่วน (Partnership Liquidation), 1. ห้างหุ้นส่วน (Partnership Accounting), 2.1 ทุนเรือนหุ้นและส่วนเกินมูลค่าหุ้น, 2.2 เงินปันผล: หุ้นบุริมสิทธิสะสมกับไม่สะสม (+31 more)

### Community 6 - "Taxation Module UI"
Cohesion: 0.05
Nodes (39): 1.1 นิยามคนต่างด้าว (ม.4) และการจำแนกบัญชีธุรกิจ (ม.8), 1.2 ทุนขั้นต่ำตามมาตรา 14 และการขอหนังสือรับรอง (FBC), 1.3 ความรับผิดกรณี Nominee (ม.36) และขอบเขตสำนักงานผู้แทน, 2.1 สิทธิจองซื้อหุ้นเพิ่มทุนตามส่วน (ป.พ.พ. มาตรา 1222), 2.2 การร้องขอให้แต่งตั้งผู้ตรวจสอบกิจการ (Inspector), 2.3 การชำระบัญชี (ป.พ.พ. มาตรา 1269) และหน้าที่รายงาน, 3.1 การซื้อหุ้นคืน (Treasury Shares) ตามมาตรา 66 และ 66/1, 3.2 มติพิเศษ 3 ใน 4 สำหรับธุรกรรมสำคัญ (มาตรา 107(2)) (+31 more)

### Community 7 - "Exam Engine Logic"
Cohesion: 0.10
Nodes (31): addJournalRow(), autoSaveEssay(), buildQuestionPool(), calculateBalance(), clearEssayWorkspace(), confirmSubmitExam(), ESSAY_CASES, เคสที่ 1: [การบัญชี 1 & 2] การปันส่วนรายได้ TFRS 15 และรายการปรับปรุงงบการเงิน (25 คะแนน) (+23 more)

### Community 8 - "Lesson Runner Engine"
Cohesion: 0.19
Nodes (18): applySolution(), escapeHtml(), getFirstIncompleteIndex(), handleTextareaKeydown(), initApp(), isLessonCompleted(), loadLesson(), renderLessonList() (+10 more)

### Community 9 - "Exam Screen UI"
Cohesion: 0.05
Nodes (37): 1.1 TAS 36 — การคำนวณมูลค่าจากการใช้ (VIU) และผลขาดทุนจากการด้อยค่า, 1.2 TAS 36 — การกลับรายการผลขาดทุนจากการด้อยค่าภายใต้กฎเพดาน (Ceiling Rule), 1.3 TAS 16 — การแลกเปลี่ยนสินทรัพย์ที่มีเนื้อหาเชิงพาณิชย์, 2.1 TFRS 9 — การวัดมูลค่า ECL 3-Stage Model และการรับรู้รายได้ดอกเบี้ย, 2.2 TFRS 9 — การบัญชีป้องกันความเสี่ยงมูลค่ายุติธรรม (Fair Value Hedge), 2.3 TAS 32 — การจัดประเภทตราสารทางการเงิน, 3.1 TFRS 3 — การรวมธุรกิจแบบเป็นขั้นตอน (Step Acquisition), 3.2 TFRS 10 — การสูญเสียอำนาจควบคุมในบริษัทย่อย (Disposal with Loss of Control) (+29 more)

### Community 10 - "Product & Design Docs"
Cohesion: 0.25
Nodes (7): Core Features, Core Problems, Out of Scope, Product, Success Metrics, Target Users, Vision

### Community 11 - "Responsive Layout Breakpoints"
Cohesion: 0.06
Nodes (34): 1.1 หลักการและมาตราหลัก, 1.2 อัตราภาษี, 1.3 วิธีคำนวณภาษี SME แบบขั้นบันได (Bracket-by-Bracket), 1.4 การปรับปรุงกำไรทางบัญชีเป็นกำไรสุทธิทางภาษี, 1.5 กำหนดเวลายื่นแบบ, 1.6 เครดิตภาษีต่างประเทศ (Foreign Tax Credit), 1. ภาษีเงินได้นิติบุคคล (CIT), 2.1 สูตรคำนวณ (+26 more)

### Community 13 - "Changelog Automation Config"
Cohesion: 0.07
Nodes (29): 1.1 การกลับรายการผ่าน P/L และ OCI (TAS 16), 1.2 การโอนเปลี่ยนประเภท PPE เป็น IP (TAS 40 ปฏิบัติเหมือน TAS 16), 1.3 เงินอุดหนุนรัฐบาลที่เกี่ยวข้องกับสินทรัพย์ (TAS 20), 2.1 TSA 450 — การประเมินผลรวมข้อผิดพลาด, 2.2 TSA 501 — สินค้าคงเหลือเข้าตรวจนับไม่ได้, 2.3 TSA 720 — ความขัดแย้งกับข้อมูลอื่น, 3.1 ละเมิดตาม ป.พ.พ. มาตรา 420, 3.2 การควบบริษัทตามมาตรา 1240 (+21 more)

### Community 14 - "Workspace Layout Breakpoints"
Cohesion: 0.09
Nodes (22): #active-filename, #checkin-mini, #current-lesson-title, #dialog-action-btn, #dialog-content, #dialog-overlay, #dialog-title, #editor-gutter (+14 more)

### Community 15 - "Number Parsing Variant A"
Cohesion: 0.09
Nodes (21): COURSE_CONFIG, LESSONS, การคำนวณรายได้ตามเกณฑ์คงค้าง (Accrual Basis) จากยอดเงินสดรับ ผสมปรับปรุงลูกหนี้และรายได้รับล่วงหน้า, รายการปรับปรุง (Adjusting Entries), การจำหน่ายสินทรัพย์ถาวร (Disposal of PP&E), หนี้สงสัยจะสูญและค่าเผื่อหนี้สงสัยจะสูญ (Allowance Method), การกระทบยอดเงินฝากธนาคาร (Bank Reconciliation), การปิดบัญชี (Closing Entries) (+13 more)

### Community 16 - "Number Parsing Variant B"
Cohesion: 0.07
Nodes (27): COURSE_CONFIG, LESSONS, หลักฐานการสอบบัญชี: วิธีการตรวจสอบ (Audit Procedures), แบบจำลองความเสี่ยงจากการสอบบัญชี: คำนวณความเสี่ยงจากการตรวจไม่พบ (Detection Risk), แบบจำลองความเสี่ยงจากการสอบบัญชี (Audit Risk Model), การสุ่มตัวอย่างทางการสอบบัญชี (Audit Sampling), เทคนิคการตรวจสอบโดยใช้คอมพิวเตอร์ช่วย (CAATs): เลือกเทคนิคให้เหมาะกับวัตถุประสงค์, จรรยาบรรณผู้ประกอบวิชาชีพบัญชี (Code of Ethics) (+19 more)

### Community 17 - "Number Parsing Variant C"
Cohesion: 0.06
Nodes (32): COURSE_CONFIG, LESSONS, ข้อกล่าวอ้างของผู้บริหาร (Management Assertions), TSA 705: การตัดสินใจเลือกประเภทรายงานผู้สอบบัญชี กรณีข้อผิดพลาดการขัดต่อข้อเท็จจริงอันเป็นสาระสำคัญ (Material & Pervasiv, ประเภทความเห็นของผู้สอบบัญชี (Audit Opinion), โครงสร้างรายงานผู้สอบบัญชี: เรื่องสำคัญในการตรวจสอบ (Key Audit Matters), วงจรเงินสด: การขอคำยืนยันยอดธนาคารและการตรวจนับเงินสด (Cash Audit Procedures), โจทย์อัตนัย CPA Set 1 (ข้อ 2): การเสนอรายงานผู้สอบบัญชี กรณีเพลิงไหม้คลังสินค้า 30 ล้านบาท (+24 more)

### Community 18 - "Number Parsing Variant D"
Cohesion: 0.02
Nodes (90): LESSONS, พระราชบัญญัติการบัญชี พ.ศ. 2543: หน้าที่ของผู้มีหน้าที่จัดทำบัญชี บทลงโทษทางอาญาและการปรับรายวัน, พระราชบัญญัติการบัญชี พ.ศ. 2543: การเก็บรักษาบัญชีและเอกสาร, พ.ร.บ.การบัญชี พ.ศ. 2543: การขออนุมัติเปลี่ยนรอบปีบัญชี 12 เดือน (มาตรา 10), พ.ร.บ.การบัญชี พ.ศ. 2543: สารวัตรใหญ่บัญชีและสารวัตรบัญชี (มาตรา 4), พ.ร.บ.การบัญชี: บทกำหนดโทษ (หมวด 5) และความรับผิดร่วมของกรรมการนิติบุคคลตามมาตรา 40, พ.ร.บ.การบัญชี: ชนิดของบัญชีที่ต้องจัดทำและรายการที่ต้องมีตามมาตรา 7(1) และ 7(2), พ.ร.บ.การบัญชี: การแจ้งบัญชีหรือเอกสารสูญหายหรือเสียหายตามมาตรา 15 (แบบ ส.บช.2) (+82 more)

### Community 19 - "Number Parsing Variant E"
Cohesion: 0.06
Nodes (34): COURSE_CONFIG, LESSONS, ภาษีเงินได้นิติบุคคล: การคำนวณกำไรสุทธิเพื่อเสียภาษี (มาตรา 65 สอง / 65 ตรี) ผสมการปรับปรุง 5 รายการซับซ้อน, ภาษีเงินได้นิติบุคคล/ภาษีธุรกิจเฉพาะ: การโอนกรรมสิทธิ์ที่ดินจากการแปรสภาพบริษัทจำกัดเป็นมหาชน, ภาษีเงินได้นิติบุคคล: รายจ่ายต้องห้าม (มาตรา 65 ตรี), โจทย์อัตนัย CPA Set 1 (ข้อ 4): ภาษีเงินได้นิติบุคคลจากกำไรบัญชี 8 ล้านบาท, จังหวะรับรู้รายจ่าย: ทรัพย์สินสูญหายจากการโจรกรรม (ป.58/2538) vs สินค้าชำรุดทำลายทิ้ง (ป.79/2541), ภาษี: สัญญาเช่าที่มีเจตนาโอนกรรมสิทธิ์ (Finance Lease) ถือเป็นการขายผ่อนชำระ (+26 more)

### Community 20 - "Agent Memory Scaffolding"
Cohesion: 0.09
Nodes (22): #active-filename, #checkin-mini, #current-lesson-title, #dialog-action-btn, #dialog-content, #dialog-overlay, #dialog-title, #editor-gutter (+14 more)

### Community 21 - "Release Script"
Cohesion: 0.09
Nodes (22): #active-filename, #checkin-mini, #current-lesson-title, #dialog-action-btn, #dialog-content, #dialog-overlay, #dialog-title, #editor-gutter (+14 more)

### Community 22 - "Root Index Page"
Cohesion: 0.22
Nodes (6): checkForUpdates(), #checkin-banner, #footer-version, #import-progress-input, showUpdateBanner(), #update-banner-slot

### Community 23 - "Design System"
Cohesion: 0.12
Nodes (16): 1.1 คำนวณรายได้จากการขายเครื่องจักรตาม TFRS 15, 1.2 คำนวณค่าเสื่อมราคารถยนต์นั่งบวกกลับทางภาษี (มาตรา 65 ตรี), 1.3 คำนวณดอกเบี้ยค้างจ่าย ณ วันสิ้นปี, 📌 ข้อที่ 1: [การบัญชี 1 & 2] การปันส่วนรายได้ TFRS 15 และรายการปรับปรุงงบการเงิน (25 คะแนน), 📌 ข้อที่ 2: [การสอบบัญชี 1 & 2] การประเมินความเสี่ยงและตัดสินใจเลือกประเภทรายงานผู้สอบบัญชี (25 คะแนน), 📌 ข้อที่ 3: [กฎหมายวิชาชีพบัญชี] องค์ประชุม มติพิเศษ และการลดทุนบริษัท (25 คะแนน), 📌 ข้อที่ 4: [ภาษีอากร] การคำนวณกำไรสุทธิเพื่อเสียภาษีเงินได้นิติบุคคล (25 คะแนน), 📝 ชุดข้อสอบจำลองและเฉลยละเอียดเตรียมสอบ CPA (CPA Mock Exam Set 1) (+8 more)

### Community 24 - "เตรียมสอบ CPA — Accountant Learning Portal"
Cohesion: 0.40
Nodes (5): @media (max-width: 768px), body, .sidebar, .sidebar.show, .menu-toggle

### Community 25 - "[Unreleased]"
Cohesion: 0.05
Nodes (39): [0.5.1] - 2026-08-01, [0.6.0] - 2026-08-01, [0.6.1] - 2026-08-01, [0.7.0] - 2026-08-01, [0.7.2] - 2026-08-02, [0.7.3] - 2026-08-02, [0.8.0] - 2026-08-02, [0.8.1] - 2026-08-02 (+31 more)

### Community 26 - "PLAYBOOK.md"
Cohesion: 0.09
Nodes (22): #active-filename, #checkin-mini, #current-lesson-title, #dialog-action-btn, #dialog-content, #dialog-overlay, #dialog-title, #editor-gutter (+14 more)

### Community 34 - "LESSONS"
Cohesion: 0.11
Nodes (17): COURSE_CONFIG, LESSONS, เสนอรายการปรับปรุงบัญชี (Audit Adjusting Journal Entry), ตรวจสอบอำนาจอนุมัติการซื้อสินทรัพย์ตามข้อบังคับบริษัท, คำนวณค่าเสื่อมราคาเครื่องจักรที่ซื้อมา, ประเมินความเหมาะสมของข้อสมมติฐานการดำเนินงานต่อเนื่อง, บันทึกรายการซื้อสินทรัพย์เป็นเงินเชื่อ, คำนวณหนี้สินตามสัญญาเช่าเริ่มแรก (+9 more)

### Community 35 - "index.html"
Cohesion: 0.08
Nodes (25): #balance-status, #case-selector, #essay-input, #essay-screen, #exam-answer, #exam-minutes, #exam-progress-label, #exam-question-body (+17 more)

### Community 36 - "📝 ชุดข้อสอบจำลองและเฉลยละเอียดเตรียมสอบ CPA (CPA Mock Exam Set 1)"
Cohesion: 0.67
Nodes (3): @media (max-width: 1100px), .workspace, .panel-left

### Community 37 - "package.json"
Cohesion: 0.25
Nodes (7): description, name, private, scripts, start, test, version

### Community 38 - "Design System"
Cohesion: 0.29
Nodes (6): Avoid, Colors, Components, Design Direction, Design System, Typography

### Community 39 - "เตรียมสอบ CPA — Accountant Learning Portal"
Cohesion: 0.29
Nodes (6): License, ข้อจำกัด (ตรงไปตรงมา), ฟีเจอร์อื่นๆ, เตรียมสอบ CPA — Accountant Learning Portal, เทคโนโลยี, เนื้อหา

### Community 40 - "selftest.mjs"
Cohesion: 0.40
Nodes (4): __dirname, failures, ROOT, TRACKS

### Community 41 - "checkin.js"
Cohesion: 0.60
Nodes (5): getCheckInState(), localDateStr(), recordDailyCheckIn(), renderCheckInBanner(), renderCheckInMini()

### Community 42 - "@media (max-width: 768px)"
Cohesion: 0.09
Nodes (22): #active-filename, #checkin-mini, #current-lesson-title, #dialog-action-btn, #dialog-content, #dialog-overlay, #dialog-title, #editor-gutter (+14 more)

### Community 43 - "gamification.js"
Cohesion: 0.33
Nodes (3): checkGrandCertificate(), MILESTONES, showGrandCertificate()

### Community 45 - "index.html"
Cohesion: 0.09
Nodes (22): #active-filename, #checkin-mini, #current-lesson-title, #dialog-action-btn, #dialog-content, #dialog-overlay, #dialog-title, #editor-gutter (+14 more)

### Community 46 - "index.html"
Cohesion: 0.09
Nodes (22): #active-filename, #checkin-mini, #current-lesson-title, #dialog-action-btn, #dialog-content, #dialog-overlay, #dialog-title, #editor-gutter (+14 more)

### Community 47 - "index.html"
Cohesion: 0.09
Nodes (22): #active-filename, #checkin-mini, #current-lesson-title, #dialog-action-btn, #dialog-content, #dialog-overlay, #dialog-title, #editor-gutter (+14 more)

### Community 48 - "index.html"
Cohesion: 0.09
Nodes (22): #active-filename, #checkin-mini, #current-lesson-title, #dialog-action-btn, #dialog-content, #dialog-overlay, #dialog-title, #editor-gutter (+14 more)

### Community 49 - "📝 ชุดข้อสอบจำลองและเฉลยละเอียดเตรียมสอบ CPA (CPA Mock Exam Set 2)"
Cohesion: 0.11
Nodes (17): 📌 ข้อที่ 1: [กฎหมายวิชาชีพบัญชี] หน้าที่รายงานตามกฎหมายหลักทรัพย์ฯ และคุณสมบัติผู้ทำบัญชี (25 คะแนน), 📌 ข้อที่ 2: [ภาษีอากร] ภาษีธุรกิจเฉพาะและภาษีมูลค่าเพิ่มจากธุรกรรมพิเศษ 3 กรณี (25 คะแนน), 📌 ข้อที่ 3: [การสอบบัญชี 1] คุณภาพงานสอบบัญชี: EQR Cooling-off และการประเมินข้อบกพร่องการควบคุมภายใน (25 คะแนน), 📌 ข้อที่ 4: [การสอบบัญชี 2] งานสอบบัญชีครั้งแรกและยอดยกมา เมื่อผู้สอบบัญชีคนก่อนไม่ให้ความร่วมมือ (25 คะแนน), 📝 ชุดข้อสอบจำลองและเฉลยละเอียดเตรียมสอบ CPA (CPA Mock Exam Set 2), 💡 เฉลยละเอียด:, 💡 เฉลยละเอียด:, 💡 เฉลยละเอียด: (+9 more)

### Community 50 - "📝 ชุดข้อสอบจำลองและเฉลยละเอียดเตรียมสอบ CPA (CPA Mock Exam Set 3)"
Cohesion: 0.11
Nodes (17): 📌 ข้อที่ 1: [ภาษีอากร] ภาษีซื้อต้องห้ามและภาษีหัก ณ ที่จ่าย 3 กรณี (25 คะแนน), 📌 ข้อที่ 2: [ภาษีอากร] จังหวะรับรู้รายจ่ายความเสียหายและสัญญาเช่าที่มีเจตนาโอนกรรมสิทธิ์ (25 คะแนน), 📌 ข้อที่ 3: [กฎหมายวิชาชีพบัญชี] หลักประกันนิติบุคคลผู้รับทำบัญชี (25 คะแนน), 📌 ข้อที่ 4: [การสอบบัญชี 2] วรรคเน้นข้อมูลและเหตุการณ์ vs วรรคเรื่องอื่น (TSA 706) (25 คะแนน), 📝 ชุดข้อสอบจำลองและเฉลยละเอียดเตรียมสอบ CPA (CPA Mock Exam Set 3), 💡 เฉลยละเอียด:, 💡 เฉลยละเอียด:, 💡 เฉลยละเอียด: (+9 more)

### Community 51 - "สรุปเจาะลึก: การสอบบัญชี 2 (Auditing 2) — ระดับข้อสอบ CPA"
Cohesion: 0.18
Nodes (10): จุดที่ข้อสอบชอบออก / กับดัก, จุดที่ข้อสอบชอบออก / กับดัก, ตารางเปรียบเทียบภาพรวม: กับดักที่ข้อสอบ CPA ออกซ้ำบ่อยที่สุดในวิชานี้, บทที่ 11 — TSA 520: วิธีการวิเคราะห์เปรียบเทียบ (Analytical Procedures), สรุปเจาะลึก: การสอบบัญชี 2 (Auditing 2) — ระดับข้อสอบ CPA, สารบัญ, ⚠️ หมายเหตุความน่าเชื่อถือของการอ้างอิงกฎหมาย/มาตรฐานในเอกสารนี้, หลักการ/มาตรฐาน (+2 more)

### Community 52 - "สรุปเจาะลึก การบัญชี 1 (Financial Accounting 1) — ระดับข้อสอบ CPA"
Cohesion: 0.20
Nodes (9): จุดที่ข้อสอบชอบออก / กับดัก, จุดที่ข้อสอบชอบออก / กับดัก, ตารางสรุปสูตรสำคัญทั้งหมด (Quick Reference), บทที่ 1: กฎเดบิต-เครดิต (Debit / Credit Rules), บทที่ 7: การปิดบัญชี (Closing Entries), รายการอ้างอิงมาตรฐานที่กล่าวถึงในเอกสารนี้, สรุปเจาะลึก การบัญชี 1 (Financial Accounting 1) — ระดับข้อสอบ CPA, หลักการ (+1 more)

### Community 53 - "สรุปเจาะลึก: การสอบบัญชี 1 (Auditing 1) — ระดับข้อสอบ CPA"
Cohesion: 0.22
Nodes (8): ขั้นสูง 1: คำนวณ Detection Risk (ต่อยอดบทที่ 1), ขั้นสูง 2: TSA 315/330 ผสม — ข้อกำหนดพิเศษเมื่อพบ Significant Risk, ขั้นสูง 4 (CPA Case Study): TSA 265 — Significant Deficiency vs Material Weakness, จุดที่ข้อสอบชอบออก / กับดัก, จุดที่ข้อสอบชอบออก / กับดัก, ตารางสรุป TSA ที่ใช้ในวิชานี้ (Quick Reference), สรุปเจาะลึก: การสอบบัญชี 1 (Auditing 1) — ระดับข้อสอบ CPA, สารบัญ

### Community 54 - "บทที่ 15: สินทรัพย์ไม่มีตัวตน (Intangible Assets) — TAS 38"
Cohesion: 0.29
Nodes (7): กับดักสำคัญที่สุดของบทนี้ — Goodwill ที่เกิดขึ้นเองภายในกิจการ, การตัดจำหน่าย (Amortization), ค่าใช้จ่ายวิจัยและพัฒนา (Research & Development) — จุดสอบยอดฮิตอีกจุด, จุดที่ข้อสอบชอบออก / กับดัก, ตัวอย่างตัวเลข, บทที่ 15: สินทรัพย์ไม่มีตัวตน (Intangible Assets) — TAS 38, หลักการ/มาตรฐาน

### Community 55 - "บทที่ 12: ตั๋วเงินรับและดอกเบี้ย (Notes Receivable)"
Cohesion: 0.33
Nodes (6): การขายลด/ขายช่วงตั๋วเงินรับ (Discounting Notes Receivable) — หัวข้อขั้นสูงที่โจทย์ยากมักขยายจากบทนี้, จุดที่ข้อสอบชอบออก / กับดัก, ดอกเบี้ยค้างรับข้ามงวดบัญชี — จุดที่มักออกร่วมกับบทที่ 5, บทที่ 12: ตั๋วเงินรับและดอกเบี้ย (Notes Receivable), สูตรคำนวณ, หลักการ

### Community 56 - "บทที่ 8: TSA 240 — ความรับผิดชอบของผู้สอบบัญชีเกี่ยวกับการทุจริต"
Cohesion: 0.33
Nodes (6): Fraud Triangle (3 องค์ประกอบ), การทุจริต 2 ประเภท, ความแตกต่างที่มักสับสน, จุดที่ข้อสอบชอบออก / กับดัก, บทที่ 8: TSA 240 — ความรับผิดชอบของผู้สอบบัญชีเกี่ยวกับการทุจริต, หลักการ/มาตรฐาน

### Community 57 - "บทที่ 3: จรรยาบรรณผู้ประกอบวิชาชีพบัญชี (Code of Ethics)"
Cohesion: 0.33
Nodes (6): ความแตกต่างที่มักสับสน, จุดที่ข้อสอบชอบออก / กับดัก, บทที่ 3: จรรยาบรรณผู้ประกอบวิชาชีพบัญชี (Code of Ethics), ภัยคุกคามความเป็นอิสระ (Independence) 5 ประเภท, หลักการ/มาตรฐาน, หลักการพื้นฐาน 5 ข้อ (Fundamental Principles)

### Community 58 - "บทที่ 7: TSA 315 — การระบุและประเมินความเสี่ยงที่สำคัญ (Significant Risk)"
Cohesion: 0.33
Nodes (6): ความแตกต่างที่มักสับสน, จุดที่ข้อสอบชอบออก / กับดัก, บทที่ 7: TSA 315 — การระบุและประเมินความเสี่ยงที่สำคัญ (Significant Risk), ลักษณะที่เข้าเกณฑ์ Significant Risk, วิธีทำความเข้าใจกิจการ 4 วิธี, หลักการ/มาตรฐาน

### Community 59 - "บทที่ 9: ทัศนคติความสงสัยเยี่ยงผู้ประกอบวิชาชีพ (Professional Skepticism)"
Cohesion: 0.33
Nodes (6): ความแตกต่างที่มักสับสน, จุดที่ข้อสอบชอบออก / กับดัก, บทที่ 9: ทัศนคติความสงสัยเยี่ยงผู้ประกอบวิชาชีพ (Professional Skepticism), หลักการ/มาตรฐาน, หลักการสำคัญที่ข้อสอบชอบทดสอบ, องค์ประกอบ

### Community 60 - "บทที่ 5: รายการปรับปรุง (Adjusting Entries) — Accrual Basis"
Cohesion: 0.40
Nodes (5): 4 ประเภทหลัก พร้อมสูตรและตัวอย่าง, จุดที่ข้อสอบชอบออก / กับดัก, บทที่ 5: รายการปรับปรุง (Adjusting Entries) — Accrual Basis, วิธีบันทึกเริ่มต้นที่ต่างกัน — จุดสับสนสำคัญ (Asset Method vs Expense Method), หลักการ/มาตรฐาน

### Community 61 - "บทที่ 16: การจำหน่ายสินทรัพย์ถาวร (Disposal of PP&E)"
Cohesion: 0.40
Nodes (5): กรณีพิเศษ — การแลกเปลี่ยนสินทรัพย์ (Exchange of Assets), จุดที่ข้อสอบชอบออก / กับดัก, ตัวอย่างตัวเลข, บทที่ 16: การจำหน่ายสินทรัพย์ถาวร (Disposal of PP&E), หลักการ — 3 ขั้นตอนตามลำดับ (ห้ามข้ามขั้นตอน)

### Community 62 - "บทที่ 13: การแก้ไขข้อผิดพลาดหลายรายการที่กระทบกำไรสุทธิ (Multiple Error Correction)"
Cohesion: 0.40
Nodes (5): จุดที่ข้อสอบชอบออก / กับดัก, ตัวอย่างตัวเลข, บทที่ 13: การแก้ไขข้อผิดพลาดหลายรายการที่กระทบกำไรสุทธิ (Multiple Error Correction), หลักการ, แนวคิด Counterbalancing Errors — จุดยากระดับ CPA

### Community 63 - "บทที่ 14: การคำนวณรายได้ตามเกณฑ์คงค้าง (Cash to Accrual Conversion)"
Cohesion: 0.40
Nodes (5): จุดที่ข้อสอบชอบออก / กับดัก, ตัวอย่างตัวเลข, บทที่ 14: การคำนวณรายได้ตามเกณฑ์คงค้าง (Cash to Accrual Conversion), สูตร, หลักการ

### Community 64 - "เพิ่มเติม 3: TSA 300 — การวางแผนงานสอบบัญชีโดยรวม"
Cohesion: 0.40
Nodes (5): 2 ระดับ, ความแตกต่างที่มักสับสน, จุดที่ข้อสอบชอบออก / กับดัก, หลักการ/มาตรฐาน, เพิ่มเติม 3: TSA 300 — การวางแผนงานสอบบัญชีโดยรวม

### Community 65 - "บทที่ 4: การควบคุมภายใน — กรอบ COSO 5 องค์ประกอบ"
Cohesion: 0.40
Nodes (5): 5 องค์ประกอบ, ความแตกต่างที่มักสับสน, จุดที่ข้อสอบชอบออก / กับดัก, บทที่ 4: การควบคุมภายใน — กรอบ COSO 5 องค์ประกอบ, หลักการ/มาตรฐาน

### Community 66 - "บทที่ 2: ความมีสาระสำคัญ (Materiality)"
Cohesion: 0.40
Nodes (5): ขั้นตอน/กระบวนการสำคัญ, ความแตกต่างที่มักสับสน, จุดที่ข้อสอบชอบออก / กับดัก, บทที่ 2: ความมีสาระสำคัญ (Materiality), หลักการ/มาตรฐาน TSA ที่เกี่ยวข้อง

### Community 67 - "บทที่ 1: แบบจำลองความเสี่ยงจากการสอบบัญชี (Audit Risk Model)"
Cohesion: 0.40
Nodes (5): ขั้นตอนสำคัญ พร้อมตัวอย่างสถานการณ์, ความแตกต่างที่มักสับสน, จุดที่ข้อสอบชอบออก / กับดัก, บทที่ 1: แบบจำลองความเสี่ยงจากการสอบบัญชี (Audit Risk Model), หลักการ/มาตรฐาน

### Community 68 - "บทที่ 5: หลักฐานการสอบบัญชี — วิธีการตรวจสอบ (Audit Procedures)"
Cohesion: 0.40
Nodes (5): ความแตกต่างที่มักสับสน, จุดที่ข้อสอบชอบออก / กับดัก, บทที่ 5: หลักฐานการสอบบัญชี — วิธีการตรวจสอบ (Audit Procedures), วิธีการตรวจสอบหลัก 8 วิธี (เรียงตามความน่าเชื่อถือโดยประมาณ จากต่ำไปสูง), หลักการ/มาตรฐาน

### Community 69 - "บทที่ 6: การสุ่มตัวอย่างทางการสอบบัญชี (Audit Sampling)"
Cohesion: 0.40
Nodes (5): ความแตกต่างที่มักสับสน, จุดที่ข้อสอบชอบออก / กับดัก, บทที่ 6: การสุ่มตัวอย่างทางการสอบบัญชี (Audit Sampling), สูตรสำคัญ, หลักการ/มาตรฐาน

### Community 70 - "บทที่ 10: TSA 330 — วิธีการตรวจสอบเพิ่มเติมเพื่อตอบสนองต่อความเสี่ยงที่ประเมินไว้"
Cohesion: 0.40
Nodes (5): ความแตกต่างที่มักสับสน, จุดที่ข้อสอบชอบออก / กับดัก, บทที่ 10: TSA 330 — วิธีการตรวจสอบเพิ่มเติมเพื่อตอบสนองต่อความเสี่ยงที่ประเมินไว้, วิธีการตรวจสอบ 2 ประเภทหลัก, หลักการ/มาตรฐาน

### Community 71 - "บทที่ 11: TSA 265 — การสื่อสารข้อบกพร่องในการควบคุมภายใน"
Cohesion: 0.40
Nodes (5): ความแตกต่างที่มักสับสน, จุดที่ข้อสอบชอบออก / กับดัก, บทที่ 11: TSA 265 — การสื่อสารข้อบกพร่องในการควบคุมภายใน, ระดับความรุนแรง 3 ระดับ (สำคัญมาก — ดูขั้นสูง 4 ประกอบ), หลักการ/มาตรฐาน

### Community 72 - "บทที่ 12: TSA 550 — บุคคลหรือกิจการที่เกี่ยวข้องกัน (Related Parties)"
Cohesion: 0.40
Nodes (5): ความแตกต่างที่มักสับสน, จุดที่ข้อสอบชอบออก / กับดัก, บทที่ 12: TSA 550 — บุคคลหรือกิจการที่เกี่ยวข้องกัน (Related Parties), หน้าที่ของผู้สอบบัญชี, หลักการ/มาตรฐาน

### Community 73 - "เพิ่มเติม 1: TSA 210 — การตกลงเงื่อนไขงานสอบบัญชี (Engagement Letter)"
Cohesion: 0.40
Nodes (5): ความแตกต่างที่มักสับสน, จุดที่ข้อสอบชอบออก / กับดัก, หลักการ/มาตรฐาน, เงื่อนไขเบื้องต้น 2 ข้อ, เพิ่มเติม 1: TSA 210 — การตกลงเงื่อนไขงานสอบบัญชี (Engagement Letter)

### Community 74 - "ขั้นสูง 3 (CPA Case Study) — TSA 705: Material & Pervasive Misstatement"
Cohesion: 0.40
Nodes (5): กฎจดจำสำหรับข้อสอบ CPA, ขั้นสูง 3 (CPA Case Study) — TSA 705: Material & Pervasive Misstatement, จุดที่ข้อสอบชอบออก / กับดัก, สถานการณ์สำคัญ/ตัวอย่าง, หลักการ/มาตรฐาน: TSA 705

### Community 75 - "บทที่ 1 — ประเภทความเห็นของผู้สอบบัญชี (Audit Opinion)"
Cohesion: 0.40
Nodes (5): ความแตกต่างที่มักสับสน, จุดที่ข้อสอบชอบออก / กับดัก, บทที่ 1 — ประเภทความเห็นของผู้สอบบัญชี (Audit Opinion), สถานการณ์สำคัญ/ตัวอย่าง, หลักการ/มาตรฐาน

### Community 76 - "บทที่ 7 — วงจรจัดซื้อ-เจ้าหนี้: การค้นหาหนี้สินที่ยังไม่ได้บันทึก"
Cohesion: 0.40
Nodes (5): ความแตกต่างที่มักสับสน, จุดที่ข้อสอบชอบออก / กับดัก, บทที่ 7 — วงจรจัดซื้อ-เจ้าหนี้: การค้นหาหนี้สินที่ยังไม่ได้บันทึก, สถานการณ์สำคัญ/ตัวอย่าง, หลักการ/มาตรฐาน

### Community 77 - "บทที่ 2 — เหตุการณ์ภายหลังวันที่ในงบการเงิน (Subsequent Events)"
Cohesion: 0.40
Nodes (5): ความแตกต่างที่มักสับสน, จุดที่ข้อสอบชอบออก / กับดัก, บทที่ 2 — เหตุการณ์ภายหลังวันที่ในงบการเงิน (Subsequent Events), สถานการณ์สำคัญ/ตัวอย่าง, หลักการ/มาตรฐาน

### Community 78 - "สรุปเจาะลึก บัญชีต้นทุน/บัญชีบริหาร (Cost & Managerial Accounting) — ระดับข้อสอบ CPA"
Cohesion: 0.40
Nodes (4): ตารางสรุปความแตกต่างที่มักสับสน (Quick Comparison Table), สรุปเจาะลึก บัญชีต้นทุน/บัญชีบริหาร (Cost & Managerial Accounting) — ระดับข้อสอบ CPA, สารบัญ, หลักการเชื่อมโยงข้ามบท (Cross-Chapter Exam Patterns)

### Community 79 - "บทที่ 10: หนี้สงสัยจะสูญและค่าเผื่อหนี้สงสัยจะสูญ (Allowance Method)"
Cohesion: 0.50
Nodes (4): 2 วิธีประมาณการหลัก, จุดที่ข้อสอบชอบออก / กับดัก, บทที่ 10: หนี้สงสัยจะสูญและค่าเผื่อหนี้สงสัยจะสูญ (Allowance Method), หลักการ/มาตรฐาน

### Community 80 - "บทที่ 11: การกระทบยอดเงินฝากธนาคาร (Bank Reconciliation) และ Proof of Cash"
Cohesion: 0.50
Nodes (4): Proof of Cash (ระดับ CPA Case Study) — จุดยากที่สุดของบทนี้, จุดที่ข้อสอบชอบออก / กับดัก, บทที่ 11: การกระทบยอดเงินฝากธนาคาร (Bank Reconciliation) และ Proof of Cash, หลักการ

### Community 81 - "บทที่ 4: งบทดลอง (Trial Balance)"
Cohesion: 0.50
Nodes (4): ข้อจำกัดสำคัญ — ข้อผิดพลาดที่งบทดลองตรวจไม่พบ (จุดสอบยอดฮิต), จุดที่ข้อสอบชอบออก / กับดัก, บทที่ 4: งบทดลอง (Trial Balance), หลักการ

### Community 82 - "บทนำ: สมการบัญชีและกรอบแนวคิดการรายงานทางการเงิน"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบ CPA ชอบออก / กับดัก, บทนำ: สมการบัญชีและกรอบแนวคิดการรายงานทางการเงิน, สูตร/การคำนวณสำคัญ, หลักการ/มาตรฐานที่เกี่ยวข้อง

### Community 83 - "บทที่ 6: งบกำไรขาดทุน & งบแสดงฐานะการเงิน"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบชอบออก / กับดัก, บทที่ 6: งบกำไรขาดทุน & งบแสดงฐานะการเงิน, รูปแบบการนำเสนองบกำไรขาดทุน — จุดสับสนสำคัญ, หลักการ

### Community 84 - "บทที่ 8: สินค้าคงเหลือ (Inventory) — FIFO, Weighted Average, LCNRV"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบชอบออก / กับดัก, บทที่ 8: สินค้าคงเหลือ (Inventory) — FIFO, Weighted Average, LCNRV, ระบบบันทึกสินค้าคงเหลือ — จุดสับสนสำคัญ (Periodic vs Perpetual), หลักการ/มาตรฐาน

### Community 85 - "บทที่ 9: ค่าเสื่อมราคา (Depreciation) — TAS 16"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบชอบออก / กับดัก, ตัวอย่างตัวเลขเปรียบเทียบ 3 วิธี, บทที่ 9: ค่าเสื่อมราคา (Depreciation) — TAS 16, หลักการ/มาตรฐาน

### Community 86 - "บทที่ 3: บัญชีแยกประเภท (Ledger / T-Account)"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบชอบออก / กับดัก, บทที่ 3: บัญชีแยกประเภท (Ledger / T-Account), สูตรคำนวณยอดคงเหลือ, หลักการ

### Community 87 - "ขั้นสูง 3 (CPA Case Study): TSA 530 — Upper Misstatement Limit (UML) จาก MUS"
Cohesion: 0.50
Nodes (4): ขั้นสูง 3 (CPA Case Study): TSA 530 — Upper Misstatement Limit (UML) จาก MUS, จุดที่ข้อสอบชอบออก / กับดัก, ตัวอย่างเต็ม (จากไฟล์), สูตรคำนวณเต็มรูปแบบ

### Community 88 - "เพิ่มเติม 2: การควบคุมคุณภาพงานสอบบัญชี — ระดับสำนักงาน (ISQM 1) กับระดับงาน (TSA 220)"
Cohesion: 0.50
Nodes (4): ความแตกต่างที่มักสับสน, จุดที่ข้อสอบชอบออก / กับดัก, หลักการ/มาตรฐาน, เพิ่มเติม 2: การควบคุมคุณภาพงานสอบบัญชี — ระดับสำนักงาน (ISQM 1) กับระดับงาน (TSA 220)

### Community 89 - "CPA Mock Exam Set 1 — เพลิงไหม้คลังสินค้า 30 ล้านบาท"
Cohesion: 0.50
Nodes (4): CPA Mock Exam Set 1 — เพลิงไหม้คลังสินค้า 30 ล้านบาท, การวิเคราะห์, จุดที่ข้อสอบชอบออก / กับดัก, สถานการณ์

### Community 90 - "ขั้นสูง 1 — TSA 705: ข้อจำกัดขอบเขตที่แพร่หลาย (Pervasive Scope Limitation)"
Cohesion: 0.50
Nodes (4): ขั้นสูง 1 — TSA 705: ข้อจำกัดขอบเขตที่แพร่หลาย (Pervasive Scope Limitation), ความแตกต่างที่มักสับสน, จุดที่ข้อสอบชอบออก / กับดัก, หลักการ/มาตรฐาน: TSA 705

### Community 91 - "ขั้นสูง 2 — Type I vs Type II Subsequent Events (กรณีซับซ้อน)"
Cohesion: 0.50
Nodes (4): ขั้นสูง 2 — Type I vs Type II Subsequent Events (กรณีซับซ้อน), จุดที่ข้อสอบชอบออก / กับดัก, สถานการณ์สำคัญ/ตัวอย่าง, หลักการ/มาตรฐาน

### Community 92 - "บทที่ 3 — การดำเนินงานต่อเนื่อง (Going Concern)"
Cohesion: 0.50
Nodes (4): ความแตกต่างที่มักสับสน, จุดที่ข้อสอบชอบออก / กับดัก, บทที่ 3 — การดำเนินงานต่อเนื่อง (Going Concern), หลักการ/มาตรฐาน

### Community 93 - "บทที่ 4 — ข้อกล่าวอ้างของผู้บริหาร (Management Assertions)"
Cohesion: 0.50
Nodes (4): ความแตกต่างที่มักสับสน, จุดที่ข้อสอบชอบออก / กับดัก, บทที่ 4 — ข้อกล่าวอ้างของผู้บริหาร (Management Assertions), หลักการ/มาตรฐาน

### Community 94 - "เพิ่มเติม 3 — สินทรัพย์ถาวร (PP&E Audit)"
Cohesion: 0.50
Nodes (4): ความแตกต่างที่มักสับสน, จุดที่ข้อสอบชอบออก / กับดัก, หลักการ/มาตรฐาน, เพิ่มเติม 3 — สินทรัพย์ถาวร (PP&E Audit)

### Community 95 - "บทที่ 5 — กระดาษทำการและการเก็บรักษาเอกสารหลักฐาน (Working Papers)"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบชอบออก / กับดัก, บทที่ 5 — กระดาษทำการและการเก็บรักษาเอกสารหลักฐาน (Working Papers), สถานการณ์สำคัญ/ตัวอย่าง, หลักการ/มาตรฐาน: TSA 230 (เอกสารหลักฐานการสอบบัญชี)

### Community 96 - "บทที่ 6 — ความรับผิดชอบของผู้สอบบัญชี (Legal & Professional Liability)"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบชอบออก / กับดัก, บทที่ 6 — ความรับผิดชอบของผู้สอบบัญชี (Legal & Professional Liability), สถานการณ์สำคัญ/ตัวอย่าง, หลักการ/มาตรฐาน

### Community 97 - "บทที่ 8 — โครงสร้างรายงานผู้สอบบัญชี และ Key Audit Matters"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบชอบออก / กับดัก, บทที่ 8 — โครงสร้างรายงานผู้สอบบัญชี และ Key Audit Matters, สถานการณ์สำคัญ/ตัวอย่าง, หลักการ/มาตรฐาน: TSA 700 (ปรับปรุง) และ TSA 701

### Community 98 - "บทที่ 10 — TSA 580: หนังสือรับรองการจัดการ (Written Representations)"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบชอบออก / กับดัก, บทที่ 10 — TSA 580: หนังสือรับรองการจัดการ (Written Representations), สถานการณ์สำคัญ/ตัวอย่าง, หลักการ/มาตรฐาน

### Community 99 - "เพิ่มเติม 6 — วงจรรายได้/ค่าใช้จ่าย: Cutoff Testing"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบชอบออก / กับดัก, สถานการณ์สำคัญ/ตัวอย่าง, หลักการ/มาตรฐาน, เพิ่มเติม 6 — วงจรรายได้/ค่าใช้จ่าย: Cutoff Testing

### Community 100 - "บทที่ 1: การจำแนกต้นทุน (Cost Classification)"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบชอบออก / กับดัก, ตัวอย่างซับซ้อนกว่าเบื้องต้น, บทที่ 1: การจำแนกต้นทุน (Cost Classification), หลักการ

### Community 101 - "บทที่ 3: ระบบต้นทุนงานสั่งทำ (Job Order Costing)"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบชอบออก / กับดัก, ตัวอย่างซับซ้อนกว่าเบื้องต้น (Overapplied/Underapplied รวมในโจทย์เดียว), บทที่ 3: ระบบต้นทุนงานสั่งทำ (Job Order Costing), หลักการ

### Community 102 - "บทที่ 4: อัตราค่าใช้จ่ายการผลิตล่วงหน้า (Predetermined Overhead Rate)"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบชอบออก / กับดัก, ตัวอย่างซับซ้อนกว่าเบื้องต้น — หลายแผนก (Departmental Rate), บทที่ 4: อัตราค่าใช้จ่ายการผลิตล่วงหน้า (Predetermined Overhead Rate), หลักการ/สูตร

### Community 103 - "บทที่ 5: ต้นทุนช่วงการผลิต — EUP วิธีถัวเฉลี่ยถ่วงน้ำหนัก (Weighted Average)"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบชอบออก / กับดัก, ตัวอย่างซับซ้อนกว่าเบื้องต้น (คำนวณครบทั้ง DM และ Conversion พร้อมต้นทุนต่อหน่วย), บทที่ 5: ต้นทุนช่วงการผลิต — EUP วิธีถัวเฉลี่ยถ่วงน้ำหนัก (Weighted Average), หลักการ/สูตร

### Community 104 - "บทที่ 6: งบต้นทุนการผลิต (Cost of Goods Manufactured - COGM)"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบชอบออก / กับดัก, ตัวอย่างซับซ้อนกว่าเบื้องต้น (ครบวงจรตั้งแต่วัตถุดิบถึง COGS), บทที่ 6: งบต้นทุนการผลิต (Cost of Goods Manufactured - COGM), หลักการ/สูตร

### Community 105 - "บทที่ 7: CVP — จุดคุ้มทุน (Break-Even Point)"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบชอบออก / กับดัก, ตัวอย่างซับซ้อนกว่าเบื้องต้น — Multi-Product (Sales Mix), บทที่ 7: CVP — จุดคุ้มทุน (Break-Even Point), หลักการ/สูตร

### Community 106 - "บทที่ 8: CVP — CM Ratio และกำไรเป้าหมาย (Target Profit)"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบชอบออก / กับดัก, ตัวอย่างซับซ้อนกว่าเบื้องต้น — กำไรเป้าหมาย "หลังภาษี", บทที่ 8: CVP — CM Ratio และกำไรเป้าหมาย (Target Profit), หลักการ/สูตร

### Community 107 - "บทที่ 9: ต้นทุนผันแปร vs ต้นทุนเต็ม (Variable vs Absorption Costing)"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบชอบออก / กับดัก, ตัวอย่างซับซ้อนกว่าเบื้องต้น — กระทบยอดงบกำไรขาดทุนเต็มรูปแบบ (Reconciliation), บทที่ 9: ต้นทุนผันแปร vs ต้นทุนเต็ม (Variable vs Absorption Costing), หลักการ/สูตร

### Community 108 - "บทที่ 10-13: ต้นทุนมาตรฐานและผลต่าง (Standard Costing & Variance Analysis)"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบชอบออก / กับดัก, ตัวอย่างซับซ้อนกว่าเบื้องต้น — คำนวณครบ 4 ผลต่างในโจทย์เดียว พร้อมกับดัก "ปริมาณซื้อ ≠ ปริมาณใช้", บทที่ 10-13: ต้นทุนมาตรฐานและผลต่าง (Standard Costing & Variance Analysis), หลักการ/สูตรรวม

### Community 109 - "บทที่ 14: ระบบต้นทุนฐานกิจกรรม (Activity-Based Costing - ABC)"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบชอบออก / กับดัก, ตัวอย่างซับซ้อนกว่าเบื้องต้น — หลายกิจกรรม เปรียบเทียบกับ Traditional Costing เพื่อแสดง Cost Distortion, บทที่ 14: ระบบต้นทุนฐานกิจกรรม (Activity-Based Costing - ABC), หลักการ/ขั้นตอน

### Community 110 - "บทที่ 15: EUP วิธี FIFO เทียบกับถัวเฉลี่ยถ่วงน้ำหนัก"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบชอบออก / กับดัก, ตัวอย่างซับซ้อนกว่าเบื้องต้น — เปรียบเทียบ FIFO vs Weighted Average ในโจทย์เดียวกัน (มักออกคู่กันในข้อสอบจริง), บทที่ 15: EUP วิธี FIFO เทียบกับถัวเฉลี่ยถ่วงน้ำหนัก, หลักการ/สูตร

### Community 111 - "บทที่ 16: ของเสียปกติและของเสียผิดปกติ (Normal vs Abnormal Spoilage)"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบชอบออก / กับดัก, ตัวอย่างซับซ้อนกว่าเบื้องต้น — จุดตรวจสอบ (Inspection Point) กลางกระบวนการ กระทบว่าของเสียเป็น "ต้นทุนเต็มหน่วย" หรือ "เฉพาะ EUP ณ จุดตรวจ", บทที่ 16: ของเสียปกติและของเสียผิดปกติ (Normal vs Abnormal Spoilage), หลักการ/สูตร

### Community 112 - "บทที่ 17: การปันส่วนต้นทุนร่วม — วิธี NRV (Joint Cost Allocation)"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบชอบออก / กับดัก, ตัวอย่างซับซ้อนกว่าเบื้องต้น — ผสมทั้งวิธี NRV และวิธีมูลค่าขาย ณ จุดแยกตัว (Sales Value at Split-Off) ในผลิตภัณฑ์เดียวกัน + ตัดสินใจแปรรูปเพิ่มหรือไม่ (Sell-or-Process-Further), บทที่ 17: การปันส่วนต้นทุนร่วม — วิธี NRV (Joint Cost Allocation), หลักการ/สูตร

### Community 113 - "บทที่ 18-19: ผลต่างค่าใช้จ่ายการผลิต (Overhead Variance — Variable & Fixed)"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบชอบออก / กับดัก, ตัวอย่างซับซ้อนกว่าเบื้องต้น — Four-Variance เต็มรูปแบบในโจทย์เดียว, บทที่ 18-19: ผลต่างค่าใช้จ่ายการผลิต (Overhead Variance — Variable & Fixed), หลักการ/สูตรรวม (Four-Variance Method เต็มรูปแบบ)

### Community 114 - "บทที่ 20: ต้นทุนที่เกี่ยวข้อง — คำสั่งซื้อพิเศษ (Relevant Costing: Special Order)"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบชอบออก / กับดัก, ตัวอย่างซับซ้อนกว่าเบื้องต้น — กำลังการผลิตว่างบางส่วน + ต้นทุนคงที่เพิ่มเติมเฉพาะกิจ (Incremental Fixed Cost), บทที่ 20: ต้นทุนที่เกี่ยวข้อง — คำสั่งซื้อพิเศษ (Relevant Costing: Special Order), หลักการ/สูตร

### Community 115 - "บทที่ 21: การบันทึกบัญชีการไหลของต้นทุน (Cost Flow Journal Entries)"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบชอบออก / กับดัก, ตัวอย่างซับซ้อนกว่าเบื้องต้น — บันทึกครบวงจรทุกขั้นตอน (ไม่ใช่แค่ WIP→FG บทเดียว), บทที่ 21: การบันทึกบัญชีการไหลของต้นทุน (Cost Flow Journal Entries), หลักการ

### Community 116 - "บทที่ 22: ตัดสินใจผลิตเองหรือซื้อ (Make-or-Buy Decision)"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบชอบออก / กับดัก, ตัวอย่างซับซ้อนกว่าเบื้องต้น — มีโอกาสใช้กำลังการผลิตที่ว่างลงไปทำอย่างอื่น (Opportunity Benefit จากพื้นที่ว่าง), บทที่ 22: ตัดสินใจผลิตเองหรือซื้อ (Make-or-Buy Decision), หลักการ/สูตร

### Community 117 - "บทที่ 23: ตัดสินใจภายใต้ทรัพยากรจำกัด (Constrained Resource / Bottleneck)"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบชอบออก / กับดัก, ตัวอย่างซับซ้อนกว่าเบื้องต้น — 3 สินค้า + จำกัดปริมาณตลาด (Demand Constraint) ร่วมด้วย ต้องหา Optimal Production Mix เต็มรูปแบบ, บทที่ 23: ตัดสินใจภายใต้ทรัพยากรจำกัด (Constrained Resource / Bottleneck), หลักการ/สูตร

### Community 118 - "บทที่ 24: การปันส่วนต้นทุนแผนกบริการ — วิธีขั้นบันได (Step-Down Method)"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบชอบออก / กับดัก, ตัวอย่างซับซ้อนกว่าเบื้องต้น — 3 แผนกบริการ (ลำดับการปันส่วนสำคัญกว่าเดิม) + เทียบกับวิธีตรง (Direct Method), บทที่ 24: การปันส่วนต้นทุนแผนกบริการ — วิธีขั้นบันได (Step-Down Method), หลักการ/ขั้นตอน

### Community 119 - "บทที่ 25: การปันส่วนผลต่างต้นทุนมาตรฐาน ณ สิ้นงวด (Standard Cost Variance Proration)"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบชอบออก / กับดัก, ตัวอย่างซับซ้อนกว่าเบื้องต้น — ปันส่วนหลายผลต่างพร้อมกัน (Favorable + Unfavorable ผสมกัน) และปันตาม "ปริมาณ" ไม่ใช่ "มูลค่า" (วิธีละเอียดกว่า), บทที่ 25: การปันส่วนผลต่างต้นทุนมาตรฐาน ณ สิ้นงวด (Standard Cost Variance Proration), หลักการ/สูตร

### Community 120 - "บทที่ 26: ต้นทุนคุณภาพ (Cost of Quality - COQ)"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบชอบออก / กับดัก, ตัวอย่างซับซ้อนกว่าเบื้องต้น — วิเคราะห์ Trade-off เชิงกลยุทธ์ระหว่างปีที่ลงทุนเพิ่มด้าน Prevention, บทที่ 26: ต้นทุนคุณภาพ (Cost of Quality - COQ), หลักการ/การจำแนก 4 ประเภท

### Community 121 - "บทที่ 27: ราคาโอนระหว่างแผนก (Transfer Pricing)"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบชอบออก / กับดัก, ตัวอย่างซับซ้อนกว่าเบื้องต้น — กำลังการผลิตว่างบางส่วน (ผสมทั้ง 2 กรณี) + มุมมองแผนกผู้ซื้อ (Buying Division), บทที่ 27: ราคาโอนระหว่างแผนก (Transfer Pricing), หลักการ/สูตร

### Community 122 - "บทที่ 2: พฤติกรรมต้นทุน — High-Low Method"
Cohesion: 0.50
Nodes (4): จุดที่ข้อสอบชอบออก / กับดัก, ตัวอย่างซับซ้อนกว่าเบื้องต้น (มีข้อมูลหลอกให้เลือกจุดผิด), บทที่ 2: พฤติกรรมต้นทุน — High-Low Method, หลักการ/สูตร

### Community 123 - "บทที่ 2: สมุดรายวันทั่วไป (General Journal)"
Cohesion: 0.67
Nodes (3): จุดที่ข้อสอบชอบออก / กับดัก, บทที่ 2: สมุดรายวันทั่วไป (General Journal), หลักการ

### Community 131 - "ขั้นสูง 4 (CPA Case Study) — TSA 560: การลงวันที่แบบสองวัน (Dual Dating)"
Cohesion: 0.67
Nodes (3): ขั้นสูง 4 (CPA Case Study) — TSA 560: การลงวันที่แบบสองวัน (Dual Dating), จุดที่ข้อสอบชอบออก / กับดัก, หลักการ/มาตรฐาน: TSA 560

### Community 132 - "บทที่ 11 — TSA 520: วิธีการวิเคราะห์เปรียบเทียบ (Analytical Procedures)"
Cohesion: 0.04
Nodes (46): ข้อ 10: คุณสมบัติของผู้ทำบัญชีที่ไม่เคยต้องโทษจำคุก บัญญัติอยู่ในมาตราอะไร และมีเงื่อนไขอย่างไร, ข้อ 11: ผู้ที่ไม่ได้มีสัญชาติไทย แต่จบวุฒิปริญญาตรีบัญชี สามารถเป็นสมาชิกสามัญสภาวิชาชีพบัญชีได้หรือไม่, ข้อ 12: นายกสภาวิชาชีพบัญชี และกรรมการสภาฯ ดำรงตำแหน่งวาระละกี่ปี, ข้อ 13: คณะกรรมการกำกับดูแลผู้ประกอบวิชาชีพบัญชี (กกบ.) ประกอบด้วยใคร และใครเป็นประธาน, ข้อ 14: รถยนต์ไม่ได้คิดค่าเสื่อมราคาในงวดก่อน จัดเป็นการเปลี่ยนแปลงทางบัญชีข้อใด, ข้อ 15: NPAEs ต้นทุนการกู้ยืม (Borrowing Costs) สามารถนำมารวมเป็นต้นทุนของสินทรัพย์ประเภทใดได้บ้าง, ข้อ 16: รายการใดภายใต้ NPAEs ไม่ถือเป็นการเปลี่ยนแปลงนโยบายการบัญชี, ข้อ 17: ลักษณะเชิงคุณภาพพื้นฐานของข้อมูลทางการเงินตามแม่บทการบัญชี / NPAEs คือข้อใด (+38 more)

### Community 133 - "บทที่ 12 — วงจรสินค้าคงเหลือ: Existence และ Cut-off"
Cohesion: 0.67
Nodes (3): จุดที่ข้อสอบชอบออก / กับดัก, บทที่ 12 — วงจรสินค้าคงเหลือ: Existence และ Cut-off, หลักการ/มาตรฐาน

### Community 134 - "เพิ่มเติม 1 — วงจรเงินสด: Bank Confirmation และ Cash Count"
Cohesion: 0.67
Nodes (3): จุดที่ข้อสอบชอบออก / กับดัก, หลักการ/มาตรฐาน, เพิ่มเติม 1 — วงจรเงินสด: Bank Confirmation และ Cash Count

### Community 135 - "เพิ่มเติม 2 — ลูกหนี้การค้า: Positive vs Negative Confirmation"
Cohesion: 0.67
Nodes (3): จุดที่ข้อสอบชอบออก / กับดัก, หลักการ/มาตรฐาน, เพิ่มเติม 2 — ลูกหนี้การค้า: Positive vs Negative Confirmation

### Community 136 - "เพิ่มเติม 5 — TSA 620: การใช้ผลงานของผู้เชี่ยวชาญของผู้สอบบัญชี"
Cohesion: 0.67
Nodes (3): จุดที่ข้อสอบชอบออก / กับดัก, หลักการ/มาตรฐาน: TSA 620, เพิ่มเติม 5 — TSA 620: การใช้ผลงานของผู้เชี่ยวชาญของผู้สอบบัญชี

### Community 151 - "Accountant Learning (CPA prep portal) — Claude Instructions"
Cohesion: 0.29
Nodes (6): Accountant Learning (CPA prep portal) — Claude Instructions, Agent memory, Before changing lesson/engine logic, graphify, Structure, What this is

### Community 152 - "บทที่ 9 — ความรับผิดชอบของผู้บริหาร vs ผู้สอบบัญชี"
Cohesion: 0.67
Nodes (3): จุดที่ข้อสอบชอบออก / กับดัก, บทที่ 9 — ความรับผิดชอบของผู้บริหาร vs ผู้สอบบัญชี, หลักการ/มาตรฐาน

## Knowledge Gaps
- **1211 isolated node(s):** `#sidebar`, `#lesson-list`, `#progress-label`, `#progress-bar-fill`, `#checkin-mini` (+1206 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.
- **1 possibly unreachable function(s):** `__dirname`
  Not reached from any recognized entry point - could be dead code, or dynamically dispatched/decorator-registered.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `สรุปเจาะลึก บัญชีต้นทุน/บัญชีบริหาร (Cost & Managerial Accounting) — ระดับข้อสอบ CPA` connect `สรุปเจาะลึก บัญชีต้นทุน/บัญชีบริหาร (Cost & Managerial Accounting) — ระดับข้อสอบ CPA` to `บทที่ 1: การจำแนกต้นทุน (Cost Classification)`, `บทที่ 3: ระบบต้นทุนงานสั่งทำ (Job Order Costing)`, `บทที่ 4: อัตราค่าใช้จ่ายการผลิตล่วงหน้า (Predetermined Overhead Rate)`, `บทที่ 5: ต้นทุนช่วงการผลิต — EUP วิธีถัวเฉลี่ยถ่วงน้ำหนัก (Weighted Average)`, `บทที่ 6: งบต้นทุนการผลิต (Cost of Goods Manufactured - COGM)`, `บทที่ 7: CVP — จุดคุ้มทุน (Break-Even Point)`, `บทที่ 8: CVP — CM Ratio และกำไรเป้าหมาย (Target Profit)`, `บทที่ 9: ต้นทุนผันแปร vs ต้นทุนเต็ม (Variable vs Absorption Costing)`, `บทที่ 10-13: ต้นทุนมาตรฐานและผลต่าง (Standard Costing & Variance Analysis)`, `บทที่ 14: ระบบต้นทุนฐานกิจกรรม (Activity-Based Costing - ABC)`, `บทที่ 15: EUP วิธี FIFO เทียบกับถัวเฉลี่ยถ่วงน้ำหนัก`, `บทที่ 16: ของเสียปกติและของเสียผิดปกติ (Normal vs Abnormal Spoilage)`, `บทที่ 17: การปันส่วนต้นทุนร่วม — วิธี NRV (Joint Cost Allocation)`, `บทที่ 18-19: ผลต่างค่าใช้จ่ายการผลิต (Overhead Variance — Variable & Fixed)`, `บทที่ 20: ต้นทุนที่เกี่ยวข้อง — คำสั่งซื้อพิเศษ (Relevant Costing: Special Order)`, `บทที่ 21: การบันทึกบัญชีการไหลของต้นทุน (Cost Flow Journal Entries)`, `บทที่ 22: ตัดสินใจผลิตเองหรือซื้อ (Make-or-Buy Decision)`, `บทที่ 23: ตัดสินใจภายใต้ทรัพยากรจำกัด (Constrained Resource / Bottleneck)`, `บทที่ 24: การปันส่วนต้นทุนแผนกบริการ — วิธีขั้นบันได (Step-Down Method)`, `บทที่ 25: การปันส่วนผลต่างต้นทุนมาตรฐาน ณ สิ้นงวด (Standard Cost Variance Proration)`, `บทที่ 26: ต้นทุนคุณภาพ (Cost of Quality - COQ)`, `บทที่ 27: ราคาโอนระหว่างแผนก (Transfer Pricing)`, `บทที่ 2: พฤติกรรมต้นทุน — High-Low Method`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Why does `LESSONS` connect `Number Parsing Variant D` to `lessons.js`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Why does `สรุปเจาะลึก: การสอบบัญชี 1 (Auditing 1) — ระดับข้อสอบ CPA` connect `สรุปเจาะลึก: การสอบบัญชี 1 (Auditing 1) — ระดับข้อสอบ CPA` to `เพิ่มเติม 3: TSA 300 — การวางแผนงานสอบบัญชีโดยรวม`, `บทที่ 4: การควบคุมภายใน — กรอบ COSO 5 องค์ประกอบ`, `บทที่ 2: ความมีสาระสำคัญ (Materiality)`, `บทที่ 1: แบบจำลองความเสี่ยงจากการสอบบัญชี (Audit Risk Model)`, `บทที่ 5: หลักฐานการสอบบัญชี — วิธีการตรวจสอบ (Audit Procedures)`, `บทที่ 6: การสุ่มตัวอย่างทางการสอบบัญชี (Audit Sampling)`, `บทที่ 10: TSA 330 — วิธีการตรวจสอบเพิ่มเติมเพื่อตอบสนองต่อความเสี่ยงที่ประเมินไว้`, `บทที่ 11: TSA 265 — การสื่อสารข้อบกพร่องในการควบคุมภายใน`, `บทที่ 12: TSA 550 — บุคคลหรือกิจการที่เกี่ยวข้องกัน (Related Parties)`, `เพิ่มเติม 1: TSA 210 — การตกลงเงื่อนไขงานสอบบัญชี (Engagement Letter)`, `เพิ่มเติม 2: การควบคุมคุณภาพงานสอบบัญชี — ระดับสำนักงาน (ISQM 1) กับระดับงาน (TSA 220)`, `ขั้นสูง 3 (CPA Case Study): TSA 530 — Upper Misstatement Limit (UML) จาก MUS`, `บทที่ 8: TSA 240 — ความรับผิดชอบของผู้สอบบัญชีเกี่ยวกับการทุจริต`, `บทที่ 3: จรรยาบรรณผู้ประกอบวิชาชีพบัญชี (Code of Ethics)`, `บทที่ 7: TSA 315 — การระบุและประเมินความเสี่ยงที่สำคัญ (Significant Risk)`, `บทที่ 9: ทัศนคติความสงสัยเยี่ยงผู้ประกอบวิชาชีพ (Professional Skepticism)`?**
  _High betweenness centrality (0.002) - this node is a cross-community bridge._
- **What connects `#sidebar`, `#lesson-list`, `#progress-label` to the rest of the system?**
  _1213 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Shared Style Tokens` be split into smaller, more focused modules?**
  _Cohesion score 0.021052631578947368 - nodes in this community are weakly interconnected._
- **Should `Financial Accounting 1 UI` be split into smaller, more focused modules?**
  _Cohesion score 0.05405405405405406 - nodes in this community are weakly interconnected._
- **Should `Financial Accounting 2 UI` be split into smaller, more focused modules?**
  _Cohesion score 0.06060606060606061 - nodes in this community are weakly interconnected._