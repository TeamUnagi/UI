import React from 'react';
import PropTypes from 'prop-types';

import { View , Text, StyleSheet, TouchableOpacity } from 'react-native';

class Notification extends React.Component {
    static propTypes = {
        FinalName: PropTypes.string.isRequired,
        NotificNumber: PropTypes.number.isRequired,
    };  
    set(i)
      {
          console.log(i)
          //console.log(this.state.notifications)
          //NotificationId.setId(this.state.notifications[i].Id)
      }

    render() {
        return (
            
        <View  style={styles.container}>
        <TouchableOpacity style = {styles.Item} onPress={()=>{this.set(this.props.NotificNumber)}}>
                        <Text style = {styles.nameInfo}>{this.props.NotificNumber + 1}  New Contract From {this.props.FinalName}</Text>
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
    backgroundColor: '#d2691e',
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
