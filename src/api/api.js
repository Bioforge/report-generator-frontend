export const getTextFromAudio = async audioFile => {
    const formData = new FormData();
    formData.append("file", audioFile);

    const response = await fetch(`${import.meta.env.VITE_PROXY_URL}/transcribe-audio`, {
        method: "POST",
        body: formData,
    });

    const data = await response.json();

    return data;
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
