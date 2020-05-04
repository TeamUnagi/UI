import React, { Component }  from 'react';
import axios from 'axios';
import VegetableInfo from './VegetableInfo';

import { View , Text, StyleSheet,  ScrollView, Dimensions , TouchableOpacity, Image  } from 'react-native';
import SlidingPanel from 'react-native-sliding-up-down-panels';

import Veg from './vegetable';
import SwipeVegetable from './swipeVegetable';

const { width, height } = Dimensions.get('window');


class testTrending extends Component {

    constructor(props){
        super(props)
        this.state={
           vegetableInfo:VegetableInfo.getName(),
        };
      }
      componentDidMount(){    
        const URL="http://10.0.2.2:4000/VegetableImports"
        const trends = async () => {
            try {
               return await axios.post(URL)   
              } catch (error) {
                console.log(error)
              }
            }
            const getVegetableData = async () => {
                const confirm = await trends();
                this.setState({vegetableInfo:confirm.data});
             }
    
             getVegetableData();
    }
        render(navigation) {  
        var topFiveVegetables=[];    
        for (let i=0;i<5;i++){
            topFiveVegetables.push(
            <View key={i}> 
               <Veg vegetableName={this.state.vegetableInfo[i].Vegetable} trendNumber={"#" + (i+1)}  importValue={this.state.vegetableInfo[i].Import} importPercentage = {this.state.vegetableInfo[i].Percentage} navigation = {this.props.navigation}/>
            </View>
          )
        }  

        var restVegetables=[];    
        for (let i=5;i<this.state.vegetableInfo.length;i++){
            restVegetables.push(
            <View key={i}> 
               <SwipeVegetable vegetableName={this.state.vegetableInfo[i].Vegetable} trendNumber={"#" + (i+1)}  importValue={this.state.vegetableInfo[i].Import} importPercentage = {this.state.vegetableInfo[i].Percentage} navigation = {this.props.navigation}/>
            </View>
          )
        }  
        return (  
            <View style={styles.container}>
            
                

                <ScrollView>    
                <View style = {styles.vegContainer}>    

                    <ScrollView>
                        {topFiveVegetables}
                    </ScrollView>
                    
                      
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
                     <ScrollView>
                     {restVegetables}
                     </ScrollView>
 
                
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
        backgroundColor: '#d2691e', 
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