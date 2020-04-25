import React, { Component } from 'react';

import { View,
         Text,
        StyleSheet,
        ScrollView  } from 'react-native';
import VegDescription from './VegDescription';

class VegContent extends Component {
 

  render() {
    return (
       
   


        <View style={styles.container}>
            <View style = {styles.header}>

                <Text style = {styles.heading}>Vegetetable name</Text>

            
            </View>

            <ScrollView>    
                <View>
            
                        <VegDescription/>
                        <VegDescription/>
                        <VegDescription/>
                        <VegDescription/>
                        <VegDescription/>

                </View>        

            </ScrollView>               


        </View>
  

    )
  }
}


const styles = StyleSheet.create({

container: {
        backgroundColor: 'white',
        flex: 1,
        
    },
   
heading: {
        color: 'orange',
        fontSize: 20,
        paddingTop:20,
        textAlign: 'center',
        marginHorizontal: 50,
        

    },
   
header: {
    backgroundColor: 'black',
    marginBottom: 10,
    paddingBottom: 30,
    borderRadius:10,
    
    }
})

export default VegContent;