import React from 'react';

import { View , Text, StyleSheet,  ScrollView, Dimensions , TouchableOpacity, Image  } from 'react-native';
import SlidingPanel from 'react-native-sliding-up-down-panels';

import Veg from './vegetable';
import Ham from './ham.jpeg'
import SwipeVegetable from './swipeVegetable';

const { width, height } = Dimensions.get('window');


class testTrending extends React.Component {

    render(navigation) {
        

        return (
              
            <View style={styles.container}>
                <View style = {styles.header}>

                <TouchableOpacity onPress = {() => {
                    const {navigation} = this.props;
                    navigation.openDrawer('SideBar')
              }}>
                        <Image
                            source={Ham}
                            style={{ position: 'relative' , width: 40, height: 40, top:10, }}
                        />


        </TouchableOpacity>


                    <Text style = {styles.heading}>Trending</Text>

                    
                </View>
                

                <ScrollView>    
                <View style = {styles.vegContainer}>    
                
                    <Veg/>
                    <Veg/>
                    <Veg/>
                    <Veg/>
                    <Veg/>
                      
            </View>
            </ScrollView>

        
            <SlidingPanel
                headerLayoutHeight = {100}
                headerLayout = { () =>
                <View style={styles.headerLayoutStyle}>
                  <Text style={styles.commonTextStyle}>Swipe up to see all vegetables</Text>
                </View>
                }
                slidingPanelLayout = { () =>
                <View style={styles.slidingPanelLayoutStyle}>
                     <View style = {styles.swipeVegContainer}>    
                
                        <SwipeVegetable/>
                        <SwipeVegetable/>
                        <SwipeVegetable/>
                        <SwipeVegetable/>
                        <SwipeVegetable/>
                
                </View>
            </View>
                }
            />

            
        </View> 
    
            
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        
    },

    header: {
        backgroundColor: 'black',
        marginBottom: 10,
        
    },

    heading: {
        color: 'orange',
        fontSize: 20,
        paddingTop:20,
        textAlign: 'center',
        marginHorizontal: 50,

    },

    vegContainer:{
        
        shadowOpacity: 0.9,      

    },

    
      headerLayoutStyle: {
        position:'relative',  
        backgroundColor: 'orange', 
        width, 
        height: 70, 
        justifyContent: 'center', 
        alignItems: 'center',
        top: 50
        
        
      },
      slidingPanelLayoutStyle: {
        width, 
        height, 
        backgroundColor: 'grey', 
        alignItems: 'center',
        opacity: 0.9
        
      },
      commonTextStyle: {
        color: 'black', 
        fontSize: 14,
      }, 
      
      swipeVegContainer:{
        
        paddingTop:5,
        shadowOpacity: 0.3,      

    },

    navContainer: {
        width:170,
        backgroundColor: 'black'
    }

    
    

    

    

   
})



export default testTrending;
