import { FaFileMedical } from "react-icons/fa";

export default function PreviousFileCardComponent() {
  return (
    <div className="previous-file-card">
      <span className="file-icon">
        <FaFileMedical size={30} />
      </span>
      <h3 className="file-name">Md. Mehedi Hassan</h3>
      <p className="file-description">
        X-Ray Report: Lumbar Spine X-ray 6/2/2024 Patient ID: 123456 Referring
        Physician: Dr. Jane Smith
      </p>
    </div>
  );
}
