import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Logo from '../components/Logo';
import LoginForm from '../components/LoginForm';

export default class Login extends Component {
  render() {
    debugger;
    return (
      <View style={styles.container}>
        <Logo />
        <LoginForm />
        <View style={styles.register}>
          <TouchableOpacity>
            <Text>
            <Text style={styles.registrate}>Regístrate: </Text>
            <Text style={styles.link}>www.donadorescompulsivos.org</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  register: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  registrate: {
    fontSize: 15,
    color: 'white',
  },
  link: {
    color: '#f8173a',
    fontSize: 15,
    textDecorationLine: "underline",
  },
});
