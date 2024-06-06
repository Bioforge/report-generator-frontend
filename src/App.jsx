import { useState, useEffect } from "react";
import CustomTexArea from "./components/CustomTextArea.component";

import "./App.css";
import CustomButtonComponent from "./components/CustomButton.component";

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
      <div className="four">4</div>
      <div className="five">5</div>
      <div className="six">
        <CustomButtonComponent color="primary-light" value="Print" />
      </div>
    </div>
  );
};
export default App;
