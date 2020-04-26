import React, { Component } from 'react';
import axios from 'axios';
import { View,
         Text, 
         StyleSheet ,
         ScrollView } from 'react-native';
import UserInfo from './UserInfo';
import ContractsPage from './ContractsPage';


class Contracts1 extends Component {
    constructor(props){
        super(props)
        this.change();
        this.state={
           contracts:[]
        };
      }
      change(){
        const URL="http://10.0.2.2:4000/sendExporterContracts"
        console.log("came here")
        console.log(UserInfo.getId())
        const table = async () => {
            try {
               return await axios.post(URL,{FarmerId:UserInfo.getId()})   
              } catch (error) {
                console.log(error)
              }
            }
            const setTable = async () => {
                const confirm = await table();
                console.log(confirm.data)
                this.setState({contracts:confirm.data});
             }
             setTable();
      }
    
    render() {
        var returnV=[];
        if(this.state.contracts.contractId==0)
        {
            returnV.push(
            <View style={{flex: 1, alignItems: 'center',justifyContent: 'center',marginVertical:300,marginRight:20}}>
                <Text style = {styles.nameInfo}>No contracts to display</Text>
            </View>
            )
        }
        else{
        for(var i=0;i<this.state.contracts.length;i++)
        {
            returnV.push(
                <View key={i}>
                    <ContractsPage FinalName={this.state.contracts[i].Name} FinalVegetable={this.state.contracts[i].Vegetables} Id={this.state.contracts[i].contractId} />
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

export default Contracts1;