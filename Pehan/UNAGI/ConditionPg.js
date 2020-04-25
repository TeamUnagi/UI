import React, { Component } from 'react';

import { View,
         Text,
        StyleSheet,
        ScrollView  } from 'react-native';
import Condition from './Condition';

class ConditionPg extends Component {
 

  render() {
    return (
        <View style={styles.container}>
            <ScrollView>    
            <View style = {styles.listContainer}> 
                <Condition/>
                <Condition/>
                <Condition/>
                <Condition/>
                <Condition/>
                <Condition/>
                <Condition/>
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

export default ConditionPg;