import InputTextComponent from "../InputText.component";
import ResponseTextComponent from "../ResponseText.component";
import RecorderButtonComponent from "../RecorderButton.component";

export default function LeftSideComponent({ inputPrompt, windowHeight }) {
    return (
        <div className="leftSideContainer">
            <InputTextComponent inputPrompt={inputPrompt} windowHeight={windowHeight} />

            <ResponseTextComponent inputPrompt={inputPrompt} windowHeight={windowHeight} />

            <RecorderButtonComponent />
        </div>
    );
}
