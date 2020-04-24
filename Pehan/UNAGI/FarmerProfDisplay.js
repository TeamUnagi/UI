import React, { Component } from 'react';
import axios from 'axios'
import{ View,Text, StyleSheet, ImageBackground, SafeAreaView, TextInput, TouchableOpacity, } from 'react-native';
import vegBg from './images/background.jpg';
import UserProfile from './ExporterInfo';
import FarmerChosen from './FarmerChosen';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
class FarmerProfDisplay extends Component {
<<<<<<< HEAD
  constructor(props){
      super(props)
      this.change();
      this.state={
         Name:"",
         Email:"",
         Number:"",
         FarmerId:0,
         Description:"",
         exporterName:{}
      };
    }
    change(){
    const URL="http://10.0.2.2:4000/FarmerProfDisplay"
      const farmerId={farmerId:FarmerChosen.getId()}
      const getFarmerInfo = async () => {
      try {
        return await axios.post(URL,farmerId)
        } catch (error) {
          console.error(error)
        }
=======
    constructor(props){
        super(props)
        this.change();
        this.state={
           Name:"",
           Email:"",
           Number:"",
           FarmerId:0,
           Description:"",
           exporterName:{}
        };
      }
      change(){
      const URL="http://10.0.2.2:4000/FarmerProfDisplay"
        const farmerId={farmerId:FarmerChosen.getId()}
        const getFarmerInfo = async () => {
        try {
          return await axios.post(URL,farmerId)
          } catch (error) {
            console.error(error)
          }
        }
        const getloginconfirm = async () => {
        const confirm = await getFarmerInfo()
        this.setState({Name:confirm.data.row1[0].Fullname})
        this.setState({Email:confirm.data.row1[0].Email})
        this.setState({Number:confirm.data.row1[0].Number})
        this.setState({Description:confirm.data.row1[0].Description})
        this.setState({exporterName:confirm.data.row2})
         }
        getloginconfirm();}
      render(){
        var contracts=[];
        if(this.state.exporterName=='No')
        {
          contracts.push(
            <Text style={styles.pContract}>No previous contracts</Text>
          )
        }
        else{
          contracts.push( <Text style={styles.pContract}>Previous Contracts </Text>)
        for (let i=0;i<this.state.exporterName.length;i++){
          contracts.push(
            <View key={i}>
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>Name of the exporter: {this.state.exporterName[i].Name}</Text>
              <Text style={styles.itemText2}>Vegetable: {this.state.exporterName[i].Vegetable}</Text>
              <Text style={styles.itemText2}>Weight in kgs: {this.state.exporterName[i].Weight}</Text>
            </View>
            </View>
          )
        }}
          return(
            <ImageBackground source={vegBg} style= {styles.bgContainer}>
                <SafeAreaView>
                    <View styles={styles.mainContainer}>
                        <View style = {styles.nameContainer}>
                            <Text style = {styles.headName} >{this.state.Name} </Text>     
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.details}> {this.state.Name} </Text>
                            <Text style={styles.details}> {this.state.Email} </Text>
                            <Text style={styles.details}> {this.state.Number} </Text>
                            <Text style={styles.detailsD}> {this.state.Description} </Text>
                            <ScrollView>
                              {contracts} 
                            </ScrollView>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.btnSignIn}> 
                      <Text style={styles.btnText}> Create contract </Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </ImageBackground>
          )
>>>>>>> 0a1c81da47843c8d277d364f8826a48b8922ccdd
      }
      const getloginconfirm = async () => {
      const confirm = await getFarmerInfo()
      this.setState({Name:confirm.data.row1[0].Fullname})
      this.setState({Email:confirm.data.row1[0].Email})
      this.setState({Number:confirm.data.row1[0].Number})
      this.setState({Description:confirm.data.row1[0].Description})
      this.setState({exporterName:confirm.data.row2})
       }
      getloginconfirm();}
    render(){
      var contracts=[];
      if(this.state.exporterName=='No')
      {
        contracts.push(
          <Text style={styles.pContract}>No previous contracts</Text>
        )
      }
      else{
        contracts.push( <Text style={styles.pContract}>Previous Contracts </Text>)
      for (let i=0;i<this.state.exporterName.length;i++){
        contracts.push(
          <View key={i}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Name of the exporter: {this.state.exporterName[i].Name}</Text>
            <Text style={styles.itemText2}>Vegetable: {this.state.exporterName[i].Vegetable}</Text>
            <Text style={styles.itemText2}>Weight in kgs: {this.state.exporterName[i].Weight}</Text>
          </View>
          </View>
        )
      }}
        return(
          <ImageBackground source={vegBg} style= {styles.bgContainer}>
              <SafeAreaView>
                  <View styles={styles.mainContainer}>
                      <View style = {styles.nameContainer}>
                          <Text style = {styles.headName} >{this.state.Name} </Text>     
                      </View>
                      <View style={styles.container}>
                          <Text style={styles.details}> {this.state.Name} </Text>
                          <Text style={styles.details}> {this.state.Email} </Text>
                          <Text style={styles.details}> {this.state.Number} </Text>
                          <Text style={styles.detailsD}> {this.state.Description} </Text>
                          <ScrollView>
                            {contracts} 
                          </ScrollView>
                      </View>
                  </View>
                  <TouchableOpacity style={styles.btnSignIn}> 
                    <Text style={styles.btnText}> Create contract </Text>
                  </TouchableOpacity>
              </SafeAreaView>
          </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
  bgContainer: {
      flex: 1,
      width: null,
      height: null,
      alignItems: 'center',
      justifyContent: 'center'
    },
    nameContainer:{
      width:430,
      height: 140,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical:-75,
      backgroundColor: '#141414',
      borderRadius:60,
    },
    headName:{
      paddingTop:100,
      paddingBottom: 50,
      color: '#E59866',
      fontSize: 25,
      fontFamily: "Futura",
      marginTop: 10
  },
  container:{
      width:330,
      height: 540,
      alignItems: 'center',
      marginVertical:105,
      marginLeft:50,
      backgroundColor: '#E59866',
      borderRadius:20,
  },
  details:{
  marginVertical:25,
  height:30,
  fontSize:20, 
  borderBottomWidth: 1,
  borderBottomColor: '#141414',
  color: '#141414',
  alignSelf: 'center',
  justifyContent: 'center',
  width:300
  },
  detailsD:{
      paddingBottom:-20,
      marginVertical:20,
      height:55,
      fontSize:20, 
      borderBottomWidth: 1,
      borderBottomColor: '#141414',
      color: '#141414',
      alignSelf: 'center',
      justifyContent: 'center',
      width:300
  },
  itemContainer:{
      width:250,
      height: 100,
      alignItems: 'center',
      marginVertical:10,
      marginLeft:10,
      backgroundColor: '#E58666',
  },
  itemText:{
      marginVertical:5,
      height:35,
      fontSize:14, 
      color: '#141414',
      alignSelf: 'center',
      justifyContent: 'center',
      width:200
  },
<<<<<<< HEAD
  itemText2:{
    marginVertical:5,
    height:18,
    fontSize:14, 
    color: '#141414',
    alignSelf: 'center',
    justifyContent: 'center',
    width:200
},
  pContract:{
      height:25,
      fontSize:20, 
      borderBottomWidth: 1,
      borderBottomColor: '#141414',
      color: '#141414',
      alignSelf: 'center',
=======
    pContract:{
        height:25,
        fontSize:20, 
        borderBottomWidth: 1,
        borderBottomColor: '#141414',
        color: '#141414',
        alignSelf: 'center',
        justifyContent: 'center',
        width:200
    },
    btnSignIn:{
      
      alignSelf: 'flex-end',
      height:45,
      borderRadius: 25,
      backgroundColor: '#000000',
>>>>>>> 0a1c81da47843c8d277d364f8826a48b8922ccdd
      justifyContent: 'center',
      width:200
  },
  btnSignIn:{
    
    alignSelf: 'flex-end',
    height:45,
    borderRadius: 25,
    backgroundColor: '#000000',
    justifyContent: 'center',
    width: 130,
    marginTop:-65,
    marginRight:30
  },

  btnText:{
    color: '#E59866',
    fontSize: 15,
    fontFamily: "Futura",
    textAlign: 'center'
  }
})
export default FarmerProfDisplay;