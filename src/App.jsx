import { useState } from "react";
import CustomTexArea from "./components/CustomTextArea/CustomTextArea.component";
import CustomButtonComponent from "./components/CustomButton/CustomButton.component";
import PreviousFileListComponent from "./components/PreviousFilesList/PreviousFileList.component";

import "./App.css";
import ReportPrintComponent from "./components/ReportPrint/ReportPrint.component";

const App = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  return (
    <div className="grid-container">
      <div className="one">
        <CustomTexArea value={prompt} placeholder="Your prompt" />
      </div>
      <div className="two">
        <CustomTexArea value={response} placeholder="Your response" />
      </div>
      <div className="three">
        <CustomButtonComponent color="primary-light" value="Record" />
      </div>
      <div className="four">
        <ReportPrintComponent />
      </div>
      <div className="five">
        <PreviousFileListComponent />
      </div>
      <div className="six">
        <CustomButtonComponent color="primary-light" value="Print" />
      </div>
    </div>
  );
};
export default App;
