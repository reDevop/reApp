import React from 'react';
import {View,ImageBackground,Text} from 'react-native';
import VoButton from '../StyledButton';
import styles from './styles';

const Caritem = ()=>{
    return(
        <View style={styles.carContainer}>
          <ImageBackground source={{ uri: 'https://r1.ilikewallpaper.net/iphone-12-pro-pro-max-wallpapers/download-115940/tesla-model-x.jpg'}}
          style={styles.img} />
          <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}> Starting at $69,999 </Text>
          </View> 
          <VoButton/>
        </View> 
    );
};

export default Caritem;