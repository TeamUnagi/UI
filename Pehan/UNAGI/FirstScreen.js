import React, { Component } from 'react'
import {Text , View, Button, Image, StyleSheet} from 'react-native';

export default class FirstScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Tab1'
    }

    render() {
        return (

            <View style={styles.info}>
                <Text>This is the First Screen</Text>
            </View>
        )
    }


}
const styles = StyleSheet.create({
    info: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

