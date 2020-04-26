import React, { Component } from 'react';
import{ 
    View, 
    StyleSheet, 
    SafeAreaView, 
    Text 
} from 'react-native';
import VegetableChosen from './VegetableChosen'
import UserInfo from './UserInfo';
import FarmerChosen from './FarmerChosen';
import axios from 'axios';
class ViewConditionPage extends Component {

    constructor() {
        super()
        this.change();
        this.state={
            vegetable:VegetableChosen.getName(),
            date :"05/2020",
            temp : 20,
            phLevel : 0,
            humidity : 0,
            water : "More",
            waterReq : 5,
            waterMessage :  ""
        }
    }
    change(){
        const URL="http://10.0.2.2:4000/conditionBack"
        const table = async () => {
            try {
               return await axios.post(URL,{FarmerId:UserInfo.getId(),Vegetable:VegetableChosen.getName()})   
              } catch (error) {
                console.log(error)
              }
            }
            const setTable = async () => {
                const confirm = await table();
                console.log(confirm.data)
                this.setState({date:confirm.data.Date,temp:confirm.data.Temp,phLevel:confirm.data.phLevel,water:confirm.data.water,waterReq:confirm.data.WaterReq,humidity:confirm.data.Humidity})
                if (this.state.water == "More") {
                    this.setState({waterMessage:"Add a lot more water than usual because temperature is really high."})
                } else if (this.state.water == "Water") {
                    this.setState({waterMessage:"Add a bit more water be temperature is slightly higher"})
                } else {
                    this.setState({waterMessage:"Add the usual amount of water."})
                }
             }
             setTable();
      }
    render() {  
        return (
            <View>
                <SafeAreaView>

                    <View style = {styles.header}>
                        <Text style = {styles.headText}>{this.state.vegetable}</Text>     
                    </View>

                    <View style = {styles.bgContainer}>

                        <Text style = {styles.dateText}>{this.state.date}</Text>
                        <Text style = {styles.exporterText}>- Water Requirements / week: {this.state.waterReq} inch</Text>
                        <Text style = {styles.waterText}>{this.state.waterMessage}</Text>
                        <Text style = {styles.exporterText}>- Temperature: {this.state.temp}°C</Text>
                        <Text style = {styles.exporterText}>- PH Level: {this.state.phLevel}</Text>
                        <Text style = {styles.exporterText}>- Humidity: {this.state.humidity}</Text>

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