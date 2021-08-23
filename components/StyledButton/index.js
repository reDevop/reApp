import React from 'react';
import {View,Pressable,Text, TouchableOpacity} from 'react-native';
import styles from './styles';
//import {useState} from 'react';

const VoButton = ()=>{
  
    
    return(
        
        <View style={styles.container}>
           <TouchableOpacity 
           style={styles.button} //onPress={()=>{
            //this._onPress()}
         
          > 
         <Text style={styles.text}>Custom Order</Text>

         </TouchableOpacity >
        </View>
    );
       
};
export default VoButton;