import React from 'react';
import PropTypes from 'prop-types';

import { View , Text, StyleSheet, Image  } from 'react-native';

import pic from './potato.jpeg'

class swipeVegetable extends React.Component {


    render() {
        
        return (
        
        <View style = {styles.Vegetable}>
           
           <Text style = {styles.vegInfo}>
            <Image style={styles.image} source={pic}/>
            Vegetable Name        
            </Text>

           
            <View style={styles.infoVal}>
            <Text style={styles.infoNumber1}>20</Text>
                <Text style={styles.infoNumber2}>30</Text>
                <Text style={styles.infoNumber3}>#1</Text>

            </View>

            <View style={styles.infoBox}>

                <Text style={styles.info}>Production</Text>
                <Text style={styles.info}>Imports</Text>
                <Text style={styles.infoTrend}>Trending</Text>

            </View>
        
        
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
        width: 400,
        height:100,
        padding:10,
        margin:15,
        
        

        //shadowColor: '#000',
        //shadowOffset: { width: 0, height: 2 },
        //shadowOpacity: 0.8,
        //shadowRadius: 10,
        
        
    },

    image:{
        width:40,
        height:40,
        borderRadius:20
    },

    infoBox:{
    flexDirection: 'row',
    paddingLeft: 20
    },

infoTrend:{
        
        marginVertical: -25,
        marginHorizontal:35,
        fontSize: 15,
        textAlign: 'center'
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
        
        marginVertical: -25,
        marginHorizontal:35,
        fontSize: 15,
        textAlign: 'center'
    },

    infoNumber1:{
        position: 'relative',
        left:38,
        fontSize: 12,
        textAlign: 'center'
    },

    infoNumber2:{
        position: 'relative',
        left:137,
        fontSize: 12,
        textAlign: 'center'
    },
 

    infoNumber3:{
        position: 'relative',
        top:-25,
        left:240,
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'bold'
    }

    

   
})

export default swipeVegetable;
