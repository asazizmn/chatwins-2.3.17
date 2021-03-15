import React, { Component } from 'react';
import MessageInput from './MessageInput';
import ChatHistory from './ChatHistory';



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