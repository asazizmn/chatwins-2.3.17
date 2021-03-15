import React, { Component } from 'react';



class ChatWindow extends Component {

    state = {
        newMessage: ''
    };


    handleNewMessage = event => {
        this.setState({
            newMessage: event.target.value
        });
    };


    clearInput = () => {
        this.setState({
            newMessage: ''
        });
    }


    handleSubmit = event => {

        const { addNewMessage } = this.props;

        // prevent browser refresh on submission
        event.preventDefault();

        // pass `newMessage` value back to callback in parent component
        addNewMessage(this.props.sender, this.state.newMessage);

        this.clearInput();
    };


    /*
     * If the user did not type anything, he/she should not be 
     * allowed to submit.
     */
    isDisabled = () => {
        return this.state.newMessage === '';
    };


    render() {
        return (
            <div className="chat-window">

                <div className="name sender">{this.props.sender}</div>

                <ul className="message-list">
                    {
                        this.props.messages.map((message, index) => (
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
                    <form className="input-group" onSubmit={this.handleSubmit}>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your message..."

                            value={this.state.newMessage}
                            onChange={this.handleNewMessage}
                        />

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