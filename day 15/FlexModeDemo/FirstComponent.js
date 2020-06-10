import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
export default function FirstComponent() {
  return (
    <View>
    <View style={styles.textcontainer}>
    <Text style={styles.text1}> First Component</Text>
    </View>
    <View style={styles.container1}>
    <View style={styles.box1}></View>
    <View style={styles.box2}></View>
    <View style={styles.box3}></View>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'row',
    height:150, 
    backgroundColor: 'black'
    },
    textcontainer: {
    justifyContent:'space-around',
    flexDirection:'row',
    },
  text1: {color:'red', fontSize: 18,},
  box1: {width:50,height:50,backgroundColor: 'red'},
  box2: {width:50,height:50,backgroundColor: 'green'},
  box3: {width:50,height:50,backgroundColor: 'blue'},
});
