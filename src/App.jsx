import { useRef, useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";

import "./App.css";
import LeftSideComponent from "./components/Main/LeftSide.component";
import MiddleSideComponent from "./components/Main/MiddlleSide.component";
import RightSideComponent from "./components/Main/RightSide.component";

const App = () => {
    const [recordedUrl, setRecordedUrl] = useState("");
    const mediaStream = useRef(null);
    const mediaRecorder = useRef(null);
    const chunks = useRef([]);
    const [isRecording, setIsRecording] = useState(false);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // New
    const [inputPrompt, setInputPrompt] = useState("");

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

                // sendAudioToServer(recordedBlob).then(response => {
                //     console.log(response);
                // });
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

    // const sendAudioToServer = async audioBlob => {
    //     const formData = new FormData();
    //     formData.append("audio", audioBlob, "recording.webm");

    //     try {
    //         const response = await fetch("http://localhost:5000/upload-audio", {
    //             method: "POST",
    //             body: formData,
    //         });

    //         if (response.ok) {
    //             const data = await response.json();
    //             console.log(data);
    //         } else {
    //             console.error("Failed to upload audio");
    //         }
    //     } catch (error) {
    //         console.error("Error uploading audio:", error);
    //     }
    // };

    return (
        <Box width="100%">
            {/* {recordedUrl && !isRecording && <audio style={{ visibility: "hidden" }} src={recordedUrl} controls autoPlay />} */}

            {/* <TbMicrophoneFilled
                style={{
                    color: `${isRecording ? "red" : "green"}`,
                }}
                className="micIcon"
                onClick={handleRecording}
            /> */}
            <Grid container height="100vh" width="100%" padding={2}>
                <Grid item height="100%" xs={3.5}>
                    <LeftSideComponent inputPrompt={inputPrompt} windowHeight={windowHeight} />
                </Grid>

                <Grid item height="100%" xs={5}>
                    <MiddleSideComponent />
                </Grid>

                <Grid item height="100%" xs={3.5}>
                    <RightSideComponent />
                </Grid>
            </Grid>
        </Box>
    );
};
export default App;
