import React from 'react';
import PropTypes from 'prop-types';

import { View , Text, StyleSheet, TouchableOpacity } from 'react-native';
import NotificationId from './NotificationId';

class Notification extends React.Component {
    static propTypes = {
        FinalName: PropTypes.string.isRequired,
        NotificNumber: PropTypes.number.isRequired,
        Id:PropTypes.number.isRequired,
        Navigation:PropTypes.string.isRequired,
    };  
    set(i)
      {
          NotificationId.setId(i)
          console.log(NotificationId.getId())
          const { navigate } = this.props.Navigation;
          navigate('ViewNotificationPage') 
      }

    render() {
        return (
            
        <View  style={styles.container}>
        <TouchableOpacity style = {styles.Item} onPress={this.set.bind(this,this.props.Id)}>
                        <Text style = {styles.nameInfo}>New Contract From {this.props.FinalName}</Text>
                        <View style={styles.infoVal}>
                            <Text style={styles.info}>Tap to view!</Text>
                        </View>
        </TouchableOpacity>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        
},
infoVal:{
    
    flexDirection: 'row',
    paddingTop:1,
    paddingLeft: 20
},

nameInfo: {
    position: 'relative',
    bottom:10,
    color: 'black',
    fontSize: 16,
    paddingLeft: 20,
    paddingTop:7
    
},

Ninfo:{
    position: 'relative',
    left:0,
    fontSize: 14,
    textAlign: 'left',
    flexWrap: 'wrap',
},

Item:{
    shadowOpacity:0.5,
    backgroundColor: '#E59866',
    borderRadius: 15,
    height:100,
    padding:20,
    marginTop:30,
    marginHorizontal:40
},
listContainer:{
    shadowOpacity: 0.9,      
}
   
})

export default Notification;
