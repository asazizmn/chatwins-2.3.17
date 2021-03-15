import React, { Component } from 'react';



class ChatWindow extends Component {

    state = {
        messages: [
            { username: 'Amy', text: 'Hi, Jon!' },
            { username: 'Amy', text: 'How are you?' },
            { username: 'John', text: 'Hi, Amy! Good, you?' },
        ]
    };


    /*
      If the user did not type anything, he/she should not be
      allowed to submit.
      */
    isDisabled = () => {
        return false;
    };


    render() {
        return (
            <div className="chat-window">

                <div className="name sender">{this.props.sender}</div>

                <ul className="message-list">
                    {
                        this.state.messages.map((message, index) => (
                            <li
                                key={index}
                                className={
                                    message.username === this.props.sender ? 'message sender' : 'message recipient'
                                }
                            >
                                <p>{`${message.username}: ${message.text}`}</p>
                            </li>
                        ))
                    }
                </ul>

                <div>
                    <form className="input-group">
                        <input type="text" className="form-control" placeholder="Enter your message..." />
                        <div className="input-group-append">
                            <button className="btn submit-button" disabled={this.isDisabled()}>
                                SEND
                    </button>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}



export default ChatWindow;