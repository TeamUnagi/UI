import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import ContractPage from './FarmerProfDisplay';
import VegetableChosen from './VegetableChosen';
import ContractPage from './ContractSendPage';
import FarmerProfilePage from './FarmerProfDisplay';

import { 
  View,
  StyleSheet,
  Modal,
  FlatList,
} from 'react-native';  
import { TouchableOpacity } from 'react-native-gesture-handler';
import FarmerChosen from './FarmerChosen'

class Map extends Component {

  constructor() {
    super()
    this.changeFarmer();
    this.mapMarkers = {
      markers: [{
        location: "kandy",
        latitude: 7.1,
        longitude: 80.1
      },
      {
        location: "Katugastota",
        latitude: 7.3,
        longitude: 80.64  
      }]
    },
    this.state = {
      show: false,
      Location:"Kandy",
      farmers: []
    }
  }
  changeFarmer(){
    const URL="http://10.0.2.2:4000/MapTable"
        const table = async () => {
            try {
              var loc={Location:"Kandy"}
               return await axios.post(URL,loc)   
              } catch (error) {
                console.log(error)
              }
            }
            const setTable = async () => {
                const confirm = await table();
                this.setState({farmers:confirm.data});
                console.log(this.state.farmers)
             }
             setTable();
  }

  render(){

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
          {this.mapMarkers.markers.map((marker, index) => ( 
            <MapView.Marker
              key={index}
              coordinate={marker} 

              onPress = {() => {
                console.log(marker.location)
                this.setState({show: true})
              }}>
            
            </MapView.Marker>
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
                renderItem = {({ item}) => (
                  <TouchableOpacity style = {styles.item} onPress={()=>
                    {
                      FarmerChosen.setId(item.id);
                      FarmerChosen.setName(item.name);
                     //Once clicked here go to FarmerProfDisplay 
                    }
                  }><Text>{item.Name}</Text></TouchableOpacity>
                )}
              />
            </View>
          </View>
        </Modal>
      </View>   
    )
  }
}

const Stack = createStackNavigator();

const Appster = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="MapPage" component={Map} options={{ headerShown: false }}/>
          <Stack.Screen name="FarmerProfilePage" component={FarmerProfilePage} options={{ headerShown: false }}/>
          <Stack.Screen name="ContractPage" component={ContractPage} options={{ headerShown: false }}/>

        </Stack.Navigator>
    </NavigationContainer>
  );
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
    backgroundColor: '#FFFFFF',
    flex: 1,
    marginVertical: 100,
    marginHorizontal: 40,
    paddingVertical: 50,
    paddingHorizontal: 15,
    borderRadius: 30,
  },

  item: {
    backgroundColor: '#CB7D7D',
    textAlignVertical: "center",
    paddingLeft: 5,
    width: '100%',
    marginBottom: 3,
    fontSize: 18,
    height: 40,
  },

}); 

export default Appster ;