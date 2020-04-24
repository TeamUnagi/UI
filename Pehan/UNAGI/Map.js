import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import axios from 'axios';
import VegetableChosen from './VegetableChosen'
<<<<<<< HEAD

import ContractPage from './ContractSendPage';
import FarmerProfilePage from './FarmerProfDisplay';

=======
>>>>>>> 0a1c81da47843c8d277d364f8826a48b8922ccdd
import { 
  View,
  StyleSheet,
  Modal,
  Text,
  FlatList,
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
          provider = {PROVIDER_GOOGLE} // remove if not using Google Maps
          style = {styles.map}

          initialRegion = {{
            latitude: 8.2,
            longitude: 80.7,
            latitudeDelta: 3.7,
            longitudeDelta: 3.2,
          }}
        >

          {/* Uncomment this whole thing */}
          {/* {mapMarkers.map((marker, index) => (

          <MapView.Marker
          key={index}
          coordinate={marker}

          onPress = {() => {
            console.log(marker.location)
            this.changeFarmer(marker.location);
            this.setState({show: true})
          }}/>
          ))} */}

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
        </View>

        <Modal transparent = {true} visible = {this.state.show}>
          <View style = {styles.popupBackground}>
            <View style = {styles.popup}>
              <FlatList

                data = {this.state.farmers}
                renderItem = {({item}) => (
                  <Text onPress = {() => {
                    FarmerChosen.setId(item.ID);
                    FarmerChosen.setName(item.Name);
                    const {navigation} = this.props;
                    this.setState({show: false})
                    navigation.navigate('FarmerProfilePage')

                  }}>{item.Name}</Text>
                )}
              />
            </View>
          </View>
        </Modal>
      </View>   
    )
  }
}

/*const Stack = createStackNavigator();

const Appster = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="FarmerProfilePage" component={FarmerProfilePage} options={{ headerShown: false }}/>

        </Stack.Navigator>
    </NavigationContainer>
  );
} */

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
    backgroundColor: '#FFFFFF',
    flex: 1,
    marginVertical: 100,
    marginHorizontal: 40,
    paddingVertical: 50,
    paddingHorizontal: 15,
    borderRadius: 30,
  },

  item: {
    borderBottomColor: '#707070',
    textAlignVertical: "center",
    paddingLeft: 5,
    width: '100%',
    marginBottom: 3,
    fontSize: 18,
    height: 40,
  },

}); 

export default Map;