import Expo from 'expo';
import React from 'react';
import Axios from 'axios';

var io = require('socket.io-client');

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

class App extends React.Component {

  constructor(props, context){
    super(props, context);
    this.state = {
      messages: [
        'message 1',
      ]
    }
  }

  componentDidMount() {
    this.socket = io('https://stormy-beyond-28017.herokuapp.com/');
    this.socket.on('chat-message', (msg) => {
      console.log(msg);
      var messages = this.state.messages;
      messages.push(msg);
      this.setState(messages);
    })
  }

  sendMessage() {
    this.socket.emit('chat-message', 'sent from phone')
  }

  renderMessages() {
    const messages = this.state.messages;

    const nodes = messages.map((message, index) => {
      return (
        <Text key={index}>{message}</Text>
      )
    })

    return nodes;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up main.js to start working!</Text>
        {this.renderMessages()}
        <TouchableHighlight
          style={styles.button}
          onPress={this.sendMessage.bind(this)}
        >
          <Text>Press me</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#f8f8f8'
  }
});

Expo.registerRootComponent(App);
