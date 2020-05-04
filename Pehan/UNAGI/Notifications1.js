import React, { Component } from 'react';
import axios from 'axios';
import { View,
         Text, 
         StyleSheet ,
         ScrollView } from 'react-native';
import UserInfo from './UserInfo';
import Notification from './Notification';

class Notifications1 extends Component {
    constructor(props){
        super(props)
        this.change();
        this.state={
           notifications:[]
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
    
    render(navigation) {
        var returnV=[];
        if(this.state.notifications.Id==0)
        {
            returnV.push(
            <View style={{flex: 1, alignItems: 'center',justifyContent: 'center',marginVertical:300,marginRight:20}}>
                <Text style = {styles.nameInfo}>No new notifications</Text>
            </View>
            )
        }
        else{
        for(var i=0;i<this.state.notifications.length;i++)
        {
            returnV.push(
                <View key={i}>
                    <Notification FinalName={this.state.notifications[i].Name} NotificNumber = {i} Id={this.state.notifications[i].Id } Navigation = {this.props.navigation} />
                </View>
            )
        }}
        return (
            <View style={styles.container}>
                <ScrollView> 
                    <View style = {styles.listContainer}> 
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

export default Notifications1;