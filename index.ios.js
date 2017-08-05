/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, Button
} from 'react-native';
import CompWsc from './app/component/CompWsc';

export default class LearnReactNative extends Component {
    _onPress() {
        alert("hi");
        console.log("hi,you hit me");
    }

    //初始化属性与状态。
    constructor(props) {
        super(props);
        this.state = {showText: true};

        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState(previousState => {
                return {showText: !previousState.showText};
            });
        }, 10000);
    }

    componentWillMount() {
        console.log("componentWillMount")
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log((nextState));
        console.log("shouldComponentUpdate")
        return true
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate")
    }

    render() {
        let test1;
        if (this.state.showText)
            test1 = <Text style={styles.welcome}> 你好</Text>;
        else
            test1 = <Text style={styles.welcome}> 有意思，一些变化</Text>;

        return (
            <View style={styles.container}>
                {test1}
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
                <CompWsc name="王顺初"/>
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
