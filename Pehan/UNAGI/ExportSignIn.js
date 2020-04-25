import React, { Component } from 'react';
import axios from 'axios'
import{ View, 
        Text,
        StyleSheet,
        ImageBackground,
        TextInput,
        TouchableOpacity,
        SafeAreaView
       
      } from 'react-native';
      
import vegBg from './images/background.jpg';

class ExporterSignIn extends Component {
  constructor(props){
    super(props)
    this.state={
        Username:'',
        Fullname:'',
        Email:'',
        Password:'',
        Company:'',
        Number:'',
        success:''
    };
  }
submit=() => {
  if(Object.keys(this.state.Username).length==0){
    alert("Please enter your Username")
    this.setState({success:"notsuccess"})
  }
  if(Object.keys(this.state.Fullname).length==0){
    alert("Please enter your Fullname")
    this.setState({success:"notsuccess"})
  }
  if(Object.keys(this.state.Email).length==0){
    alert("Please enter your Email")
    this.setState({success:"notsuccess"})
  }
  if(Object.keys(this.state.Company).length==0){
    alert("Please enter your Company")
    this.setState({success:"notsuccess"})
  }
  if(Object.keys(this.state.Password).length==0){
    alert("Please enter your Password")
    this.setState({success:"notsuccess"})
  }
  if(Object.keys(this.state.Number).length==0){
    alert("Please enter your Number")
    this.setState({success:"notsuccess"})
  }
  if(Object.keys(this.state.success).length==0){
    const URL="http://10.0.2.2:4000/exportersigninuserinfo"
    const exporterconfirm = async () => {
      try {
        return await axios.post(URL,this.state)
        } catch (error) {
          console.error(error)
        }
      }
      const getexporterconfirm = async () => {
      const confirm = await exporterconfirm()
    
       if (confirm.data.message=="success") {
          alert("Successfully added")
         }
      else if(confirm.data.message=="user"){
        alert("This Username is already in used")
      }
      else
      {alert("There is already a user with this email")}
       }
      getexporterconfirm();
  }
}
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
                placeholderTextColor={'#E59866'} 
                onChangeText={text=>{this.setState({Email:text});this.setState({success:''})}}/>
            </View>

            <View>
                <TextInput style= {styles.inputText} 
                placeholder={'Full name'}
                placeholderTextColor={'#E59866'} 
                onChangeText={text=>{this.setState({Fullname:text});this.setState({success:''})}}
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
            <View>
                <TextInput style= {styles.inputText}
                placeholder={'Contact Number'}
                secureTextEntry = {true}
                placeholderTextColor={'#E59866'} 
                onChangeText={text=>{this.setState({Number:text});this.setState({success:''})}}
                 />
            </View>
            
            <View>
                <TextInput style= {styles.inputText} 
                placeholder={'Username'}
                placeholderTextColor={'#E59866'}
                onChangeText={text=>{this.setState({Username:text});this.setState({success:''})}}
                />

            </View>

            <View>
                <TextInput style= {styles.inputText} 
                placeholder={'Company'}
                placeholderTextColor={'#E59866'} 
                onChangeText={text=>{this.setState({Company:text});this.setState({success:''})}}

                 />
            </View>

            {/* SIGN UP BUTTON */}
            <TouchableOpacity style={styles.btnSignIn} onPress={this.submit}> 
                <Text style={styles.btnText}> Sign Up </Text>
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
    borderBottomWidth: 1,
    borderBottomColor: '#E59866',
    height:45,
    fontSize: 18, 
    color: '#E59866',
    textAlignVertical: 'top',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 300
  },

  btnSignIn:{
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

export default ExporterSignIn ;