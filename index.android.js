/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Button
} from 'react-native';
import CompWsc from './app/component/CompWsc';

export default class LearnReactNative extends Component {
    _onPress(){
        alert("hi");
        console.log("hi,you hit me");
    }

    getDefaultProps(){
        console.log("getDefaultProps")
        return {title:"HelloWorld"}
    }

    getInitialState(){
        console.log("getInitialState")
        return {content:"点击屏幕任意位置"}
    }

    componentWillMount(){
        console.log("componentWillMount")
    }
    componentDidMount(){
        console.log("componentDidMount")
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate")
        return true
    }
    componentWillUpdate(nextProps,nextState){
        console.log("componentWillUpdate")
    }
    componentDidUpdate(prevProps,prevState){
        console.log("componentDidUpdate")
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Button
            onPress={this._onPress}
            title="点我"
            accessibilityLabel="See an informative alert"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('LearnReactNative', () => LearnReactNative);
