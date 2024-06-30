import { UseChatContext } from "../../context/chat.context";

export default function ResponseTextArea() {
    const { response } = UseChatContext();

    return <textarea readOnly placeholder="Your response" className="custom-area" value={response} />;
}
