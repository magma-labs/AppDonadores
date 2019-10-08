import React, { Component } from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default class ButtonQuestion extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Image style={styles.button} source={require('../img/plus.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    width: 65,
    height: 65,
    marginBottom: 20,
  },
});