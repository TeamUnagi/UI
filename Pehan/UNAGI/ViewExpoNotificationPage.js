import React, { Component } from 'react';
import{ 
    View, 
    StyleSheet, 
    SafeAreaView, 
    Text,
    TouchableOpacity
} from 'react-native';
import axios from 'axios';
import ExpoNotificationID from './NotificationId'
import UserInfo from './UserInfo';
import ExpoNotificationId from './ExpoNotificationID';



class ViewExpoNotificationPage extends Component {
    constructor(props){
        super(props);
        this.change();
        this.state={
            contractInfo:[{Vegetable:"Carrot",Weight:400,Comment:"good",EndDate:"02/02/2020",Name:"Yeshan Santhush"}]
            };
      }

    change(){
        const URL="http://10.0.2.2:4000/AcceptedContractsDescriptions" /*no url */
        const info = async () => {
            try {
               console.log(ExpoNotificationId.getId()) 
               return await axios.post(URL,{ContractId:ExpoNotificationId.getId()})   
              } catch (error) {
                console.log(error)
              }
            }
            const setContractInfo = async () => {
                const confirm = await info();
               console.log(confirm.data)

                this.setState({contractInfo:confirm.data});
             }
             setContractInfo();
      }
      
    render() {  
        return (
            <View>
                <SafeAreaView>

                    <View style = {styles.header}>
                        <Text style = {styles.headText}> {this.state.contractInfo[0].Name} </Text>     
                    </View>

                    <View style = {styles.bgContainer}>

                        <Text style = {styles.exporterText}>Vegetable:{this.state.contractInfo[0].Vegetable}</Text>
                        <Text style = {styles.exporterText}>End Date:{this.state.contractInfo[0].EndDate}</Text>
                        <Text style = {styles.exporterText}>Weight:{this.state.contractInfo[0].Weight}KG</Text>
                        <Text style = {styles.exporterText}>Tel:{this.state.contractInfo[0].Number}</Text>

                        <View style = {styles.commentBackground}>
                            <Text style = {styles.commentText}>{this.state.contractInfo[0].Comment}</Text>
                        </View>


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

    exporterText: {
        paddingLeft: 25,
        fontSize: 20,
        marginTop: 5,
    },

    commentBackground: {
        alignSelf: "center",
        margin: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        height: '50%',
        width: '85%'
    },

    commentText: {
        fontSize: 20,
        margin: 10,
    },

    aText: {
        color: '#008000',
        fontSize: 20,
        fontFamily: "Futura",
        textAlign: 'center'
        
    },

    aContainer: {
        backgroundColor: '#ADFF2F', 
        width: 100, 
        alignSelf: "center",
        margin: 20, 
        paddingTop:15,
        paddingBottom: 15,
    }
}); 

export default ViewExpoNotificationPage;