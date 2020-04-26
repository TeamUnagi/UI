import React, { Component } from 'react';

import { View,
         Text, 
         StyleSheet  } from 'react-native';
         import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import VegetableChosen from './VegetableChosen';

class Condition extends Component {

    static propTypes = {
        VegName: PropTypes.string.isRequired,
        CondNumber: PropTypes.number.isRequired,
    };  
    submit() {
        VegetableChosen.setName(this.props.VegName);
    }
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <TouchableOpacity style = {styles.Item} onPress={()=>{this.submit()}}>
                        <Text style = {styles.nameInfo}>{this.props.VegName}</Text>
                        <View style={styles.infoVal}>
                            <Text style={styles.info}>Tap to read the conditon for current month</Text>
                        </View>
                    </TouchableOpacity>
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

export default Condition;