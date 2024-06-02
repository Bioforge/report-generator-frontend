import { useEffect, useRef } from "react";
import { Button } from "@mui/material";
import { MicOutlined, MicOffOutlined } from "@mui/icons-material";

export default function RecorderButtonComponent({ setInputPrompt, isRecording, setIsRecording }) {
    const recognitionRef = useRef(null);

    useEffect(() => {
        console.log("Recording Button Mounted");
        const handleKeyDown = event => {
            if (event.key === " ") {
                if (!isRecording) {
                    handleButtonClick();
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isRecording]);

    const handleButtonClick = () => {
        setIsRecording(true);
        startRecognition();
    };

    const startRecognition = () => {
        if (recognitionRef.current) {
            recognitionRef.current.stop(); // Ensure any previous recognition is stopped
        }

        let recognition = new window.webkitSpeechRecognition();
        recognition.lang = "en-US";
        recognition.interimResults = false;
        recognition.continuous = true; // Keep recognition active even with pauses

        recognition.onstart = () => {
            setInputPrompt("Recording...");
        };

        recognition.onresult = e => {
            var transcript = e.results[0][0].transcript;
            setInputPrompt(transcript);
            setIsRecording(false);
        };

        recognition.onend = () => {
            if (isRecording) {
                startRecognition(); // Restart recognition if still recording
            }
        };

        recognition.onerror = event => {
            console.error("Speech recognition error detected: " + event.error);
            setIsRecording(false);
        };

        recognition.start();
        recognitionRef.current = recognition;
    };

    const stopRecognition = () => {
        if (recognitionRef.current) {
            recognitionRef.current.stop();
            recognitionRef.current = null;
        }
        setIsRecording(false);
    };

    return (
        <Button
            onClick={isRecording ? stopRecognition : handleButtonClick}
            fullWidth
            variant="contained"
            color={isRecording ? "error" : "primary"}
            endIcon={isRecording ? <MicOffOutlined /> : <MicOutlined />}
        >
            {isRecording ? "Stop Recording" : "Start Recording"}
        </Button>
    );
}
