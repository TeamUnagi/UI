
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import{ View, Text, SafeAreaView, StyleSheet, ImageBackground, TextInput, TouchableOpacity, } from 'react-native';
import vegBg from './images/background.jpg';

import ExporterSignIn from './ExportSignIn';
import FarmerSignIn from './FarmerSignIn';
import LoginPage from './UserLogIn';

class UserPage extends Component {
  render(navigation) {  
    return (

      <ImageBackground source={vegBg} style= {styles.bgContainer}>

        <View>
          {/* To make everything apprear inside the safe area */}
          <SafeAreaView>

            {/* HEADER */}
            <View style = {styles.container}>
                <Text style = {styles.headText}> UNAGI </Text>     
            </View>
          
            {/* SIGN UP BUTTON */}
            <TouchableOpacity style = {styles.button} onPress = {() => {
                const {navigation} = this.props;
                navigation.navigate('ExporterSignUpPage')
              }}> 
                <Text style={styles.btnText}> Exporter </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress = {() => {
                const {navigation} = this.props;
                navigation.navigate('FarmerSignUpPage')
              }}> 
                <Text style={styles.btnText}> Farmer </Text>
            </TouchableOpacity>

            {/*  BUTTON TO LOGIN */}
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

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="Home" component={UserPage} />
          <Stack.Screen name="ExporterSignUpPage" component={ExporterSignIn} />
          <Stack.Screen name="FarmerSignUpPage" component={FarmerSignIn} />
          <Stack.Screen name="UserLoginPage" component={LoginPage} />

        </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center'
  },

  headText:{
    paddingTop:100,
    paddingBottom: 50,
    color: '#E59866',
    fontSize: 30,
    fontFamily: "Futura",
    marginTop: 10,
  },

  bgContainer:{
    height: null,
    width: null,
    alignItems: 'center',
  },

  button:{
    height:55,
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
      marginTop: 40,
      fontFamily: "Avenir",
      marginBottom: 10,
      fontSize: 16 
  }
})

export default App;