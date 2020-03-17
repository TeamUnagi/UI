import React,{Component} from 'react';
import {View,Text,Button,StyleSheet,TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-native';
import Exporter from './exporterLogIn';
import Farmer from './farmerLogIn';

export default class App extends Component
{ 
  render()
  {
    return(
      <View style={styles.container}>
        <View style={{marginTop:100}}>
          <Text style={{fontSize:50,textAlign:"center",lineHeight:0}}>UNAGI</Text>
        </View>
        <View style={{marginTop:100}} >
          <TouchableOpacity style={style.buttoncontainer} onPress = {() => this.props.naviation.navigate('Exporter')} >
            <Text style={style.buttontext}>Exporter</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop:20}}>
          <TouchableOpacity style={style.buttoncontainer} onPress = {() => this.props.naviation.navigate('Farmer')} >
            <Text style={style.buttontext}>Farmer</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.registercontainer}>
          <Text style={{color:'darkgray'}}>If you don't have a account </Text>
          <Button
            title="'Sign In'"
            color="black"
            onPress = {() => this.props.naviation.navigate('Register')}
          />
        </View>
      </View>
    )
  }
}

export default class App extends Component{
  render(){
    return(
      <AppStackNavigator/>
    );
  }
}

const AppStackNavigator = createStackNavigator ({
  Register : RegisterPage,
  Exporter: exporterLogIn,
  Farmer: farmerLogIn
})

const style= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ffa477',
    justifyContent: 'center',
    alignItems:'stretch'
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

  registercontainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-end',
    backgroundColor:'rgba(192, 192, 192, 1.0)',
    borderWidth:1
  }

})

