import InputTextComponent from "../InputText.component";
import ResponseTextComponent from "../ResponseText.component";
import RecorderButtonComponent from "../RecorderButton.component";

export default function LeftSideComponent({ inputPrompt, setInputPrompt, outputPrompt, setOutputPrompt, windowHeight, isRecording, setIsRecording }) {
    return (
        <div className="leftSideContainer">
            <InputTextComponent inputPrompt={inputPrompt} setInputPrompt={setInputPrompt} windowHeight={windowHeight} />

            <ResponseTextComponent inputPrompt={outputPrompt} setInputPrompt={setOutputPrompt} windowHeight={windowHeight} />

            <RecorderButtonComponent setInputPrompt={setInputPrompt} isRecording={isRecording} setIsRecording={setIsRecording} />
        </div>
    );
}
