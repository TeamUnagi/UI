import React, { Component } from 'react';

import{ View, 
        Text,
        StyleSheet,
        ImageBackground,
        TextInput,
        TouchableOpacity,
       
      } from 'react-native';
      
import vegBg from './images/vegBg.jpg';




class ExporterSignIn extends Component {
  render() {  
  return (
    <ImageBackground source={vegBg} 
                     style= {styles.bgContainer}>

   
    <View>
     
    {/* HEADER */}
    <View style = {styles.container}>
        <Text style = {styles.headText}> UNAGI </Text>     
    </View>
   
   
   {/* All 4 inputs  */}
   
      <View>
          <TextInput style= {styles.inputText} 
          placeholder={'Email'}
          placeholderTextColor={'#fff'} 
          underlineColorAndroid={'#fff'} />
      </View>
      <View>
          <TextInput style= {styles.inputText} 
          placeholder={'Full name'}
          placeholderTextColor={'#fff'} 
          underlineColorAndroid={'#fff'} />
      </View>
      <View>
          <TextInput style= {styles.inputText}
 
          placeholder={'Password'}
          secureTextEntry = {true}
          placeholderTextColor={'#fff'} 
          underlineColorAndroid={'#fff'} />
      </View>
      <View>
          <TextInput style= {styles.inputText} 
          placeholder={'Company Name'}
          placeholderTextColor={'#fff'} 
          underlineColorAndroid={'#fff'} />
      </View>

      {/* SIGN IN BUTTON */}

      <TouchableOpacity style={styles.btnSignIn}> 
          <Text style={styles.btnText}> Sign in </Text>
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


  inputText:{
    marginBottom: 20,
    height:45,
    fontSize: 16, 
    paddingLeft: 35,
    color: '#fff',
    marginHorizontal: 25
  },
  btnSignIn:{
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

  },
})

export default ExporterSignIn ;