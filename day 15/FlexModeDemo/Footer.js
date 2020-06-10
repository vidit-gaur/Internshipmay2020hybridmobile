import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
export default function Footer() {
return (
<View style={styles.container}>
<Text style={styles.text1}>Copyright @GaurSahab 2020</Text>
</View>
);
}
const styles = StyleSheet.create({
container: {
flexDirection: 'row',
justifyContent:'space-around',
alignItems: 'flex-start',
height:50,
},
text1: {color:'BLack',fontSize:15,},
});