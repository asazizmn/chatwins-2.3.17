import React, { Component } from 'react';



class MessageInput extends Component {

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

        const { addNewMessage, sender } = this.props;

        // prevent browser refresh on submission
        event.preventDefault();

        // pass `newMessage` value back to callback in parent component
        addNewMessage(sender, this.state.newMessage);

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
        );
    }
}



export default MessageInput;