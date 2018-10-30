import React, {Component} from 'react';
import MessagesList from './MessageList.jsx'
import ChatBar from './ChatBar.jsx'


const dummyData = {
  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: [
    {
      id: 1,
      username: "Bob",
      content: "Has anyone seen my marbles?",
    },
    {
      id: 2,
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
    }
  ]
}


class App extends Component {

  constructor() {
    super();
    this.state = {
      currentUser : dummyData.currentUser.name,
      messages : dummyData.messages
    }
  }

  navBar() {
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
      </nav>
      )
  }

  addMessage = (content) => {
    const newMessage = {id: 9, username: this.state.currentUser, content: content};
    const messages = this.state.messages.concat(newMessage)
    // Update the state of the app component.
    // Calling setState will trigger a call to render() in App and all child components.
    this.setState({messages: messages})
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
  }

  render() {
    return (
     <div>
      <this.navBar/>
      <MessagesList data={this.state.messages}/>
      <ChatBar user={this.state.currentUser} addMessage={this.addMessage}/>
      </div>
    );
  }
}
export default App;



