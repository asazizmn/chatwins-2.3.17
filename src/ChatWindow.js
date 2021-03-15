import React, { Component } from 'react';



class ChatWindow extends Component {

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

                <div className="name sender">{this.props.users[this.props.idx].username}</div>

                <ul className="message-list">
                    {
                        this.props.messages.map((message, index) => (
                            <li
                                key={index}
                                className={
                                    message.username === this.props.users[this.props.idx].username ? 'message sender' : 'message recipient'
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