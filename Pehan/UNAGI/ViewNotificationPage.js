import React, { Component } from 'react';
import{ 
    View, 
    StyleSheet, 
    SafeAreaView, 
    Text,
    TouchableOpacity
} from 'react-native';

class ViewNotificationPage extends Component {
    render() {  
        return (
            <View>
                <SafeAreaView>

                    <View style = {styles.header}>
                        <Text style = {styles.headText}> Lil Suresh's Contract </Text>     
                    </View>

                    <View style = {styles.bgContainer}>

                        <Text style = {styles.exporterText}>Exporter:           Lil Suresh</Text>
                        <Text style = {styles.exporterText}>Vegetable:        Tomatoes</Text>
                        <Text style = {styles.exporterText}>End Date:          05/05/2020</Text>
                        <Text style = {styles.exporterText}>Weight:              30,000 KGs</Text>
                        <Text style = {styles.exporterText}>Tel:                     (94) 76 324 1882</Text>

                        <View style = {styles.commentBackground}>
                            <Text style = {styles.commentText}>Ay man, need some veggies real quick.</Text>
                        </View>

                        <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>

                            <TouchableOpacity style={styles.acceptButton} onPress = {() => {}}>
                                <Text style = {styles.buttonText}>Accept</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.rejectButton} onPress = {() => {}}>
                                <Text style = {styles.buttonText}>Reject</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    header: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: 'center',
        backgroundColor: 'black',
        
    },
    
    headText: {
        paddingTop:10,
        paddingBottom: 10,
        color: '#E59866',
        fontSize: 25,
        fontFamily: "Futura",
        marginTop: 25,
    },

    bgContainer: {
        paddingTop:20,
        paddingBottom: 20,
        backgroundColor: '#E59866',
        width: null,
        height: '82%',
        borderRadius: 20,
        margin:20
    },

    exporterText: {
        paddingLeft: 25,
        fontSize: 20,
        marginTop: 5,
    },

    commentBackground: {
        alignSelf: "center",
        margin: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        height: '50%',
        width: '85%'
    },

    commentText: {
        fontSize: 20,
        margin: 10,
    },

    acceptButton: {
        marginRight: 5,
        borderRadius: 7,
        width: '30%',
        backgroundColor: "#000000",
        paddingVertical: 10
    },

    rejectButton: {
        marginLeft: 5,
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

export default ViewNotificationPage;