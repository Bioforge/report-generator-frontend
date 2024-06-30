import PromptTexArea from "./components/CustomTextArea/PromptTextArea.component";
import RecordButtonComponent from "./components/CustomButton/RecordButton.component";
import PrintButtonComponent from "./components/CustomButton/PrintButton.component";
import PreviousFileListComponent from "./components/PreviousFilesList/PreviousFileList.component";
import ReportPreviewComponent from "./components/ReportPreview/ReportPreview.component";

import "./App.css";

const App = () => {
    return (
        <div className="grid-container">
            <div className="one">
                <PromptTexArea />
            </div>
            <div className="three">
                <RecordButtonComponent color="primary-light" />
            </div>
            <div className="four">
                <ReportPreviewComponent />
            </div>

            <div className="six">
                <PrintButtonComponent color="primary-light" />
            </div>
        </div>
    );
};
export default App;
