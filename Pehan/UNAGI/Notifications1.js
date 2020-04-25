import React, { Component } from 'react';

import { View,
         Text, 
         StyleSheet  } from 'react-native';


class Notifications1 extends Component {
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style = {styles.Item}>
                        <Text style = {styles.nameInfo}>Contract Name</Text>
                        <View style={styles.infoVal}>
                            <Text style={styles.info}>New contract from </Text>
                            <Text style={styles.Ninfo}>Contract Name</Text>
                        </View>
                        <View style={styles.infoVal}>
                            <Text style={styles.info}>Tap to view!</Text>
                        </View>
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
infoVal:{
    
    flexDirection: 'row',
    paddingTop:1,
    paddingLeft: 20
},

nameInfo: {
    position: 'relative',
    bottom:10,
    color: 'black',
    fontSize: 16,
    paddingLeft: 20,
    paddingTop:7
    
},

Ninfo:{
    position: 'relative',
    left:0,
    fontSize: 14,
    textAlign: 'left',
    flexWrap: 'wrap',
},

Item:{
    shadowOpacity:0.5,
    backgroundColor: '#d2691e',
    borderRadius: 15,
    height:100,
    padding:20,
    marginTop:30,
    marginHorizontal:40
},

})

export default Notifications1;