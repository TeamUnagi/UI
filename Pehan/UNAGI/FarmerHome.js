import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ContractsPage from './ContractsPage'
import ConditionPg from './ConditionPg'
import Notifications1 from './Notifications1'

function ContractsScreen() {
  return (
      <ContractsPage/>
  );
}

function ConditionsScreen() {
  return (
    <ConditionPg/>
  );
}

function NotificationsScreen() {
  return (
    <Notifications1/>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{ 
          
          activeBackgroundColor:'black',
          activeTintColor: '#E59866',
          inactiveTintColor: '#E59866',
          activeBackgroundColor:'#E59866',

          labelStyle: {
            fontSize: 14,
            
            
          },
          
          style: { backgroundColor: 'black',borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15, paddingTop:25, paddingBottom:1,  },

          indicatorStyle: {
            backgroundColor: '#E59866', width:30, marginBottom:10, marginHorizontal:50
        }
                    
        }
        
        }>
        <Tab.Screen name="Contracts" component={ContractsScreen} />
        <Tab.Screen name="Conditions" component={ConditionsScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
