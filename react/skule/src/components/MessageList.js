import React from 'react'

function MessageList({ messages }) {
    return (
        <div>
            {messages.map((text) =>
            <p>{text}</p>
            )}
        </div>
    )
}

export default MessageList
