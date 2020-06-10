import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import FactorialComponent from './components/FactorialComponent';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import Footer from './components/Footer';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
         Component Based Application
      </Text>
      <FirstComponent/>
      <SecondComponent/>
      <FactorialComponent/>
      <Footer/>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
