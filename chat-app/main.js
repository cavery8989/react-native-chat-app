import Expo from 'expo';
import React from 'react';
import Axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

class App extends React.Component {

  pingServer() {
    console.log('pressed');

    Axios.get('http://example.com/')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up main.js to start working!</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={this.pingServer.bind(this)}
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
