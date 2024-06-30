import { createContext, useState, useContext } from "react";
import { getTextFromAudio, getChatCompletion } from "../api/api";

// Create a context
const ChatContext = createContext();

// Create a provider component
export const ChatProvider = ({ children }) => {
    const [isRecording, setIsRecording] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [audioChunks, setAudioChunks] = useState([]);

    const startRecording = () => {
        setIsRecording(true);
        setPrompt("");
        setResponse("");
        setMediaRecorder(null);
        setAudioChunks([]);

        navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
            const mediaRecorder = new MediaRecorder(stream);
            setMediaRecorder(mediaRecorder);

            mediaRecorder.ondataavailable = event => {
                if (event.data && event.data.size > 0) {
                    setAudioChunks(prevChunks => [...prevChunks, event.data]);
                }
            };

            mediaRecorder.start();
        });
    };

    const stopRecording = async () => {
        mediaRecorder.stop();
        setIsRecording(false);
        await transcribeAudio();
    };

    const transcribeAudio = async () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/mp3" });
        const response = await getTextFromAudio(audioBlob);
        setPrompt(response);
        setAudioChunks([]);
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
                prompt,
                setPrompt,
                response,
                setResponse,
                mediaRecorder,
                setMediaRecorder,
                audioChunks,
                setAudioChunks,
                startRecording,
                stopRecording,
                transcribeAudio,
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
