import { useRef, useState, useEffect } from "react";
import { TbMicrophoneFilled } from "react-icons/tb";

const AudioRecorder = () => {
    const [recordedUrl, setRecordedUrl] = useState("");
    const mediaStream = useRef(null);
    const mediaRecorder = useRef(null);
    const chunks = useRef([]);
    const [isRecording, setIsRecording] = useState(false);

    useEffect(() => {
        const handleKeyDown = event => {
            if (event.key === " ") {
                if (isRecording) {
                    stopRecording();
                } else {
                    startRecording();
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isRecording]);

    const startRecording = async () => {
        try {
            setIsRecording(true);
            setRecordedUrl("");
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaStream.current = stream;
            mediaRecorder.current = new MediaRecorder(stream);

            mediaRecorder.current.ondataavailable = e => {
                if (e.data.size > 0) {
                    chunks.current.push(e.data);
                }
            };

            mediaRecorder.current.onstop = () => {
                const recordedBlob = new Blob(chunks.current, { type: "audio/webm" });
                const url = URL.createObjectURL(recordedBlob);
                setRecordedUrl(url);
                chunks.current = [];

                sendAudioToServer(recordedBlob).then(response => {
                    console.log(response);
                });
            };

            mediaRecorder.current.start();
        } catch (error) {
            console.error("Error accessing microphone:", error);
        }
    };

    const stopRecording = () => {
        if (mediaRecorder.current && mediaRecorder.current.state === "recording") {
            mediaRecorder.current.stop();
        }
        if (mediaStream.current) {
            mediaStream.current.getTracks().forEach(track => {
                track.stop();
            });
        }
        setIsRecording(false);
    };

    const handleRecording = () => {
        if (isRecording) {
            stopRecording();
        } else {
            startRecording();
        }
    };

    const sendAudioToServer = async audioBlob => {
        const formData = new FormData();
        formData.append("audio", audioBlob, "recording.webm");

        try {
            const response = await fetch("http://localhost:5000/upload-audio", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
            } else {
                console.error("Failed to upload audio");
            }
        } catch (error) {
            console.error("Error uploading audio:", error);
        }
    };

    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {recordedUrl && !isRecording && <audio style={{ visibility: "hidden" }} src={recordedUrl} controls autoPlay />}

            <TbMicrophoneFilled
                style={{
                    position: "absolute",
                    cursor: "pointer",
                    fontSize: "50px",
                    color: `${isRecording ? "red" : "green"}`,
                    padding: "25px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(209, 232, 213, 0.5)",
                }}
                onClick={handleRecording}
            />
        </div>
    );
};
export default AudioRecorder;
