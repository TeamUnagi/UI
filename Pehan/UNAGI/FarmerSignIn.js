import React, { Component } from 'react';

import{ View, 
        Text,
        StyleSheet,
        ImageBackground,
        TextInput,
        TouchableOpacity,
        SafeAreaView,
       
      } from 'react-native';
      
import vegBg from './images/background.jpg';




class FarmerSignIn extends Component {

  render() {
    return (
      <ImageBackground source={vegBg} style= {styles.bgContainer}>
        <View>
          <SafeAreaView>

            {/* HEADER */}
            <View style = {styles.container}>
                <Text style = {styles.headText}> UNAGI </Text>     
            </View>

            {/* All 4 inputs  */}
            <View>
                <TextInput style= {styles.inputText} 
                placeholder={'Email'}
                placeholderTextColor={'#E59866'}/>
            </View>

            <View>
                <TextInput style= {styles.inputText} 
                placeholder={'Full name'}
                placeholderTextColor={'#E59866'}/>
            </View>

            <View>
                <TextInput style= {styles.inputText}
                placeholder={'Password'}
                secureTextEntry = {true}
                placeholderTextColor={'#E59866'}/>
            </View>

            <View>
                <TextInput style= {styles.inputText} 
                placeholder={'Company'}
                placeholderTextColor={'#E59866'} />
            </View>
        
            {/* SIGN UP BUTTON */}

            <TouchableOpacity style={styles.btnSignUp}> 
                <Text style={styles.btnText}> Sign in </Text>
            </TouchableOpacity>

            {/*  TEXT TO LOGIN */}
            <TouchableOpacity onPress = {() => {
                const {navigation} = this.props;
                navigation.navigate('UserLoginPage')
              }}>
              <Text  style={styles.loginText}> Have an account? Login </Text>
            </TouchableOpacity>
            
          </SafeAreaView> 
        </View>
      </ImageBackground> 
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center'
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
    flex:1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputText:{
    marginBottom: 20,
    height:45,
    borderBottomWidth: 1,
    borderBottomColor: '#E59866',
    fontSize: 18, 
    color: '#E59866',
    textAlignVertical: 'top',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 300
  },

  btnSignUp:{
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

  loginText: {
    color:'#E59866',
    textAlign:"center",
    fontFamily: "Avenir",
    marginBottom: 10,
    fontSize: 16 
  },
})

export default FarmerSignIn ;