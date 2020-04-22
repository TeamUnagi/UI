import React, { Component } from 'react'
import {Text , View, Button, Image, StyleSheet} from 'react-native';

export default class SecondScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Tab2'
    }

    render() {
        return (

            <View style={styles.info}>
                <Text>This is the Second Screen</Text>
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


