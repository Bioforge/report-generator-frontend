import { useEffect, useState } from "react";
import { UseChatContext } from "../../context/chat.context";
import ReactToPrint from "react-to-print";
import PrintButtonComponent from "../CustomButton/PrintButton.component";

export default function ReportPreviewComponent({ innerRef }) {
    const { response } = UseChatContext();
    const [reportData, setReportData] = useState(null);

    useEffect(() => {
        if (response) {
            setReportData(response);
        }
    }, [response]);

    return reportData ? (
        <div className="report-preview" ref={innerRef}>
            <h1>Patient Report</h1>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <strong>Patient ID:</strong>
                        </td>
                        <td>{reportData.PatientID}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Date:</strong>
                        </td>
                        <td>{reportData.Date}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Patient&apos;s Name:</strong>
                        </td>
                        <td>{reportData["Patient'sName"]}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Sex:</strong>
                        </td>
                        <td>{reportData.Sex}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Age:</strong>
                        </td>
                        <td>{reportData.Age}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Referred by:</strong>
                        </td>
                        <td>{reportData.Referredby}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Referral Note:</strong>
                        </td>
                        <td>{reportData.ReferralNote}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Examination:</strong>
                        </td>
                        <td>{reportData.Examination}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Clinical History:</strong>
                        </td>
                        <td>{reportData.ClinicalHistory}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Technique:</strong>
                        </td>
                        <td>
                            <table>
                                <tbody>
                                    {reportData.Technique.map((technique, index) => (
                                        <tr key={index}>
                                            <td>{technique}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Findings:</strong>
                        </td>
                        <td>
                            <table>
                                <tbody>
                                    {Object.keys(reportData.Findings).map((finding, index) => (
                                        <tr key={index}>
                                            <td>
                                                <strong>{finding.replace(/([A-Z])/g, " $1")}:</strong>
                                                <table>
                                                    <tbody>
                                                        {reportData.Findings[finding].map((detail, idx) => (
                                                            <tr key={idx}>
                                                                <td>{detail}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Comment:</strong>
                        </td>
                        <td>
                            <table>
                                <tbody>
                                    {reportData.Comment.map((comment, index) => (
                                        <tr key={index}>
                                            <td>{comment}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Advice:</strong>
                        </td>
                        <td>
                            <table>
                                <tbody>
                                    {reportData.Advice.map((advice, index) => (
                                        <tr key={index}>
                                            <td>{advice}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Note:</strong>
                        </td>
                        <td>{reportData.Note}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Doctor:</strong>
                        </td>
                        <td>
                            <table>
                                <tbody>
                                    {reportData.Doctor.map((doctor, index) => (
                                        <tr key={index}>
                                            <td>{doctor}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    ) : (
        <div className="report-preview" ref={innerRef}>
            <h1>Patient Report</h1>
            <p>No report available</p>
        </div>
    );
}
