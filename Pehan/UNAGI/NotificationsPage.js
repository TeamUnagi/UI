import React, { Component } from 'react';

import { View,
         Text,
        StyleSheet,
        ScrollView  } from 'react-native';
import Notifications1 from './Notifications1';

class NotificationsPage extends Component {
 

  render() {
    return (
        <View style={styles.container}>
            <ScrollView>    
            <View style = {styles.listContainer}> 
                <Notifications1/>
                <Notifications1/>
                <Notifications1/>
                <Notifications1/>
                <Notifications1/>
                <Notifications1/>
                <Notifications1/>
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

listContainer:{
    shadowOpacity: 0.9,      
}
   

})

export default NotificationsPage;