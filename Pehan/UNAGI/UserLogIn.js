import React, { Component } from 'react';
import{ View,Text, StyleSheet, ImageBackground, SafeAreaView, TextInput, TouchableOpacity, } from 'react-native';
import vegBg from './images/background.jpg';

class UserLogin extends Component {
  render() {  
    return (
      <ImageBackground source={vegBg} style= {styles.bgContainer}>
        <SafeAreaView>
          <View>
        
            {/* HEADER */}
            <View style = {styles.container}>
                <Text style = {styles.headText}> UNAGI </Text>     
            </View>
          
            {/* All 2 inputs  */}
            <View>
                <TextInput style= {styles.inputText} 
                placeholder={'Email'}
                placeholderTextColor={'#E59866'} />
            </View>
            
            <View>
                <TextInput style= {styles.inputText}
                placeholder={'Password'}
                secureTextEntry = {true}
                placeholderTextColor={'#E59866'} />
            </View>
      
            {/* SIGN IN BUTTON */}
            <TouchableOpacity style={styles.btnLogin}> 
                <Text style={styles.btnText}> Login </Text>
            </TouchableOpacity>
      
            {/* TEXT TO SIGN IN */}
            <TouchableOpacity onPress = {() => {
              const {navigation} = this.props;
              navigation.navigate('Home')
            }}> 
              <Text  style={styles.signUpText}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>

      
          </View>
        </SafeAreaView>
      </ImageBackground> 
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
  },

  headText: {
    paddingTop:100,
    paddingBottom: 50,
    color: '#E59866',
    fontSize: 30,
    fontFamily: "Futura",
    marginTop: 10,
  },

  bgContainer: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center'
  },

  inputText: {
    marginBottom: 20,
    height:45,
    fontSize: 18, 
    borderBottomWidth: 1,
    borderBottomColor: '#E59866',
    color: '#E59866',
    textAlignVertical: 'top',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 300
  },

  btnLogin:{
    height:50,
    borderRadius: 25,
    backgroundColor: '#000000',
    justifyContent: 'center',
    width: 330,
    marginTop: 30
  },

  btnText:{
    color: '#E59866',
    fontSize: 30,
    fontFamily: "Futura",
    textAlign: 'center'
  },

  signUpText: {
    color:'#E59866',
    textAlign:"center",
    marginTop: 40,
    fontFamily: "Avenir",
    marginBottom: 10,
    fontSize: 16 
  },
})

export default UserLogin ;