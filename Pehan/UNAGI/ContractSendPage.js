import React, { Component } from 'react';
import axios from 'axios';
import{ View, Text, StyleSheet, TextInput, Picker, TouchableOpacity, SafeAreaView } from 'react-native';
import FarmerChosen from './FarmerChosen'
import UserInfo from './UserInfo'
import VegetableChosen from './VegetableChosen'


class ContractSendPage extends Component{
  constructor(){
    super();
    this.change();
    this.state={
      To:FarmerChosen.getName(),
      From:UserInfo.getName(),
      VegetableChosen:VegetableChosen.getName(),
      EndDate:"",
      Weight:0,
      Comment:"",
      ExId:UserInfo.getId(),
      FarmerId:FarmerChosen.getId(),
      success:''
    };
  } 
  change(){
    const URL="http://10.0.2.2:4000/ContractPage"
    const contract = async () => {
        try {
           return await axios.post(URL,this.state)   
          } catch (error) {
            console.log(error)
          }
        }
        const sendContract = async () => {
            const confirm = await contract();
            if(confirm.data=='success')
            {
              alert("Successfully sent contract")
              const {navigation} = this.props;
              navigation.navigate('ScreenMove')
            }
         }
         sendContract();
  }
  render() {  
    return (
      <View>
      <View style = {styles.container}>
                <Text style = {styles.headText}> Contract </Text>     
            </View>
      

        <View style= {styles.bgContainer}>
          
          <SafeAreaView>

            {/* HEADER */}
            
          
            {/* All 4 inputs  */}
            <View>
            <Text style= {styles.inputText}>To : {this.state.To}</Text>
            </View>
            <View>
                <Text style= {styles.inputText}>From : {this.state.From}</Text>
            </View>

            <View>
                <Text style= {styles.inputText}>VegetableChosen: {this.state.VegetableChosen}</Text>
            </View>
          

            <View>
                <TextInput style= {styles.inputText} 
                placeholder={'End Date:'}
                placeholderTextColor={'black'} 
                onChangeText={text=>{this.setState({EndDate:text});}}
                 />
            </View>

            <View>
              <TextInput style= {styles.inputText} 
                placeholder={'Weight:'}
                placeholderTextColor={'black'} 
                onChangeText={text=>{this.setState({Weight:text});}}
                 />
            </View>

            <View>
                <TextInput style= {styles.comment}  
                placeholder={'Comment:'}
                placeholderTextColor={'black'} 
                multiline={true}
                numberOfLines={5}
                onChangeText={text=>{this.setState({Comment:text});}}
                 />
            </View>

            

            {/* Send contract BUTTON */}
            <TouchableOpacity style={styles.btnSignIn} onPress={()=>{this.change()}}> 
                <Text style={styles.btnText}> Send contract </Text>
            </TouchableOpacity>

          </SafeAreaView>
        </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({

    container: {
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      alignItems: 'center',
      backgroundColor: 'black',
      
    },
  
    headText: {
      paddingTop:10,
      paddingBottom: 10,
      color: '#E59866',
      fontSize: 25,
      fontFamily: "Futura",
      marginTop: 25,
    },
  
    bgContainer: {
    
      paddingTop:20,
      paddingBottom: 20,
      backgroundColor: '#d2691e',
      width: null,
      height: 600,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      margin:20
    },
  
    inputText:{
      marginBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      height:45,
      fontSize: 15, 
      color: 'black',
      textAlignVertical: 'top',
      alignSelf: 'center',
      justifyContent: 'center',
      width: 300
    },
  
    btnSignIn:{
      
      alignSelf: 'flex-end',
      height:35,
      borderRadius: 25,
      backgroundColor: '#000000',
      justifyContent: 'center',
      width: 130,
      marginTop: 100
    },
  
    btnText:{
      color: '#E59866',
      fontSize: 15,
      fontFamily: "Futura",
      textAlign: 'center'
    },
    
    comment:{
      borderWidth:1 , 
      borderColor:'black', 
      textAlignVertical: 'top', 
      alignItems: 'center', 
      justifyContent: 'center',
      width:300
    }
    
  
  })
export default ContractSendPage;