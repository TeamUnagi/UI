import React, { Component } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import UserInfo from './UserInfo';
import ExpoNotification from './ExpoNotification';

class ExpoNotificationList extends Component {

    constructor(props){
        super(props)
        this.change();
        this.state={
           exponotifications:[]
        };
      }

      change(){
        const URL="http://10.0.2.2:4000/AcceptedContracts"
        const table = async () => {
            try {
               return await axios.post(URL,{ExpoterId:UserInfo.getId()})  

              } catch (error) {
                console.log(error)
              }
            }
            const setTable = async () => {
                const confirm = await table();
                this.setState({exponotifications:confirm.data});
             }
             setTable();
      }
    
    render(navigation) {
        var notification=[];
        
        for(var i=0;i<this.state.exponotifications.length;i++)
        {
            console.log(this.state.exponotifications[i].Name)
            notification.push(
                <View key={i}>
                    <ExpoNotification FinalName={this.state.exponotifications[i].Name} NotificNumber = {i} Id={this.state.exponotifications[i].Id } Navigation = {this.props.navigation}/>
                </View>
            )
        }
        return (
            <View style={styles.container}>
            <ScrollView> 
                <View style = {styles.listContainer}> 
                    {notification}
                </View>
            </ScrollView>
        </View>
        )
    }
}


const styles = StyleSheet.create({
headContainer: {
    
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

container: {
        paddingTop:20,
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
    backgroundColor: '#E59866',
    borderRadius: 15,
    height:100,
    padding:20,
    marginTop:30,
    marginHorizontal:40
},
listContainer:{
    shadowOpacity: 0.9,      
}
})

export default ExpoNotificationList;