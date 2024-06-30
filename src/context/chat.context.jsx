import { createContext, useState, useContext, useRef } from "react";
import { getTextFromAudio, getChatCompletion } from "../api/api";

// Create a context
const ChatContext = createContext();

// Create a provider component
export const ChatProvider = ({ children }) => {
    const [isRecording, setIsRecording] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const mediaRecorder = useRef(null);

    const startRecording = async () => {
        try {
            setPrompt("");
            setResponse("");
            setIsProcessing(false);

            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder.current = new MediaRecorder(stream);
            const chunks = [];

            mediaRecorder.current.ondataavailable = e => {
                if (e.data.size > 0) {
                    chunks.push(e.data);
                }
            };

            mediaRecorder.current.onstop = async () => {
                const blob = new Blob(chunks, { type: "audio/webm" });
                await uploadAudio(blob);
            };

            mediaRecorder.current.start();
            setIsRecording(true);
            console.log("Recording started");
        } catch (err) {
            console.error("Error starting recording:", err);
        }
    };

    const stopRecording = () => {
        if (mediaRecorder.current && mediaRecorder.current.state !== "inactive") {
            mediaRecorder.current.stop();
            setIsRecording(false);
            setIsProcessing(true);
            console.log("Recording stopped");
        }
    };

    const uploadAudio = async blob => {
        if (!blob) {
            console.error("No audio blob to upload");
            setIsProcessing(false);
            return;
        }

        if (blob.size === 0) {
            alert("The recorded audio is empty. Please try recording again.");
            setIsProcessing(false);
            return;
        }

        const formData = new FormData();
        formData.append("audio", blob, "recording.webm");

        try {
            const response = await getTextFromAudio(formData);
            setPrompt(response.data);

            const completion = await getChatCompletion(prompt);
            setResponse(completion.data.report);
        } catch (error) {
            console.error("Error uploading audio:", error.response ? error.response.data : error.message);
        } finally {
            setIsProcessing(false);
        }
    };

    const completeChat = async () => {
        setIsLoading(true);
        const response = await getChatCompletion(prompt);
        setResponse(response);
        setIsLoading(false);
    };

    return (
        <ChatContext.Provider
            value={{
                isRecording,
                setIsRecording,
                isLoading,
                setIsLoading,
                isProcessing,
                setIsProcessing,
                prompt,
                setPrompt,
                response,
                setResponse,
                startRecording,
                stopRecording,
                completeChat,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};

export const UseChatContext = () => {
    return useContext(ChatContext);
};
