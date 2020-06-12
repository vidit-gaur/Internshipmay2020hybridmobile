import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
export default class InputTest extends Component {
state = {
  number1: '',
  number2: '',
  result: ''
}
add = () => {
  let n1=parseFloat(this.state.number1);
  let n2=parseFloat(this.state.number2);
  let t=0;
     t=n1+n2;
  this.setState({result:t});
}
subtract = () => {
  let n1=this.state.number1;
  let n2=this.state.number2;
  let t=0;
     t=n1-n2;
  this.setState({result:t});
}

multiply = () => {
  let n1=this.state.number1;
  let n2=this.state.number2;
  let t=0;
     t=n1*n2;
  this.setState({result:t});
}
divide = () => {
  let n1=this.state.number1;
  let n2=this.state.number2;
  let t=0;
     t=n1/n2;
  this.setState({result:t});
}
render() {
  return (
    <View style = {styles.container}>
      <TextInput style = {styles.input}  placeholder = 'Enter Number 1' onChangeText = {(text) => {
  this.setState({ number1: text })
}}/>
<View style = {styles.container}>
      <TextInput style = {styles.input} placeholder = 'Enter Number 2' onChangeText = {(text) => {
  this.setState({ number2: text })
}}/>
      <Text style = {styles.input}>
        {this.state.result}
      </Text>
      <TouchableOpacity style = {styles.addButton} onPress = {() => this.add()}>
        <Text style = {styles.addButtonText}> Add </Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.subtractButton} onPress = {() => this.subtract()}>
        <Text style = {styles.subtractButtonText}> Subtract </Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.multiplyButton} onPress = {() => this.multiply()}>
        <Text style = {styles.multiplyButtonText}> Multiply </Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.divideButton} onPress = {() => this.divide()}>
        <Text style = {styles.divideButtonText}> Divide </Text>
      </TouchableOpacity>
    </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10
  },
  
  input: {
  textAlign: 'center',
  alignItems:'space-around',
  margin: 10,
  height: 40,
  borderColor: 'black',
  borderWidth: 3,
  
  },
 addButton: {
    backgroundColor: 'lightseagreen',
    padding: 10,
    margin: 15,
    height: 40,
  },

  addButtonText:{
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtractButton: {
    backgroundColor: 'lightseagreen',
    padding: 10,
    margin: 15,
    height: 40,
  },

  subtractButtonText:{
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  multiplyButton: {
    backgroundColor: 'lightseagreen',
    padding: 10,
    margin: 15,
    height: 40,
  },

  multiplyButtonText:{
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  divideButton: {
    backgroundColor: 'lightseagreen',
    padding: 10,
    margin: 15,
    height: 40,
  },

  divideButtonText:{
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  }
})