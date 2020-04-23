import React, { Component } from 'react';
import axios from 'axios'
import{ View, 
        Text,
        StyleSheet,
        ImageBackground,
        TextInput,
        TouchableOpacity,
        SafeAreaView,
        ScrollView
      } from 'react-native';
import vegBg from './images/background.jpg';
import FarmerChoosingLoc from './FarmerChoosingLoc';
class FarmerSignMore extends Component {
    constructor(props){
      super(props)
      this.change();
      this.state={
        Description:"",
        Number:"",
        Location:FarmerChoosingLoc.getLoc(),
        Username:FarmerChoosingLoc.getName(),
        Vegetables:[]
       };
    }
    change(){    
      const URL="http://10.0.2.2:4000/LocationVegetables"
      const farmerloc={Location:FarmerChoosingLoc.getLoc()}
      const Veges = async () => {
          try {
             return await axios.post(URL,farmerloc)   
            } catch (error) {
              console.log(error)
            }
          }
          const getVegetable = async () => {
              const confirm = await Veges();
              this.setState({Vegetables:confirm.data});
           }
           getVegetable();
  }
    render() {
      var restVegetables=[];    
        for (let i=0;i<this.state.Vegetables.length;i++){
          if(i%2==0){
            restVegetables.push(
            <View key={i}> 
               <View style={styles.VTopacity} >
                      <Text style={styles.VTtext}>{this.state.Vegetables[i].Vegetable}</Text>
              </View>
            </View>
          )}
          else{
            restVegetables.push(
              <View key={i}> 
                 <View style={styles.VTOopacity} >
                        <Text style={styles.VTtext}>{this.state.Vegetables[i].Vegetable}</Text>
                </View>
              </View>
            )
          }
        }
        return (
          <ImageBackground source={vegBg} style= {styles.bgContainer}>
            <View>
              <SafeAreaView>
    
                {/* HEADER */}
                <View style = {styles.container}>
                    <Text style = {styles.headText}> More Sign Up </Text>     
                </View>
    
                {/* All 4 inputs  */}
                <View>
                    <TextInput style= {styles.inputText} 
                    placeholder={"Description"}
                    placeholderTextColor={'#E59866'}
                    onChangeText={text=>{this.setState({Description:text})}}/>
                </View>
    
                <View>
                    <TextInput style= {styles.inputText} 
                    placeholder={"Contact Number"}
                    placeholderTextColor={'#E59866'}
                    onChangeText={text=>{this.setState({Number:text})}}/>
                </View>
                <View>
                      <Text style={styles.restV}>Vegetables suggested</Text>
                      {restVegetables}
                </View>
                {/* SIGN UP BUTTON */}
    
                <TouchableOpacity style={styles.btnSignUp} onPress={()=>{
                  const URL="http://10.0.2.2:4000/updateFarmerData"
                  console.log("done")
                  const descNo={Number:this.state.Number,Description:this.state.Description,Username:this.state.Username}
                  const update = async () => {
          try {
             return await axios.post(URL,descNo)   
            } catch (error) {
              console.log(error)
            }
          }
          const sendDescno = async () => {
            const confirm = await update();
            console.log("came here")
           }
           sendDescno();
    }}> 
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
      VTopacity:
      {
        alignSelf: 'center',
         padding: 9,
        backgroundColor: '#141414',
        borderRadius: 25,
        marginLeft:-140,
      },
      VTOopacity:
      {
        alignSelf: 'center',
         padding: 9,
        backgroundColor: '#141414',
        borderRadius: 25,
        marginVertical:-20,
        marginLeft:60
      },
      restV:{
        color:'#E59866',
        textAlign:"center",
        fontFamily: "Avenir",
        fontSize: 16 ,
        padding:12
      },
      VTtext:
      {
        color:'#E59866',
        textAlign:"center",
        fontFamily: "Avenir",
        fontSize: 16 
      }
    })
export default FarmerSignMore  ;