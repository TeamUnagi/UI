
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TestTrending from './testTrending';
import TestTrending2 from './testTrending2'


function HomeScreen() {
  return (
    <TestTrending/>
    //So here TestTrending is getting displayed
  );
}
function HomeScreen2(){
  return (
    <TestTrending2/>
    //So here TestTrending2 is getting displayed
  );
}
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function MainTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{ 
          activeBackgroundColor:'black',
          activeTintColor: 'orange',
          inactiveTintColor: 'grey',
          activeBackgroundColor:'orange',
          style: { backgroundColor: 'black', padding:15},
                    
        }
        
        }>
        <Tab.Screen name="Trends" component={HomeScreen} />
        <Tab.Screen name="Trends2" component={HomeScreen2}/>
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}




