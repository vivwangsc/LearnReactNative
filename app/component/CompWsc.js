'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal
} from 'react-native';

export default class CompWsc extends Component {
    state = {
        modalVisible: false,
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {alert("Modal has been closed.")}
                />
                <Text style={styles.welcome}>
                    Welcome {this.props.name}!
                </Text>
                <Text style={styles.instructions}>
                    This app shows the basics of navigating between a few screens,
                    working with ListView and handling text input.
                </Text>
                <Text style={styles.instructions}>
                    Modify any files to get started. For example try changing the
                    file views/welcome/WelcomeText.android.js.
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu.
                </Text>
            </View>
        );
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
