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
        const URL="" /* url not pressent (eg:http://10.0.2.2:4000/noticationFront) cause i don't know */
        const table = async () => {
            try {
               return await axios.post(URL,{FarmerId:UserInfo.getId()})   
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
        var returnEN=[];
        if(this.state.exponotifications.Id==0)
        {
            returnEN.push(
            <View style={{flex: 1, alignItems: 'center',justifyContent: 'center',marginVertical:300}}>
                <Text style = {styles.nameInfo}>No notifications right now</Text>
            </View>
            )
        }
        else{
        for(var i=0;i<this.state.exponotifications.length;i++)
        {
            returnEN.push(
                <View key={i}>
                    <ExpoNotification FinalName={this.state.exponotifications[i].Name} NotificNumber = {i} Id={this.state.exponotifications[i].Id } Navigation = {this.props.navigation} />
                </View>
            )
        }}
        return (
            <View>
                <View style = {styles.headContainer}>
                    <Text style = {styles.headText}> Notifications </Text>     
                </View>
                <View style={styles.container}>
                    <ScrollView> 
                        <View style = {styles.listContainer}> 
                            {returnEN}
                        </View>
                    </ScrollView>
                </View>
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
    backgroundColor: '#d2691e',
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