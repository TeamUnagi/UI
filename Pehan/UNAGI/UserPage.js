import React,{Component} from 'react';
import {View,
        Text,
        Button,
        StyleSheet,
        TouchableOpacity} from 'react-native';


 class userPage extends Component{ 
  render()
  {
    return(
      <View style={styles.container}>
        <View style={{marginTop:100}}>
          <Text style={{fontSize:50,textAlign:"center",lineHeight:0}}>UNAGI</Text>
        </View>
        <View style={{marginTop:100}} >
          <TouchableOpacity style={styles.buttoncontainer}  >
            <Text style={styles.buttontext}>Exporter</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop:20}}>
          <TouchableOpacity style={styles.buttoncontainer} >
            <Text style={styles.buttontext}>Farmer</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.registercontainer}>
          <Text style={{color:'darkgray'}}>If you don't have a account </Text>
          <Button
            title="'Sign In'"
            color="black"
          
          />
        </View>
      </View>
    )
  }
}


const styles= StyleSheet.create({
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

export default userPage; 

