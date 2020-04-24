import React from 'react';
import PropTypes from 'prop-types';

import { View , Text, StyleSheet, TouchableOpacity } from 'react-native';

import VegetableChosen from './VegetableChosen'

class swipeVegetable extends React.Component {
    static propTypes = {
        vegetableName: PropTypes.string.isRequired,
        trendNumber: PropTypes.string.isRequired,
        importValue: PropTypes.number.isRequired,
        importPercentage: PropTypes.number.isRequired,
        navigation: PropTypes.string.isRequired,
    };  
    submit(name) {
        VegetableChosen.setName(name);

        console.log(VegetableChosen.getName());
        const { navigate } = this.props.navigation;
        navigate('MapPage') 

    }

    render() {
        
        return (
        
     
        <View  style = {styles.Vegetable}>
        <TouchableOpacity onPress={this.submit.bind(this, this.props.vegetableName)}>      
           <Text style = {styles.vegInfo}>
            {this.props.vegetableName}       
            </Text>

           
            <View style={styles.infoVal}>
                <Text style={styles.infoNumber1}>{this.props.importPercentage}</Text>
                <Text style={styles.infoNumber2}>{this.props.importValue}</Text>
               
                <Text style={styles.infoNumber3}>{this.props.trendNumber}</Text>

            </View>

            <View style={styles.infoBox}>

                <Text style={styles.info}>Percentage</Text>
                <Text style={styles.info}>Imports</Text>
               
                <Text style={styles.infoTrend}>Trending</Text>

            </View>
        
            </TouchableOpacity>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    vegInfo: {
        position: 'relative',
        bottom:10,
        color: 'black',
        fontSize: 20,
        

    },

    Vegetable:{
        shadowOpacity:0.5,
        backgroundColor: 'orange',
        borderRadius: 10,
        height:100,
        padding:10,
        margin:15,
        
        

        //shadowColor: '#000',
        //shadowOffset: { width: 0, height: 2 },
        //shadowOpacity: 0.8,
        //shadowRadius: 10,
        
        
    },

    image:{
        width:30,
        height:40,
        borderRadius:20
    },

    infoBox:{
    flexDirection: 'row',
    paddingLeft: 20
    },



    infoVal:{
        
        flexDirection: 'row',
        paddingTop:4,
        paddingLeft: 40
    },

    info:{
        
        marginVertical: -3,
        marginHorizontal:33,
        fontSize: 12,
        textAlign: 'center'
    },

    infoTrend:{
        
        marginVertical: -22,
        marginHorizontal:35,
        fontSize: 15,
        textAlign: 'center'
    },

    infoNumber1:{
        position: 'relative',
        left:30,
        fontSize: 12,
        textAlign: 'center'
    },

    infoNumber2:{
        position: 'relative',
        left:120,
        fontSize: 12,
        textAlign: 'center'
    },
 

    infoNumber3:{
        position: 'relative',
        top:-23,
        left:205,
        fontSize: 20,
        fontFamily: 'bold'
    }

   
})

export default swipeVegetable;
