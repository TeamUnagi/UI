import React, { Component } from 'react';
import axios from 'axios';
import { View,
         Text, 
         StyleSheet ,
         ScrollView } from 'react-native';
import UserInfo from './UserInfo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NotificationId from './NotificationId'

class Notifications1 extends Component {
    constructor(props){
        super(props)
        this.change();
        this.state={
           notifications:[{Name:"dhanush",Id:0,Key:1}]
        };
      }
      change(){
        const URL="http://10.0.2.2:4000/noticationFront"
        const table = async () => {
            try {
               return await axios.post(URL,{FarmerId:UserInfo.getId()})   
              } catch (error) {
                console.log(error)
              }
            }
            const setTable = async () => {
                const confirm = await table();
                this.setState({notifications:confirm.data});
             }
             setTable();
      }
      set(i)
      {
          console.log(i)
          console.log(this.state.notifications)
          //NotificationId.setId(this.state.notifications[i].Id)
      }
    render() {
        var returnV=[];
        if(this.state.notifications.Id==0)
        {
            <View style={{flex: 1, alignItems: 'center',justifyContent: 'center',marginVertical:300,marginRight:20}}>
                <Text style = {styles.nameInfo}>No new notifications</Text>
            </View>
        }
        else{
        for(var i=0;i<this.state.notifications.length;i++)
        {
            returnV.push(
                <View>
                <View style={styles.container}>
                    <TouchableOpacity style = {styles.Item} onPress={()=>{this.set(this.state.notifications[returnV.length-1].Id)}}>
                        <Text style = {styles.nameInfo}>New Contract From {this.state.notifications[i].Name}</Text>
                        <View style={styles.infoVal}>
                            <Text style={styles.info}>Tap to view!</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View> 
            )
        }}
        return (
            <View style={styles.container}>
                <ScrollView> 
                    <View style = {styles.listContainer}> 
                        {this.state.notifications.map((value, index)=>{/*
                            <View key={index}>
                            <View style={styles.container}>
                                <TouchableOpacity style = {styles.Item} onPress={()=>{this.set(i)}}>
                                    <Text style = {styles.nameInfo}>New Contract From {this.state.notifications[index].Name}</Text>
                                    <View style={styles.infoVal}>
                                        <Text style={styles.info}>Tap to view!</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View> 
                        */})}
                        {returnV}
                    </View>
                </ScrollView>
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
listContainer:{
    shadowOpacity: 0.9,      
}
})

export default Notifications1;