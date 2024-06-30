import MarkdownPreview from "@uiw/react-markdown-preview";

const markdown = `
# X-Ray Report

## Patient Information
- **Name:** John Doe
- **Age:** 45
- **Gender:** Male
- **Patient ID:** 123456
- **Date of Examination:** June 2, 2024

## Referring Physician
- **Name:** Dr. Jane Smith
- **Department:** Orthopedics

## Clinical Information
- **Clinical History:** Persistent lower back pain
- **Examination Requested:** Lumbar Spine X-ray

## Examination Findings
1. **Alignment:** 
   - Normal alignment of lumbar spine.
2. **Vertebrae:**
   - No fractures or dislocations observed.
   - Mild degenerative changes at L4-L5 and L5-S1 levels.
3. **Disc Spaces:**
   - Mild narrowing of the intervertebral disc space at L4-L5 and L5-S1.
4. **Soft Tissues:**
   - No abnormal soft tissue calcifications.

## Impression
- Mild degenerative changes in the lumbar spine, particularly at the L4-L5 and L5-S1 levels.
- No evidence of acute fracture or dislocation.

**Radiologist:** Dr. Emily Johnson  
**Date:** June 2, 2024
`;

export default function ReportPreviewComponent() {
    return (
        <div className="report-print">
            <MarkdownPreview source={markdown} style={{ padding: 16, backgroundColor: "#fff", color: "#000" }} />
        </div>
    );
}
