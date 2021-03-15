import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import ChatWindow from './ChatWindow';



class App extends Component {

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

  
  render() {
    return (
      <div className="App">

        <Header
          title={"Super Awesome Chat"}
          logo={logo}
        />

        <div className="container">

          <ChatWindow
            idx={0}
            users={this.state.users}
            messages={this.state.messages}
          />

          <ChatWindow
            idx={1}
            users={this.state.users}
            messages={this.state.messages}
          />

        </div>
      </div>
    );
  }
}



export default App;
