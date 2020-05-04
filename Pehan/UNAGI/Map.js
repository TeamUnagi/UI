import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import axios from 'axios';
import VegetableChosen from './VegetableChosen'


import { 
  View,
  StyleSheet,
  Modal,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';  
import FarmerChosen from './FarmerChosen'

// Get the locations file

class Map extends Component {

  constructor() {
    super()
    this.locationData = require('./Locations.json');
    this.state = {
      show: false,
      farmers: [],
      Locations:[{Location:'kandy'}]

    }
  }
  UNSAFE_componentWillMount(){
    const URL="http://10.0.2.2:4000/sendFarmerLocations"
    const Vegetable = async () => {
        try {
           return await axios.post(URL,{Vegetable:VegetableChosen.getName()})   
          } catch (error) {
            console.log(error)
          }
        }
        const getVegetable = async () => {
            const confirm = await Vegetable();
            this.setState({Locations:confirm.data})
         }
         getVegetable();
  }
  changeFarmer(name){
    const URL="http://10.0.2.2:4000/MapTable"
        const table = async () => {
            try {
               return await axios.post(URL,{Location:name})   
              } catch (error) {
                console.log(error)
              }
            }
            const setTable = async () => {
                const confirm = await table();
                this.setState({farmers:confirm.data});
                this.setState({show: true})
             }
             setTable();
  }
  render(){
    var mapMarkers = [];
    for(var j=0;j<this.state.Locations.length;j++){

    for(var i = 0; i < this.locationData.length; i++) {
      var location = this.locationData[i].location;
      // UserselectedLocation will be the location the user selectes in the previos page
      if (this.state.Locations[j].Location == location) {
        mapMarkers.push(this.locationData[i])
      }
    }
  }
    return(  
      <View style={styles.container}>

        <MapView
          provider = {PROVIDER_GOOGLE}
          style = {styles.map}

          initialRegion = {{
            latitude: 8.2,
            longitude: 80.7,
            latitudeDelta: 3.7,
            longitudeDelta: 3.2,
          }}
        >

          {mapMarkers.map((marker, index) => (

            <MapView.Marker
            key={index}
            coordinate={marker}

            onPress = {() => {
              this.changeFarmer(marker.location);
            }}/>
          ))}
        </MapView>

        {/* Create the header */}
        <View style = {styles.header}>
            <Text style = {styles.headName}>Choose Farmer</Text>
        </View>

        <Modal transparent = {true} visible = {this.state.show}>
          <View style = {styles.popupBackground}>
            <View style = {styles.popup}>
              <FlatList

                data = {this.state.farmers}
                renderItem = {({item}) => 
                  <Text style = {styles.tableViewItem} 
                  onPress = {() => {
                    FarmerChosen.setId(item.ID);
                    FarmerChosen.setName(item.Name);

                    const {navigation} = this.props;
                    this.setState({show: false})
                    navigation.navigate('FarmerProfilePage')

                  }}>{item.Name}</Text>
                }
              />

                  <TouchableOpacity style={styles.acceptButton} onPress = {() => {
                    this.setState({show: false})}}>

                    <Text style = {styles.buttonText}>Cancel</Text>
                  </TouchableOpacity>

            </View>
          </View>
        </Modal>
      </View>   
    )
  }
}

const styles = StyleSheet.create({

  container: {
    height: '100%',
  },

  header: {
    backgroundColor: '#000000',
    width: '100%',
    height: '15%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },

  popupBackground: {
    backgroundColor: '#000000aa',
    flex: 1,
  },

  popup: {
    backgroundColor: '#E59866',
    flex: 1,
    marginVertical: 100,
    marginHorizontal: 40,
    paddingTop: 40,
    paddingBottom: 30,
    paddingHorizontal: 15,
    borderRadius: 30,
  },

  tableViewItem: {
    color: '#000000',
    borderBottomWidth: 2,
    borderBottomColor: '#707070',
    textAlignVertical: "center",
    paddingLeft: 5,
    width: '100%',
    marginBottom: 3,
    fontSize: 18,
    height: 40,
  },

  headName:{
    paddingTop:40,
    marginLeft:130,
    color: '#E59866',
    fontSize: 25,
    fontFamily: "Futura",
    marginTop: 10
  },

  acceptButton: {
    marginTop: 5,
    alignSelf: 'flex-end',
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

export default Map;