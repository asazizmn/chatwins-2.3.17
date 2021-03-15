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
            sender={this.state.users[0].username}
          />

          <ChatWindow
            sender={this.state.users[1].username}
          />

        </div>
      </div>
    );
  }
}



export default App;
