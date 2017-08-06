'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,DeviceEventEmitter
} from 'react-native';

export default class CompWsc extends Component {
    componentDidMount() {
        console.log("child listner is add!");
        DeviceEventEmitter.addListener('event',(paras)=>{
            console.log("receive message from child!" + paras)
        });
        console.log("componentDidMount")
    }

    _onPress(){
        console.log("from child!");
        DeviceEventEmitter.emit("event","send message from child");
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome {this.props.name}!
                </Text>
                <Button
                    onPress={this._onPress}
                    title="发送事件"
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
        backgroundColor: 'white',
        padding: 20,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 16,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 12,
    },
});
