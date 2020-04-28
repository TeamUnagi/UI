import React, { Component } from 'react';
import{ 
    View, 
    StyleSheet, 
    SafeAreaView, 
    Text 
} from 'react-native';
import axios from 'axios';
import Contractid from './ContractId'

class ViewContractPage extends Component {

    constructor(props){
        super(props);
        this.change();
        this.state={
            contractInfo:[{name:'Yeshan',vegetable:'Carrot',endDate:'03/03/2020',weight:'300',comment:'Freshly packaged.'}]
            };
      }

      change(){
        const URL="http://10.0.2.2:4000/sendContractInfoToFarmer"
        const info = async () => {
            try {
               return await axios.post(URL,{contractId:Contractid.getId()})   
              } catch (error) {
                console.log(error)
              }
            }
            const setContractInfo = async () => {
                const confirm = await info();
                console.log('came here')
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
                        <Text style = {styles.headText}> {this.state.contractInfo[0].name} </Text>     
                    </View>

                    <View style = {styles.bgContainer}>

                        <Text style = {styles.exporterText}>Exporter:   {this.state.contractInfo[0].name}</Text>
                        <Text style = {styles.exporterText}>Vegetable:  {this.state.contractInfo[0].vegetable}</Text>
                        <Text style = {styles.exporterText}>End Date:   {this.state.contractInfo[0].endDate}</Text>
                        <Text style = {styles.exporterText}>Weight:     {this.state.contractInfo[0].weight}KG</Text>

                        <View style = {styles.commentBackground}>
                            <Text style = {styles.commentText}> {this.state.contractInfo[0].comment}</Text>
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
        height: '60%',
        width: '85%'
    },

    commentText: {
        fontSize: 20,
        margin: 10,
    }
}); 

export default ViewContractPage;