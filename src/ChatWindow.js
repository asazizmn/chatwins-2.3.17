import React from 'react';

import ChatHistory from './ChatHistory';
import MessageInput from './MessageInput';



const ChatWindow = props => (

    <div className="chat-window">

        <div className="name sender">{props.sender}</div>

        <ChatHistory
            messages={props.messages}
            sender={props.sender}
        />

        <MessageInput
            sender={props.sender}
            addNewMessage={props.addNewMessage}
        />

    </div>

);



export default ChatWindow;