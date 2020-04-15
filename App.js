import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import Home from './src/pages/home';
import SplashScreen from 'react-native-splash-screen'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      SplashScreen.hide();
      
  }

  render() {
    return (
      <View>
        <StatusBar backgroundColor={"rgb(138, 5, 190)"} barStyle={'light-content'}></StatusBar>
        <Home></Home>
      </View>
    );
  }
}
