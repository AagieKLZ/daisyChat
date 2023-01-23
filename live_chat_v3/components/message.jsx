export default function Message({ from, msg, last }) {
    if (last.from !== from) {
        return (
            <div className={`chat ${from === "me" ? "chat-end" : "chat-start"}`}>
                <span className="chat-header">{from} 14:44</span>
                <div className="chat-bubble chat-bubble-success">{msg}</div>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className={`chat ${from === "me" ? "chat-end" : "chat-start"}`}>
            <div className="chat-bubble chat-bubble-success mr-10">{msg}</div>
        </div>
    )
}