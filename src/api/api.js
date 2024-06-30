import axios from "axios";

export const getTextFromAudio = async formData => {
    const response = await axios.post(`${import.meta.env.VITE_PROXY_URL}/transcribe-audio`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data;
};

export const getChatCompletion = async context => {
    const response = await fetch(`${import.meta.env.VITE_PROXY_URL}/chat-completion`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ context }),
    });
    const data = await response.json();

    return data;
};
