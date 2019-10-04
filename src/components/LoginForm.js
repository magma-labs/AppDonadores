import React, {Component} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

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
        <TextInput
          style={styles.inputBox}
          placeholderTextColor="#707070"
          placeholder="user@example.com"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          
        />
        <Text style={styles.textStyle}>Contraseña</Text>
        <TextInput
          style={styles.inputBox}
          placeholderTextColor="#707070"
          secureTextEntry={true}
          placeholder="Contraseña"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          
        />
       </KeyboardAvoidingView> 
        <KeyboardAvoidingView behavior="padding" style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.logIn(this.state.email, this.state.password)}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        </View>
        
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    
  },
  containerButton:{
    alignItems:'center',
    flexDirection: 'column',
    justifyContent: 'center',
   
  },
  textStyle:{
    color: '#ffffff',
    flexDirection: 'column',
    fontSize: 20,
    textAlign:'left',
  },
 
  inputBox: {  
    width: 282,
    height: 47,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    borderColor: '#000000',
    paddingHorizontal: 16,
    fontSize: 18,
    color: '#000000',
    marginVertical: 10,
    
  },
  button: {
    
    width: 135,
    height: 52,
    backgroundColor: '#e12e4a',
    borderRadius: 5,
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
