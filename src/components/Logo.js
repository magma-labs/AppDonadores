import React, { Component } from 'react';
import {View, StyleSheet, Image} from 'react-native';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{
            flex: 1,
            width: 310,
            height: 100,
            resizeMode: 'contain',
          }}
          source={require('../img/LogoDonadoresCompulsivosBlanco.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
});
