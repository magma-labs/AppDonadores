import React, {Component} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {BoxShadow} from 'react-native-shadow';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};
  }

  render() {
    return (
      <View>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <Text style={styles.textStyle}>Correo</Text>
          <BoxShadow setting={shadowBoxInput}>
          <TextInput
            style={styles.inputBox}
            placeholderTextColor="#707070"
            placeholder="user@example.com"
            value={this.state.email}
            onChangeText={email => this.setState({email})}
          />
          </BoxShadow>
          <Text style={styles.textStyle}>Contraseña</Text>
          <BoxShadow setting={shadowBoxInput}>
          <TextInput
            style={styles.inputBox}
            placeholderTextColor="#707070"
            secureTextEntry={true}
            placeholder="Contraseña"
            value={this.state.password}
            onChangeText={password => this.setState({password})}
          />
          </BoxShadow>
        </KeyboardAvoidingView>
        <KeyboardAvoidingView behavior="padding" style={styles.containerButton}>
          <BoxShadow setting={shadowBoxButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.logIn(this.state.email, this.state.password)}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          </BoxShadow>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
const shadowBoxInput = {
  width: 321,
  height: 47,
  color: '#ff1f1f',
  border: 2,
  radius: 5,
  opacity: 0,
  x: 3,
  y: 12,
  style:{marginBottom:30}
}
const shadowBoxButton = {
  width: 134,
  height: 51,
  color: '#ffffff',
  border: 2,
  radius: 5,
  opacity: 0,
  x: 4,
  y: 14,
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  containerButton: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#ffffff',
    flexDirection: 'column',
    fontSize: 20,
    textAlign: 'left',
  },
  inputBox: {
    width: 321,
    height: 47,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    borderColor: '#000000',
    borderWidth: 3,
    paddingHorizontal: 16,
    fontSize: 18,
    color: '#000000',
    marginVertical: 10,
    marginBottom:30
  },
  button: {
    width: 135,
    height: 52,
    backgroundColor: '#e12e4a',
    borderRadius: 5,
    borderWidth:2,
    marginVertical: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
  errorStyle: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
  },
});
