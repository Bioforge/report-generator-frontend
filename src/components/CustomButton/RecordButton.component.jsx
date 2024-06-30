import { UseChatContext } from "../../context/chat.context";

export default function RecordButtonComponent() {
    const { startRecording, stopRecording, isRecording } = UseChatContext();

    const handleClick = () => {
        if (isRecording) {
            stopRecording();
        } else {
            startRecording();
        }
    };

    return (
        <button className={`custom-button record-button ${isRecording && "recording"}`} onClick={handleClick}>
            {isRecording ? "Stop" : "Record"}
        </button>
    );
}
