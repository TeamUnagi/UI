import React, { Component } from 'react';
import{ View, Text, StyleSheet, TextInput, Picker, TouchableOpacity, SafeAreaView } from 'react-native';



class ContractCreatePage extends Component{
  constructor(){
    super();
    this.mapMarkers={
      PickerValue:''  
    } 
    
  };
  render() {  
    return (
      <View>
      <View style = {styles.container}>
                <Text style = {styles.headText}> User Name </Text>     
            </View>
      

        <View style= {styles.bgContainer}>
          
          <SafeAreaView>

            {/* HEADER */}
            
          
            {/* All 4 inputs  */}
            <View>
              <TextInput style= {styles.inputText} 
                placeholder={'User Name:'}
                placeholderTextColor={'black'} 
                 />
            </View>

            <View>
                <TextInput style= {styles.inputText} 
                placeholder={'Email:'}
                placeholderTextColor={'black'} 
                 />
            </View>

            <View>
                <TextInput style= {styles.inputText} 
                placeholder={'Phone Number:'}
                placeholderTextColor={'black'} 
                 />
            </View>

            

            <View>
                <TextInput style= {styles.inputText} 
                placeholder={'Company Name:'}
                placeholderTextColor={'black'} 
                 />
            </View>

            

            <View style= {styles.comment}  >
                <Text style={styles.inputText2}> Previous Contract </Text>
                <View>
                    <TextInput style= {styles.inputText3} 
                    placeholder={''}
                    placeholderTextColor={'black'} 
                    />
                </View>
                <View>
                    <TextInput style= {styles.inputText3} 
                    placeholder={''}
                    placeholderTextColor={'black'} 
                    />
                </View>
                <View>
                    <TextInput style= {styles.inputText3} 
                    placeholder={''}
                    placeholderTextColor={'black'} 
                    />
                </View>
                <View>
                    <TextInput style= {styles.inputText3} 
                    placeholder={''}
                    placeholderTextColor={'black'} 
                    />
                </View>
                <View>
                    <TextInput style= {styles.inputText3} 
                    placeholder={''}
                    placeholderTextColor={'black'} 
                    />
                </View>
            </View>

            

            {/* Send contract BUTTON */}
            <TouchableOpacity style={styles.btnSignIn}> 
                <Text style={styles.btnText}> Create contract </Text>
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
      height: 630,
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
    
    inputText2:{
        marginBottom: 20,
        fontSize: 15, 
        color: 'black',
        alignSelf: 'center',
        justifyContent: 'center',
        
      },

    inputText3:{
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        height:36,
        fontSize: 14, 
        color: 'black',
        textAlignVertical: 'top',
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
        width: 225
     },

    btnSignIn:{
      
      alignSelf: 'flex-end',
      height:35,
      borderRadius: 25,
      backgroundColor: '#000000',
      justifyContent: 'center',
      width: 130,
      marginTop: 30
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
      justifyContent: 'center'
    }
    
  
  })
export default ContractCreatePage;  