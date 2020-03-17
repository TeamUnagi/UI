import React,{Component} from 'react';
import {View,Text,Button,StyleSheet,TouchableOpacity, TextInput} from 'react-native';
import {createStackNavigator} from 'react-native';

export default class farmerLogIn extends Component{
    render(){
        return(
            <View style= {styles.container}>
                <View style = {style.textfields}>
                <View style={{marginTop:100}}>
                    <Text style={{fontSize:50,textAlign:"center",lineHeight:0}}>UNAGI</Text>
                </View>
                    <TextInput style={styles.input}>
                        placholder="Email"
                        returnKeyType="next"
                        onSubmitEditing = {()=> this.passwordInput.forcus()}
                        keyboardType="email-address"
                        autoCapasity="none"
                        autoCorrect={false}
                    </TextInput>
                    <TextInput style={styles.input}>
                        placholder="Password"
                        returnKeyType="go"
                        secureTextEntry
                        ref ={(input)=>this.passwordInput=input}
                    </TextInput>
                    <TouchableOpacity style= {styles.buttoncontainer} onPress = {() => this.props.navigation.navigate('ExporterHome')}>
                        <Text style={styles.buttontext}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    } 
}

const style= StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#ffa477',
      justifyContent: 'center',
      alignItems:'stretch'
    },

    input:{
        borderWidth:0.5,
        borderBottomColor:'black' 
    },
  
    buttoncontainer:{
      height: 50,
      borderRadius: 50,
      backgroundColor:'coral',
      paddingVertical:10,
      justifyContent:'center'
    },
  
    buttontext:{
      textAlign:'center',
      color:'black',
      fontSize:20
    },    
})