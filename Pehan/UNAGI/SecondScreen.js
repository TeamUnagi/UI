import React, { Component } from 'react'
import {Text , View, Button, Image, StyleSheet} from 'react-native';


 class SecondScreen extends Component {
    render() {
        return (
            <View style= {styles.info}>
                <Text>Second Screen</Text>
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

export default SecondScreen; 


