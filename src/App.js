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
            // { username: 'Amy', text: 'Hi, Jon!' },
            // { username: 'Amy', text: 'How are you?' },
            // { username: 'John', text: 'Hi, Amy! Good, you?' },
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

        const { users, messages } = this.state;

        return (
            <div className="App">

                <Header
                    title={"Super Awesome Chat"}
                    logo={logo}
                />

                <div className="container">

                    {
                        users.map( user => (
                            <ChatWindow
                                key={user.username}
                                sender={user.username}
                                messages={messages}
                                addNewMessage={this.addNewMessage}
                            />
                        ))
                    }

                </div>
            </div>
        );
    }
}



export default App;
