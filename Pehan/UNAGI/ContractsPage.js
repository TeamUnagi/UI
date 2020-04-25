import React, { Component } from 'react';

import { View,
         Text,
        StyleSheet,
        ScrollView  } from 'react-native';
import Contracts1 from './Contracts1';

class ContractsPage extends Component {
 

  render() {
    return (
        <View style={styles.container}>
            <ScrollView>    
            <View style = {styles.listContainer}> 
                <Contracts1/>
                <Contracts1/>
                <Contracts1/>
                <Contracts1/>
                <Contracts1/>
                <Contracts1/>
                <Contracts1/>
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

listContainer:{
    shadowOpacity: 0.9,      
}
   

})

export default ContractsPage;