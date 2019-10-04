import React, {Component} from 'react';
import  Icon  from 'react-native-vector-icons/Fontisto';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

export default class ButtonQuestion extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
        <Icon
        style={styles.button}
        name= 'plus-a'
             />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent:'center',
    flex: 1,
  },
  button:{
    color:'#ffffff',
    fontSize:40,
    width: 65,
    height: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    borderRadius:130,
    backgroundColor: "#ed1a3d",
    padding:10
  },
});
