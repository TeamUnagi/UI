import React, { Component } from 'react';
import{ 
    View, 
    StyleSheet, 
    SafeAreaView, 
    Text 
} from 'react-native';

class ViewConditionPage extends Component {

    constructor() {
        super()
        this.vegetable = "Potatoes"
        this.date = "05/2020";
        this.temp = 20;
        this.phLevel = 0;
        this.humidity = 0;
        this.water = "More";
        this.waterReq = 5;
        this.waterMessage = "";
    }

    render() {  

        if (this.water == "More") {
            this.waterMessage = "Add a lot more water than usual because temperature is really high."
        } else if (this.water == "Water") {
            this.waterMessage = "Add a bit more water be temperature is slightly higher."
        } else {
            this.waterMessage = "Add the usual amount of water."
        }

        return (
            <View>
                <SafeAreaView>

                    <View style = {styles.header}>
                        <Text style = {styles.headText}>{this.vegetable}</Text>     
                    </View>

                    <View style = {styles.bgContainer}>

                        <Text style = {styles.dateText}>{this.date}</Text>
                        <Text style = {styles.exporterText}>- Water Requirements / week: {this.waterReq} in</Text>
                        <Text style = {styles.waterText}>{this.waterMessage}</Text>
                        <Text style = {styles.exporterText}>- Temperature: {this.temp}°C</Text>
                        <Text style = {styles.exporterText}>- PH Level: {this.phLevel}</Text>
                        <Text style = {styles.exporterText}>- Humidity: {this.humidity}</Text>

                    </View>

                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    header: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
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
        backgroundColor: '#E59866',
        width: null,
        height: '82%',
        borderRadius: 20,
        margin:20
    },

    dateText: {
        textAlign: 'right',
        fontSize: 20,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 10,
        color: '#272727'
    },

    waterText: {
        paddingLeft: 40,
        fontSize: 17,
        marginTop: 5,
        color: '#272727'
    },

    exporterText: {
        paddingLeft: 25,
        fontSize: 20,
        marginTop: 10,
    },

    commentBackground: {
        alignSelf: "center",
        margin: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        height: '60%',
        width: '85%'
    },

    commentText: {
        fontSize: 20,
        margin: 10,
    }
}); 

export default ViewConditionPage;