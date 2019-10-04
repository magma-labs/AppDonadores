import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import QuestionCard from '../components/QuestionCard';
import ButtonQuestion from './ButtonQuestion';

export default class FAQCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{
            marginTop: -80,
            width: 160,
            height: 160,
            resizeMode: 'contain',
          }}
          source={require('../img/pic.png')}
        />
        <Text style={styles.textStyle}>¡Hola Usuario!</Text>
        <QuestionCard />
        <ButtonQuestion />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 637,
    width: '100%',
    borderTopRightRadius: 80,
    borderTopLeftRadius: 80,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textStyle: {
    color: '#000000',
    fontSize: 30,
    textAlign: 'center',
    alignItems: 'flex-start',
    fontWeight: 'bold',
    marginBottom: 40,
  },
});
