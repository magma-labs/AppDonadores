import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, ImageBackground} from 'react-native';
import FAQCard from '../components/FAQCard';


export default class FAQ extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageStyle}>
          <ImageBackground
            source={require('../img/blood.png')}
            style={{
              width: 310,
              height: 310,
              marginBottom: -80
            }}></ImageBackground>
        </View>
        <FAQCard />
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flexDirection: 'column',
    flex: 1,
  },
  imageStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
