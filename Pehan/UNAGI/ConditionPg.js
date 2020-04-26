import React, { Component } from 'react';

import { View,
         Text,
        StyleSheet,
        ScrollView  } from 'react-native';
import Condition from './Condition';
import UserInfo from './UserInfo';
import axios from 'axios';
class ConditionPg extends Component {
    constructor(props){
        super(props)
        this.change();
        this.state={
           vegetables:[{Vegetable:"Carrot"}]
        };
      }
      change(){
        const URL="http://10.0.2.2:4000/conditionFront"
        const table = async () => {
            try {
               return await axios.post(URL,{FarmerId:UserInfo.getId()})   
              } catch (error) {
                console.log(error)
              }
            }
            const setVegetables = async () => {
                const confirm = await table();
                console.log(confirm.data)
                this.setState({vegetables:confirm.data});
             }
             setVegetables();
      }
    
    render() {
        var returnedVegetables=[];
        if(this.state.vegetables.Vegetable=='No')
        {
            returnedVegetables.push(
            <View style={{flex: 1, alignItems: 'center',justifyContent: 'center',marginVertical:300,marginRight:20}}>
                <Text style = {styles.nameInfo}>No Vegetables to Display</Text>
            </View>
            )
        }
        else{
        for(var i=0;i<this.state.vegetables.length;i++)
        {
            returnedVegetables.push(
                <View key={i}>
                    <Condition VegName={this.state.vegetables[i].Vegetable} CondNumber = {i} Navigation = {this.props.navigation}/>
                </View>
            )
        }}
        return (

            
            <View style={styles.container}>
                <ScrollView> 
                    <View style = {styles.listContainer}> 
                        {returnedVegetables}
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

})


/*const styles = StyleSheet.create({

container: {
    backgroundColor: 'white',
    flex: 1,
        
},

listContainer:{
    shadowOpacity: 0.9,      
}
   

}) */

export default ConditionPg;