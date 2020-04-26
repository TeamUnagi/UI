import React, { Component } from 'react';
import{ 
    View, 
    StyleSheet, 
    SafeAreaView, 
    Text,
    TouchableOpacity
} from 'react-native';
import axios from 'axios';
import NotificationId from './NotificationId'

class ViewNotificationPage extends Component {
    constructor(props){
        super(props);
        this.change();
        this.state={
            contractInfo:[{Vegetable:"Carrot",Weight:400,Comment:"good",EndDate:"02/02/2020",Number:"9477706314",Name:"Yeshan Santhush"}]
            };
      }

    change(){
        const URL="http://10.0.2.2:4000/notificationBack"
        const info = async () => {
            try {
               console.log(NotificationId.getId()) 
               return await axios.post(URL,{Contractid:NotificationId.getId()})   
              } catch (error) {
                console.log(error)
              }
            }
            const setContractInfo = async () => {
                const confirm = await info();
                this.setState({contractInfo:confirm.data});
             }
             setContractInfo();
      }
      accept(res)
      {
        const URL="http://10.0.2.2:4000/Accept"
        axios.post(URL,{Contractid:NotificationId.getId(),Res:res})
        alert('Done')
        const {navigation} = this.props;
              navigation.navigate('FarmerHomePage')
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

                        <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>

                            <TouchableOpacity style={styles.acceptButton} onPress = {() => {this.accept("Yes")}}>
                                <Text style = {styles.buttonText}>Accept</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.rejectButton} onPress = {() => {this.accept("No")}}>
                                <Text style = {styles.buttonText}>Reject</Text>
                            </TouchableOpacity>
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

    acceptButton: {
        marginRight: 5,
        borderRadius: 7,
        width: '30%',
        backgroundColor: "#000000",
        paddingVertical: 10
    },

    rejectButton: {
        marginLeft: 5,
        borderRadius: 7,
        width: '30%',
        backgroundColor: "#000000",
        paddingVertical: 10
    },

    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF'
    }
}); 

export default ViewNotificationPage;