import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import ContractPage from './ContractCreatePage';

import { 
  View,
  StyleSheet,
  Modal,
  FlatList,
  TouchableHighlight,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';  
   

class Map extends Component {

  constructor() {
    super()
    this.mapMarkers = {
      markers: [{
        title: 'Lil Suresh',
        description: "Wooot",
        coordinates: {
          latitude: 7.1,
          longitude: 80.1
        },
      },
      {
        title: 'Montag',
        description: "Rooot",
        coordinates: {
          latitude: 7.3,
          longitude: 80.64
        },  
      }]
    },

    this.state = {
      show: false
    },

    this.farmerData = {
      farmers: [
        {name: 'Lil Suresh', key: '1'},
        {name: 'Big Suresh', key: '2'},
        {name: 'Not Suresh', key: '3'},
        {name: 'Yo Suresh', key: '4'},
        {name: 'Woot Suresh', key: '5'},
        {name: 'Root Suresh', key: '6'},
        {name: 'Soot Suresh', key: '7'},
        {name: 'Hoot Suresh', key: '8'},
        {name: 'Coot Suresh', key: '9'},
        {name: 'Noot Suresh', key: '10'},
      ]
    }
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
              coordinate={marker.coordinates} 
              title={marker.title}

              onPress={() => {
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

                data = {this.farmerData.farmers}
                renderItem = {({ item }) => (
                  <Text style = {styles.item}>{item.name}</Text>
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
    fontSize: 18,
    fontFamily: "Avenir",
    height: 50,
  },

}); 

export default Appster ;