import * as React from 'react';
import {TouchableOpacity,TextInput, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
         Login Screen
         
      </Text>
      <TextInput style={{height:40, borderColor:'black', borderWidth: 1,textAlign:'center',alignItems:'flex-end' }}  placeholder='UserID'/>
      <TextInput style={{height:40, borderColor:'black', borderWidth: 1,textAlign:'center' }}secureTextEntry={true} placeholder='Password'/>
      <TouchableOpacity>
      <Text style={{height:40, borderColor:'black', borderWidth: 1,backgroundColor:'darkolivegreen',textAlign:'center' }}
      >Login</Text>
      </TouchableOpacity>
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
