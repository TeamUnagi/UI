import React, { Component } from 'react';

import { View,
         Text, 
         StyleSheet  } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';


class VegDescription extends Component {
 

  render() {
    return (
       
    <View>


        <View style={styles.container}>
           
        

            <View style = {styles.Vegetable}>
           
                <Text style = {styles.vegInfo}>
                        - The (vegetabel) needs more watering and grown in lower temperature
                </Text>
            


 
           </View>

        </View>
     </View> 

    )
  }
}


const styles = StyleSheet.create({

container: {
        backgroundColor: 'white',
        flex: 1,
        
    },


    vegInfo: {
        position: 'relative',
        bottom:10,
        color: 'black',
        fontSize: 20,
    
        

    },
    
    info:{
        position: 'relative',
        left:0,
        fontSize: 15,
        textAlign: 'left',
        flexWrap: 'wrap',
    },

    Vegetable:{
       
        height:100,
        padding:10,
        margin:15,
        
      
    },

})

export default VegDescription;