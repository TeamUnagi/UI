import React, { Component } from 'react';
import{ View,Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, } from 'react-native';
import vegBg from './images/vegBg.jpeg';




class UserPage extends Component {
  render() {  
  return (
    <ImageBackground source={vegBg} 
                     style= {styles.bgContainer}>

   
    <View>
     
    {/* HEADER */}
    <View style = {styles.container}>
        <Text style = {styles.headText}> UNAGI </Text>     
    </View>
  
        {/* SIGN IN BUTTON */}

      <TouchableOpacity style={styles.button}> 
          <Text style={styles.btnText}> Exporter </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}> 
          <Text style={styles.btnText}> Farmer </Text>
      </TouchableOpacity>

    {/*  TEXT TO LOGIN */}

      <Text  style={styles.loginText}> Have an account? Login </Text>

    </View>
    </ImageBackground> 
  )
}
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  headText:{
    paddingTop:100,
    paddingBottom: 50,
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    opacity: 0.5
  },
  bgContainer:{
    flex:1,
    height: null,
    width: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
      color:'#fff',
      textAlign:"center",
      marginTop: 120,
      fontSize: 16 
  },
  button:{
      height:55,
      borderRadius: 25,
      backgroundColor: '#ffa477',
      justifyContent: 'center',
      width: 330,
      marginLeft: 30,
      marginTop: 40
  },
  btnText:{
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default UserPage ;