import { UseChatContext } from "../../context/chat.context";

export default function ResponseTextArea() {
    const { response } = UseChatContext();

    return (
        <textArea readOnly placeholder="Your response" className="custom-area">
            {response}
        </textArea>
    );
}
