import React, { Component } from 'react';
import{ View, Text, StyleSheet, TextInput, Picker, TouchableOpacity, SafeAreaView } from 'react-native';



class ContractSendPage extends Component{
  constructor(){
    super();
    this.state={
      PickerValue:''  
    } 
    
  };
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
              <TextInput style= {styles.inputText} 
                placeholder={'To:'}
                placeholderTextColor={'black'} 
                 />
            </View>

            <View>
                <TextInput style= {styles.inputText} 
                placeholder={'From:'}
                placeholderTextColor={'black'} 
                 />
            </View>

            <View style={{marginBottom: 20, borderBottomWidth: 1,  borderBottomColor: 'black'}}>
                <Picker
                  style={{width:'100%'}}
                  selectedValue={this.state.PickerValue}
                  onValueChange={(itemValue,itemIndex) => this.setState({PickerValue 
                  :itemValue})}
                 >
                 
                   <Picker.Item label="Vegetable Chosen:" value="potato" />
                   <Picker.Item label="Potato" value="potato" />
                   <Picker.Item label="Beans" value="beans" />
                   <Picker.Item label="Carrots" value="carrots" />
                   <Picker.Item label="Cucumber" value="cucumber" />
                   <Picker.Item label="Beetroot" value="beetroot" />
                 </Picker>
            </View>

            <View>
                <TextInput style= {styles.inputText} 
                placeholder={'End Date:'}
                placeholderTextColor={'black'} 
                 />
            </View>

            <View>
              <TextInput style= {styles.inputText} 
                placeholder={'Weight:'}
                placeholderTextColor={'black'} 
                 />
            </View>

            <View>
                <TextInput style= {{borderWidth:1 , borderColor:'black', textAlignVertical: 'top', alignItems: 'center', justifyContent: 'center'}} 
                placeholder={'Comment:'}
                placeholderTextColor={'black'} 
                multiline={true}
                numberOfLines={5}
                 />
            </View>

            

            {/* SIGN UP BUTTON */}
            <TouchableOpacity style={styles.btnSignIn}> 
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
  
    
  
  })
export default ContractSendPage;  