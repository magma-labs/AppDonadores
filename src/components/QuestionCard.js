import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class QuestionCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.numberQuestion}>Pregunta frecuente #1</Text>
        <Text style={styles.answer}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo conse
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
    borderWidth: 0.5,
    borderColor: '#bbbbbb',
    elevation: 4,
    shadowOffset: {width: 0, height: 3},
    height: 324,
    width: 320,
    borderRadius: 29,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  numberQuestion: {
    marginTop: 30,
    fontFamily: 'AcuminPro',
    fontSize: 20,
    textAlign: 'left',
    color: '#000000',
    alignItems: 'center',
  },
  answer: {
    width: 280,
    marginTop: 30,
    fontFamily: 'SegoeUI',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'left',
    justifyContent: 'center',
    color: '#000000',
  },
  button: {
    color: '#ffffff',
    fontSize: 40,
    width: 65,
    height: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 130,
    backgroundColor: '#ed1a3d',
    padding: 10,
  },
});
