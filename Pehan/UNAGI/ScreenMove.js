
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TestTrending from './testTrending';



function HomeScreen() {
  return (
    <TestTrending/>
    //So here TestTrending is getting displayed
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
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}




