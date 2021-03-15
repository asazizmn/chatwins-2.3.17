import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import ChatWindow from './ChatWindow';



class App extends Component {

    // please note that these state values can not be added to `ChatWindow` componenet
    // ... because each ChatWindow component will end up having its own set of independant state values
    state = {
        users: [
            { username: 'Amy' },
            { username: 'John' }
        ],

        messages: [
            { username: 'Amy', text: 'Hi, Jon!' },
            { username: 'Amy', text: 'How are you?' },
            { username: 'John', text: 'Hi, Amy! Good, you?' },
        ]

    };


    addNewMessage = (sender, newMessage) => {
        this.setState(state => ({
            messages: [
                ...state.messages,
                { username: sender, text: newMessage }
            ]
        }));
    };


    render() {
        return (
            <div className="App">

                <Header
                    title={"Super Awesome Chat"}
                    logo={logo}
                />

                <div className="container">

                    <ChatWindow
                        sender={this.state.users[0].username}
                        messages={this.state.messages}
                        addNewMessage={this.addNewMessage}
                    />

                    <ChatWindow
                        sender={this.state.users[1].username}
                        messages={this.state.messages}
                        addNewMessage={this.addNewMessage}
                    />

                </div>
            </div>
        );
    }
}



export default App;
