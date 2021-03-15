import React from 'react';



const ChatHistory = props => (
    <ul className="message-list">
        {
            props.messages.map((message, index) => (
                <li
                    key={index}
                    className={
                        message.username === props.sender ? 'message sender' : 'message recipient'
                    }
                >
                    <p>{`${message.username}: ${message.text}`}</p>
                </li>
            ))
        }
    </ul>
);



export default ChatHistory;