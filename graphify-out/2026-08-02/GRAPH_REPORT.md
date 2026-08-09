# Graph Report - feat-cost-finmgmt-capstone-and-light-theme-1  (2026-08-01)

## Corpus Check
- 38 files · ~48,653 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 690 nodes · 695 edges · 45 communities (34 shown, 11 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `58f56c70`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## God Nodes (most connected - your core abstractions)
1. `LESSONS` - 28 edges
2. `LESSONS` - 26 edges
3. `LESSONS` - 18 edges
4. `LESSONS` - 18 edges
5. `LESSONS` - 18 edges
6. `LESSONS` - 18 edges
7. `LESSONS` - 17 edges
8. `LESSONS` - 17 edges
9. `LESSONS` - 16 edges
10. `initApp()` - 9 edges

## Cross-Cutting Nodes (span the most distinct areas of the codebase)
A high-degree node isn't always architecturally central - a widely-used
utility/config file can rack up more edges than a real coupler while only
ever touching one area. This ranks by how many DIFFERENT communities a
node's neighbors span, not by raw edge count.
1. `@media (max-width: 768px)` - bridges 1 areas (5 edges)
2. `@media (max-width: 1100px)` - bridges 1 areas (3 edges)

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Project Documentation Set (Vision + Design System + Overview)** — readme, product, design [INFERRED 0.75]

## Communities (45 total, 11 thin omitted)

### Community 0 - "Shared Style Tokens"
Cohesion: 0.02
Nodes (96): :root, .sidebar-title, .content-block-title, .editor-actions, .btn-hint, .btn-solution, .btn-hint:hover, .btn-solution:hover, .sidebar-title span (+88 more)

### Community 1 - "Financial Accounting 1 UI"
Cohesion: 0.06
Nodes (29): COURSE_CONFIG, LESSONS, ระบบต้นทุนฐานกิจกรรม (Activity-Based Costing - ABC), งบต้นทุนการผลิต (Cost of Goods Manufactured), การตัดสินใจภายใต้ทรัพยากรจำกัด (Constrained Resource / Bottleneck Decision), พฤติกรรมต้นทุน (High-Low Method), การจำแนกต้นทุน (Cost Classification), ต้นทุนคุณภาพ (Cost of Quality - COQ) (+21 more)

### Community 2 - "Financial Accounting 2 UI"
Cohesion: 0.07
Nodes (27): COURSE_CONFIG, LESSONS, การประเมินมูลค่าพันธบัตร (Bond Valuation), การประเมินมูลค่าพันธบัตรที่จ่ายดอกเบี้ยปีละ 2 ครั้ง (Semi-Annual Coupon Bond), ต้นทุนส่วนของผู้ถือหุ้นด้วยแบบจำลอง CAPM, รอบระยะเวลาเงินสด (Cash Conversion Cycle), ต้นทุนหนี้สินหลังภาษี (After-Tax Cost of Debt), อัตราส่วนเงินทุนหมุนเวียน (Current Ratio) (+19 more)

### Community 3 - "Auditing 1 UI"
Cohesion: 0.09
Nodes (22): #active-filename, #checkin-mini, #current-lesson-title, #dialog-action-btn, #dialog-content, #dialog-overlay, #dialog-title, #editor-gutter (+14 more)

### Community 4 - "Auditing 2 UI"
Cohesion: 0.09
Nodes (22): #active-filename, #checkin-mini, #current-lesson-title, #dialog-action-btn, #dialog-content, #dialog-overlay, #dialog-title, #editor-gutter (+14 more)

### Community 5 - "Law Module UI"
Cohesion: 0.09
Nodes (22): #active-filename, #checkin-mini, #current-lesson-title, #dialog-action-btn, #dialog-content, #dialog-overlay, #dialog-title, #editor-gutter (+14 more)

### Community 6 - "Taxation Module UI"
Cohesion: 0.09
Nodes (22): #active-filename, #checkin-mini, #current-lesson-title, #dialog-action-btn, #dialog-content, #dialog-overlay, #dialog-title, #editor-gutter (+14 more)

### Community 7 - "Exam Engine Logic"
Cohesion: 0.17
Nodes (18): buildQuestionPool(), confirmSubmitExam(), EXAM_STATE, formatTime(), getSelectedSubjectIds(), goNext(), goPrev(), goToQuestion() (+10 more)

### Community 8 - "Lesson Runner Engine"
Cohesion: 0.19
Nodes (19): applySolution(), escapeHtml(), getFirstIncompleteIndex(), handleTextareaKeydown(), initApp(), isLessonCompleted(), isLessonLocked(), loadLesson() (+11 more)

### Community 9 - "Exam Screen UI"
Cohesion: 0.09
Nodes (22): #active-filename, #checkin-mini, #current-lesson-title, #dialog-action-btn, #dialog-content, #dialog-overlay, #dialog-title, #editor-gutter (+14 more)

### Community 10 - "Product & Design Docs"
Cohesion: 0.25
Nodes (7): Core Features, Core Problems, Out of Scope, Product, Success Metrics, Target Users, Vision

### Community 11 - "Responsive Layout Breakpoints"
Cohesion: 0.09
Nodes (22): #active-filename, #checkin-mini, #current-lesson-title, #dialog-action-btn, #dialog-content, #dialog-overlay, #dialog-title, #editor-gutter (+14 more)

### Community 12 - "Lesson Number Parsing"
Cohesion: 0.09
Nodes (19): COURSE_CONFIG, LESSONS, หุ้นกู้: กำไร(ขาดทุน)จากการไถ่ถอนก่อนกำหนดหลังตัดจำหน่ายส่วนลด 2 ปี (Bond Early Redemption), หุ้นกู้: การตัดจำหน่ายส่วนลดมูลค่าหุ้นกู้ด้วยวิธีดอกเบี้ยที่แท้จริง (Effective Interest Method), งบกระแสเงินสด: วิธีทางอ้อม (Indirect Method), งบการเงินรวมเบื้องต้น: การคำนวณค่าความนิยม (Goodwill), โจทย์อัตนัย CPA Set 1 (ข้อ 1): TFRS 15 การปันส่วนราคาเครื่องจักร 5 ล้านบาท, เงินปันผล: หุ้นบุริมสิทธิสะสมกับหุ้นสามัญ (+11 more)

### Community 13 - "Changelog Automation Config"
Cohesion: 0.09
Nodes (22): #active-filename, #checkin-mini, #current-lesson-title, #dialog-action-btn, #dialog-content, #dialog-overlay, #dialog-title, #editor-gutter (+14 more)

### Community 14 - "Workspace Layout Breakpoints"
Cohesion: 0.09
Nodes (22): #active-filename, #checkin-mini, #current-lesson-title, #dialog-action-btn, #dialog-content, #dialog-overlay, #dialog-title, #editor-gutter (+14 more)

### Community 15 - "Number Parsing Variant A"
Cohesion: 0.10
Nodes (19): COURSE_CONFIG, LESSONS, การคำนวณรายได้ตามเกณฑ์คงค้าง (Accrual Basis) จากยอดเงินสดรับ ผสมปรับปรุงลูกหนี้และรายได้รับล่วงหน้า, รายการปรับปรุง (Adjusting Entries), หนี้สงสัยจะสูญและค่าเผื่อหนี้สงสัยจะสูญ (Allowance Method), การกระทบยอดเงินฝากธนาคาร (Bank Reconciliation), การปิดบัญชี (Closing Entries), กฎเดบิต-เครดิต (Debit / Credit Rules) (+11 more)

### Community 16 - "Number Parsing Variant B"
Cohesion: 0.10
Nodes (18): COURSE_CONFIG, LESSONS, หลักฐานการสอบบัญชี: วิธีการตรวจสอบ (Audit Procedures), แบบจำลองความเสี่ยงจากการสอบบัญชี: คำนวณความเสี่ยงจากการตรวจไม่พบ (Detection Risk), แบบจำลองความเสี่ยงจากการสอบบัญชี (Audit Risk Model), การสุ่มตัวอย่างทางการสอบบัญชี (Audit Sampling), จรรยาบรรณผู้ประกอบวิชาชีพบัญชี (Code of Ethics), TSA 265: การประเมินระดับความรุนแรงของข้อบกพร่องในการควบคุมภายใน (Significant Deficiency vs Material Weakness) (+10 more)

### Community 17 - "Number Parsing Variant C"
Cohesion: 0.10
Nodes (19): COURSE_CONFIG, LESSONS, ข้อกล่าวอ้างของผู้บริหาร (Management Assertions), TSA 705: การตัดสินใจเลือกประเภทรายงานผู้สอบบัญชี กรณีข้อผิดพลาดการขัดต่อข้อเท็จจริงอันเป็นสาระสำคัญ (Material & Pervasiv, ประเภทความเห็นของผู้สอบบัญชี (Audit Opinion), โครงสร้างรายงานผู้สอบบัญชี: เรื่องสำคัญในการตรวจสอบ (Key Audit Matters), โจทย์อัตนัย CPA Set 1 (ข้อ 2): การเสนอรายงานผู้สอบบัญชี กรณีเพลิงไหม้คลังสินค้า 30 ล้านบาท, การดำเนินงานต่อเนื่อง (Going Concern) (+11 more)

### Community 18 - "Number Parsing Variant D"
Cohesion: 0.10
Nodes (18): COURSE_CONFIG, LESSONS, พระราชบัญญัติการบัญชี พ.ศ. 2543: หน้าที่ของผู้มีหน้าที่จัดทำบัญชี บทลงโทษทางอาญาและการปรับรายวัน, พระราชบัญญัติการบัญชี พ.ศ. 2543: การเก็บรักษาบัญชีและเอกสาร, พระราชบัญญัติวิชาชีพบัญชี พ.ศ. 2547: บทลงโทษทางจรรยาบรรณ, บริษัทจำกัด: มติพิเศษสำหรับการเพิ่มทุนหรือลดทุน (Special Resolution for Capital Change), บริษัทจำกัด: จำนวนผู้เริ่มก่อการขั้นต่ำ, โจทย์อัตนัย CPA Set 1 (ข้อ 3): การลดทุนบริษัทมหาชนจำกัด 40 ล้านบาท เหลือ 8 ล้านบาท (+10 more)

### Community 19 - "Number Parsing Variant E"
Cohesion: 0.10
Nodes (19): COURSE_CONFIG, LESSONS, ภาษีเงินได้นิติบุคคล: การคำนวณกำไรสุทธิเพื่อเสียภาษี (มาตรา 65 สอง / 65 ตรี) ผสมการปรับปรุง 5 รายการซับซ้อน, ภาษีเงินได้นิติบุคคล: รายจ่ายต้องห้าม (มาตรา 65 ตรี), โจทย์อัตนัย CPA Set 1 (ข้อ 4): ภาษีเงินได้นิติบุคคลจากกำไรบัญชี 8 ล้านบาท, ภาษีเงินได้นิติบุคคล: เครดิตภาษีต่างประเทศ (Foreign Tax Credit), ภาษีเงินได้บุคคลธรรมดา: อัตราก้าวหน้า, กำหนดเวลายื่นแบบ ภ.ง.ด.50 (+11 more)

### Community 22 - "Root Index Page"
Cohesion: 0.22
Nodes (6): checkForUpdates(), #checkin-banner, #footer-version, #import-progress-input, showUpdateBanner(), #update-banner-slot

### Community 23 - "Design System"
Cohesion: 0.09
Nodes (22): #active-filename, #checkin-mini, #current-lesson-title, #dialog-action-btn, #dialog-content, #dialog-overlay, #dialog-title, #editor-gutter (+14 more)

### Community 25 - "[Unreleased]"
Cohesion: 0.40
Nodes (4): [0.7.0] - 2026-08-01, Added, Changelog, Documentation

### Community 33 - "subjective.html"
Cohesion: 0.13
Nodes (17): addJournalRow(), autoSave(), #balance-status, calculateBalance(), #case-selector, CASES, ข้อที่ 1: [การบัญชี 1 & 2] การปันส่วนรายได้ TFRS 15 และรายการปรับปรุงงบการเงิน (25 คะแนน), ข้อที่ 2: [การสอบบัญชี 1 & 2] การประเมินความเสี่ยงและรายงานผู้สอบบัญชี (25 คะแนน) (+9 more)

### Community 34 - "LESSONS"
Cohesion: 0.11
Nodes (17): COURSE_CONFIG, LESSONS, เสนอรายการปรับปรุงบัญชี (Audit Adjusting Journal Entry), ตรวจสอบอำนาจอนุมัติการซื้อสินทรัพย์ตามข้อบังคับบริษัท, คำนวณค่าเสื่อมราคาเครื่องจักรที่ซื้อมา, ประเมินความเหมาะสมของข้อสมมติฐานการดำเนินงานต่อเนื่อง, บันทึกรายการซื้อสินทรัพย์เป็นเงินเชื่อ, คำนวณหนี้สินตามสัญญาเช่าเริ่มแรก (+9 more)

### Community 35 - "index.html"
Cohesion: 0.11
Nodes (17): #exam-answer, #exam-minutes, #exam-progress-label, #exam-question-body, #exam-screen, #exam-subject-tag, #exam-timer, #finish-btn (+9 more)

### Community 36 - "📝 ชุดข้อสอบจำลองและเฉลยละเอียดเตรียมสอบ CPA (CPA Mock Exam Set 1)"
Cohesion: 0.12
Nodes (16): 1.1 คำนวณรายได้จากการขายเครื่องจักรตาม TFRS 15, 1.2 คำนวณค่าเสื่อมราคารถยนต์นั่งบวกกลับทางภาษี (มาตรา 65 ตรี), 1.3 คำนวณดอกเบี้ยค้างจ่าย ณ วันสิ้นปี, 📌 ข้อที่ 1: [การบัญชี 1 & 2] การปันส่วนรายได้ TFRS 15 และรายการปรับปรุงงบการเงิน (25 คะแนน), 📌 ข้อที่ 2: [การสอบบัญชี 1 & 2] การประเมินความเสี่ยงและตัดสินใจเลือกประเภทรายงานผู้สอบบัญชี (25 คะแนน), 📌 ข้อที่ 3: [กฎหมายวิชาชีพบัญชี] องค์ประชุม มติพิเศษ และการลดทุนบริษัท (25 คะแนน), 📌 ข้อที่ 4: [ภาษีอากร] การคำนวณกำไรสุทธิเพื่อเสียภาษีเงินได้นิติบุคคล (25 คะแนน), 📝 ชุดข้อสอบจำลองและเฉลยละเอียดเตรียมสอบ CPA (CPA Mock Exam Set 1) (+8 more)

### Community 37 - "package.json"
Cohesion: 0.25
Nodes (7): description, name, private, scripts, start, test, version

### Community 38 - "Design System"
Cohesion: 0.29
Nodes (6): Avoid, Colors, Components, Design Direction, Design System, Typography

### Community 39 - "เตรียมสอบ CPA — Accountant Learning Portal"
Cohesion: 0.33
Nodes (5): License, ข้อจำกัด (ตรงไปตรงมา), เตรียมสอบ CPA — Accountant Learning Portal, เทคโนโลยี, เนื้อหา

### Community 40 - "selftest.mjs"
Cohesion: 0.33
Nodes (4): __dirname, failures, ROOT, TRACKS

### Community 41 - "checkin.js"
Cohesion: 0.70
Nodes (4): getCheckInState(), recordDailyCheckIn(), renderCheckInBanner(), renderCheckInMini()

### Community 42 - "@media (max-width: 768px)"
Cohesion: 0.40
Nodes (5): @media (max-width: 768px), body, .sidebar, .sidebar.show, .menu-toggle

### Community 44 - "@media (max-width: 1100px)"
Cohesion: 0.67
Nodes (3): @media (max-width: 1100px), .workspace, .panel-left

## Knowledge Gaps
- **556 isolated node(s):** `#sidebar`, `#lesson-list`, `#progress-label`, `#progress-bar-fill`, `#checkin-mini` (+551 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.
- **1 possibly unreachable function(s):** `__dirname`
  Not reached from any recognized entry point - could be dead code, or dynamically dispatched/decorator-registered.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `@media (max-width: 768px)` connect `@media (max-width: 768px)` to `Shared Style Tokens`?**
  _High betweenness centrality (0.002) - this node is a cross-community bridge._
- **What connects `#sidebar`, `#lesson-list`, `#progress-label` to the rest of the system?**
  _558 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Shared Style Tokens` be split into smaller, more focused modules?**
  _Cohesion score 0.020618556701030927 - nodes in this community are weakly interconnected._
- **Should `Financial Accounting 1 UI` be split into smaller, more focused modules?**
  _Cohesion score 0.06451612903225806 - nodes in this community are weakly interconnected._
- **Should `Financial Accounting 2 UI` be split into smaller, more focused modules?**
  _Cohesion score 0.06666666666666667 - nodes in this community are weakly interconnected._
- **Should `Auditing 1 UI` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._
- **Should `Auditing 2 UI` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._