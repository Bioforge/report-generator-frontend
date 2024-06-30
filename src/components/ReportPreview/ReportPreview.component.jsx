import { UseChatContext } from "../../context/chat.context";

export default function ReportPreviewComponent({ innerRef }) {
    const { response } = UseChatContext();

    return response ? (
        <div className="report-preview" ref={innerRef}>
            <h1>Patient Report</h1>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <strong>Patient ID:</strong>
                        </td>
                        <td>{response.PatientID}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Date:</strong>
                        </td>
                        <td>{response.Date}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Patient&apos;s Name:</strong>
                        </td>
                        <td>{response["Patient'sName"]}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Sex:</strong>
                        </td>
                        <td>{response.Sex}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Age:</strong>
                        </td>
                        <td>{response.Age}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Referred by:</strong>
                        </td>
                        <td>{response.Referredby}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Referral Note:</strong>
                        </td>
                        <td>{response.ReferralNote}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Examination:</strong>
                        </td>
                        <td>{response.Examination}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Clinical History:</strong>
                        </td>
                        <td>{response.ClinicalHistory}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Technique:</strong>
                        </td>
                        <td>
                            <table>
                                <tbody>
                                    {response.Technique.map((technique, index) => (
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
                                    {Object.keys(response.Findings).map((finding, index) => (
                                        <tr key={index}>
                                            <td>
                                                <strong>{finding.replace(/([A-Z])/g, " $1")}:</strong>
                                                <table>
                                                    <tbody>
                                                        {response.Findings[finding].map((detail, idx) => (
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
                                    {response.Comment.map((comment, index) => (
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
                                    {response.Advice.map((advice, index) => (
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
                        <td>{response.Note}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Doctor:</strong>
                        </td>
                        <td>
                            <table>
                                <tbody>
                                    {response.Doctor.map((doctor, index) => (
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
