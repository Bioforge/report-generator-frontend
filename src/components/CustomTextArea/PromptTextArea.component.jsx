import { UseChatContext } from "../../context/chat.context";

export default function PromptTextArea() {
    const { prompt } = UseChatContext();

    return <textarea readOnly placeholder="Your prompt" className="custom-area" value={prompt} />;
}
