import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
export default function SecondComponent() {
return (
<View>
<View style={styles.textcontainer}>
<Text style={styles.text1}>Second Component</Text>
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
flexDirection: 'row',
justifyContent:'space-around',
alignItems: 'center',
height:150,
backgroundColor: 'black'
},
textcontainer: {
flexDirection: 'row',
justifyContent:'space-around',
},
text1: {color:'red',fontSize:18,},
box1: {width:50, height:50,backgroundColor: 'purple'},
box2: {width:50, height:50,backgroundColor: 'magenta'},
box3: {width:50, height:50,backgroundColor: 'white'},
});