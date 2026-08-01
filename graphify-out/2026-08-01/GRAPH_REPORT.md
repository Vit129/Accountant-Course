# Graph Report - feat-cost-finmgmt-capstone-and-light-theme-1  (2026-08-01)

## Corpus Check
- 25 files · ~25,694 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 451 nodes · 456 edges · 33 communities (23 shown, 10 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `801be3cb`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## God Nodes (most connected - your core abstractions)
1. `LESSONS` - 17 edges
2. `LESSONS` - 16 edges
3. `LESSONS` - 16 edges
4. `LESSONS` - 16 edges
5. `LESSONS` - 16 edges
6. `LESSONS` - 15 edges
7. `initApp()` - 8 edges
8. `Product` - 7 edges
9. `startExam()` - 6 edges
10. `goToQuestion()` - 6 edges

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

## Communities (33 total, 10 thin omitted)

### Community 0 - "Shared Style Tokens"
Cohesion: 0.02
Nodes (92): :root, .sidebar-title, .btn-solution:hover, .sidebar-title span, .sidebar-subtitle, .lesson-list, .lesson-item, .lesson-item:hover (+84 more)

### Community 1 - "Financial Accounting 1 UI"
Cohesion: 0.09
Nodes (21): #active-filename, #current-lesson-title, #dialog-action-btn, #dialog-content, #dialog-overlay, #dialog-title, #editor-gutter, #editor-tabs (+13 more)

### Community 2 - "Financial Accounting 2 UI"
Cohesion: 0.09
Nodes (21): #active-filename, #current-lesson-title, #dialog-action-btn, #dialog-content, #dialog-overlay, #dialog-title, #editor-gutter, #editor-tabs (+13 more)

### Community 3 - "Auditing 1 UI"
Cohesion: 0.09
Nodes (21): #active-filename, #current-lesson-title, #dialog-action-btn, #dialog-content, #dialog-overlay, #dialog-title, #editor-gutter, #editor-tabs (+13 more)

### Community 4 - "Auditing 2 UI"
Cohesion: 0.09
Nodes (21): #active-filename, #current-lesson-title, #dialog-action-btn, #dialog-content, #dialog-overlay, #dialog-title, #editor-gutter, #editor-tabs (+13 more)

### Community 5 - "Law Module UI"
Cohesion: 0.09
Nodes (21): #active-filename, #current-lesson-title, #dialog-action-btn, #dialog-content, #dialog-overlay, #dialog-title, #editor-gutter, #editor-tabs (+13 more)

### Community 6 - "Taxation Module UI"
Cohesion: 0.09
Nodes (21): #active-filename, #current-lesson-title, #dialog-action-btn, #dialog-content, #dialog-overlay, #dialog-title, #editor-gutter, #editor-tabs (+13 more)

### Community 7 - "Exam Engine Logic"
Cohesion: 0.17
Nodes (18): buildQuestionPool(), confirmSubmitExam(), EXAM_STATE, formatTime(), getSelectedSubjectIds(), goNext(), goPrev(), goToQuestion() (+10 more)

### Community 8 - "Lesson Runner Engine"
Cohesion: 0.19
Nodes (16): applySolution(), escapeHtml(), handleTextareaKeydown(), initApp(), loadLesson(), renderLessonList(), resetCourse(), runSandboxCode() (+8 more)

### Community 9 - "Exam Screen UI"
Cohesion: 0.11
Nodes (17): #exam-answer, #exam-minutes, #exam-progress-label, #exam-question-body, #exam-screen, #exam-subject-tag, #exam-timer, #finish-btn (+9 more)

### Community 10 - "Product & Design Docs"
Cohesion: 0.25
Nodes (7): Core Features, Core Problems, Out of Scope, Product, Success Metrics, Target Users, Vision

### Community 11 - "Responsive Layout Breakpoints"
Cohesion: 0.29
Nodes (6): Avoid, Colors, Components, Design Direction, Design System, Typography

### Community 12 - "Lesson Number Parsing"
Cohesion: 0.10
Nodes (17): COURSE_CONFIG, LESSONS, หุ้นกู้: กำไร(ขาดทุน)จากการไถ่ถอนก่อนกำหนดหลังตัดจำหน่ายส่วนลด 2 ปี (Bond Early Redemption), หุ้นกู้: การตัดจำหน่ายส่วนลดมูลค่าหุ้นกู้ด้วยวิธีดอกเบี้ยที่แท้จริง (Effective Interest Method), งบกระแสเงินสด: วิธีทางอ้อม (Indirect Method), งบการเงินรวมเบื้องต้น: การคำนวณค่าความนิยม (Goodwill), เงินปันผล: หุ้นบุริมสิทธิสะสมกับหุ้นสามัญ, การรวมธุรกิจ: คำนวณค่าความนิยมด้วยวิธี Full Goodwill Method (รวม NCI ตามมูลค่ายุติธรรม) (+9 more)

### Community 13 - "Changelog Automation Config"
Cohesion: 0.33
Nodes (5): License, ข้อจำกัด (ตรงไปตรงมา), เตรียมสอบ CPA — Accountant Learning Portal, เทคโนโลยี, เนื้อหา

### Community 14 - "Workspace Layout Breakpoints"
Cohesion: 0.40
Nodes (5): @media (max-width: 768px), body, .sidebar, .sidebar.show, .menu-toggle

### Community 15 - "Number Parsing Variant A"
Cohesion: 0.10
Nodes (18): COURSE_CONFIG, LESSONS, รายการปรับปรุง (Adjusting Entries), หนี้สงสัยจะสูญและค่าเผื่อหนี้สงสัยจะสูญ (Allowance Method), การกระทบยอดเงินฝากธนาคาร (Bank Reconciliation), การปิดบัญชี (Closing Entries), กฎเดบิต-เครดิต (Debit / Credit Rules), ค่าเสื่อมราคา (Straight-Line Method) (+10 more)

### Community 16 - "Number Parsing Variant B"
Cohesion: 0.11
Nodes (17): COURSE_CONFIG, LESSONS, หลักฐานการสอบบัญชี: วิธีการตรวจสอบ (Audit Procedures), แบบจำลองความเสี่ยงจากการสอบบัญชี: คำนวณความเสี่ยงจากการตรวจไม่พบ (Detection Risk), แบบจำลองความเสี่ยงจากการสอบบัญชี (Audit Risk Model), การสุ่มตัวอย่างทางการสอบบัญชี (Audit Sampling), จรรยาบรรณผู้ประกอบวิชาชีพบัญชี (Code of Ethics), การควบคุมภายใน: กรอบ COSO 5 องค์ประกอบ (+9 more)

### Community 17 - "Number Parsing Variant C"
Cohesion: 0.11
Nodes (17): COURSE_CONFIG, LESSONS, ข้อกล่าวอ้างของผู้บริหาร (Management Assertions), TSA 705: การตัดสินใจเลือกประเภทรายงานผู้สอบบัญชี กรณีข้อผิดพลาดการขัดต่อข้อเท็จจริงอันเป็นสาระสำคัญ (Material & Pervasiv, ประเภทความเห็นของผู้สอบบัญชี (Audit Opinion), โครงสร้างรายงานผู้สอบบัญชี: เรื่องสำคัญในการตรวจสอบ (Key Audit Matters), การดำเนินงานต่อเนื่อง (Going Concern), วงจรสินค้าคงเหลือ: การตรวจสอบความมีตัวตนและการตัดยอดสินค้าคงเหลือ (Existence and Cut-off) (+9 more)

### Community 18 - "Number Parsing Variant D"
Cohesion: 0.11
Nodes (16): COURSE_CONFIG, LESSONS, พระราชบัญญัติการบัญชี พ.ศ. 2543: การเก็บรักษาบัญชีและเอกสาร, พระราชบัญญัติวิชาชีพบัญชี พ.ศ. 2547: บทลงโทษทางจรรยาบรรณ, บริษัทจำกัด: มติพิเศษสำหรับการเพิ่มทุนหรือลดทุน (Special Resolution for Capital Change), บริษัทจำกัด: จำนวนผู้เริ่มก่อการขั้นต่ำ, บริษัทจำกัด: หน้าที่และความรับผิดชอบของกรรมการ (Directors' Fiduciary Duty), การเลิกห้างหุ้นส่วนและบริษัท (Dissolution) (+8 more)

### Community 19 - "Number Parsing Variant E"
Cohesion: 0.11
Nodes (17): COURSE_CONFIG, LESSONS, ภาษีเงินได้นิติบุคคล: การคำนวณกำไรสุทธิเพื่อเสียภาษี (มาตรา 65 สอง / 65 ตรี) ผสมการปรับปรุง 5 รายการซับซ้อน, ภาษีเงินได้นิติบุคคล: รายจ่ายต้องห้าม (มาตรา 65 ตรี), ภาษีเงินได้นิติบุคคล: เครดิตภาษีต่างประเทศ (Foreign Tax Credit), ภาษีเงินได้บุคคลธรรมดา: อัตราก้าวหน้า, กำหนดเวลายื่นแบบ ภ.ง.ด.50, ภาษีเงินได้นิติบุคคล: การประมาณการครึ่งปี (ภ.ง.ด. 51) (+9 more)

### Community 23 - "Design System"
Cohesion: 0.67
Nodes (3): @media (max-width: 1100px), .workspace, .panel-left

### Community 25 - "[Unreleased]"
Cohesion: 0.40
Nodes (4): Added, Changelog, Documentation, [Unreleased]

## Knowledge Gaps
- **364 isolated node(s):** `#sidebar`, `#lesson-list`, `#progress-label`, `#progress-bar-fill`, `#menu-toggle` (+359 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `@media (max-width: 768px)` connect `Workspace Layout Breakpoints` to `Shared Style Tokens`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Why does `@media (max-width: 1100px)` connect `Design System` to `Shared Style Tokens`?**
  _High betweenness centrality (0.002) - this node is a cross-community bridge._
- **What connects `#sidebar`, `#lesson-list`, `#progress-label` to the rest of the system?**
  _366 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Shared Style Tokens` be split into smaller, more focused modules?**
  _Cohesion score 0.021505376344086023 - nodes in this community are weakly interconnected._
- **Should `Financial Accounting 1 UI` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._
- **Should `Financial Accounting 2 UI` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._
- **Should `Auditing 1 UI` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._