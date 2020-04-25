import React, { Component } from 'react';
import axios from 'axios'
import{ View,Text, StyleSheet, ImageBackground, SafeAreaView, TextInput, TouchableOpacity, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import vegBg from './images/background.jpg';
import UserInfo from './UserInfo';
import TestTrending from './testTrending';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



class UserLogin extends Component {
  constructor(props){
    super(props)
    this.state={
        Username:'',
        Password:'',
        success:''
    };
  }
  submit=() => {
    if(Object.keys(this.state.Username).length==0){
      alert("Please enter your Username")
      this.setState({success:"notsuccess"})
    }
    if(Object.keys(this.state.Password).length==0){
      alert("Please enter your Password")
      this.setState({success:"notsuccess"})
    }
    if(Object.keys(this.state.success).length==0){
      const URL="http://10.0.2.2:4000/userLogin"
      const loginconfirm = async () => {
        try {
          return await axios.post(URL,this.state)
          } catch (error) {
            console.error(error)
          }
        }
        const getloginconfirm = async () => {
        const confirm = await loginconfirm()
      
         if (confirm.data.message=="success") {
            alert("Successfully logged in")
            UserInfo.setName(confirm.data.name);
            UserInfo.setId(confirm.data.id);  
            if(confirm.data.category=="Exporter"){
              const {navigation} = this.props;
              navigation.navigate('ScreenMove')
              //Should go to ScreenMove.js
            }else{}
           }
        else{alert("The username does not exist or password does not match the username")}
         }
        getloginconfirm();
    }
  }
  render(navigation) {  
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
                placeholder={'Username'}
                placeholderTextColor={'#E59866'} 
                onChangeText={text=>{this.setState({Username:text});this.setState({success:''})}}
                />
            </View>
            
            <View>
                <TextInput style= {styles.inputText}
                placeholder={'Password'}
                secureTextEntry = {true}
                placeholderTextColor={'#E59866'}
                onChangeText={text=>{this.setState({Password:text});this.setState({success:''})}}
                 />
            </View>
      
            {/* SIGN IN BUTTON */}
            <TouchableOpacity style={styles.btnLogin} onPress={this.submit}> 
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
