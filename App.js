import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  ImageBackground,
  View,
} from 'react-native';
import Caritem from './components/Caritem';

const App = ()=> {
  return (
  <View style={styles.container}>
  <Caritem/>
  </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  
});


export default App;
