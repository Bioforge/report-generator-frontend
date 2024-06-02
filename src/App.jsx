import { useRef, useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";

import LeftSideComponent from "./components/Main/LeftSide.component";
import MiddleSideComponent from "./components/Main/MiddlleSide.component";
import RightSideComponent from "./components/Main/RightSide.component";

import "./App.css";

const App = () => {
    const [recordedUrl, setRecordedUrl] = useState("");
    const mediaStream = useRef(null);
    const mediaRecorder = useRef(null);
    const chunks = useRef([]);
    const [isRecording, setIsRecording] = useState(false);

    // New
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [inputPrompt, setInputPrompt] = useState("");
    const [outputPrompt, setOutputPrompt] = useState("");

    useEffect(() => {
        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Box width="100%">
            <Grid container height="100vh" width="100%" padding={2}>
                <Grid item height="100%" xs={3.5}>
                    <LeftSideComponent
                        inputPrompt={inputPrompt}
                        setInputPrompt={setInputPrompt}
                        outputPrompt={outputPrompt}
                        setOutputPrompt={setOutputPrompt}
                        windowHeight={windowHeight}
                        isRecording={isRecording}
                        setIsRecording={setIsRecording}
                    />
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
