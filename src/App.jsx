import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import PromptTexArea from "./components/CustomTextArea/PromptTextArea.component";
import RecordButtonComponent from "./components/CustomButton/RecordButton.component";
import PrintButtonComponent from "./components/CustomButton/PrintButton.component";
import ReportPreviewComponent from "./components/ReportPreview/ReportPreview.component";

import "./App.css";

const App = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div className="grid-container">
            <div className="one">
                <PromptTexArea />
            </div>
            <div className="three">
                <RecordButtonComponent color="primary-light" />
            </div>
            <div className="four">
                <ReportPreviewComponent innerRef={componentRef} />
            </div>

            <div className="six">
                <PrintButtonComponent handlePrint={handlePrint} color="primary-light" />
            </div>
        </div>
    );
};
export default App;
