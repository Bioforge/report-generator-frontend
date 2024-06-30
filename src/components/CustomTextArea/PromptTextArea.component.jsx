import { UseChatContext } from "../../context/chat.context";

export default function PromptTextArea() {
    const { prompt } = UseChatContext();

    return (
        <textArea readOnly placeholder="Your prompt" className="custom-area">
            {prompt}
        </textArea>
    );
}
