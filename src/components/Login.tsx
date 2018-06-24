import React from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet, Alert } from 'react-native';
import { Credential } from './credential';

export class Login extends React.Component<any, Credential> {
  constructor(props: any) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    } as Credential
  }
  
  onLogin = () => {
    Alert.alert('Credentials', `${this.state.username} + ${this.state.password}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Welcome to POS</Text>
          <Text style={styles.text}>Please sign in to access</Text>
          <TextInput style={styles.input} 
            underlineColorAndroid='transparent'
            placeholder={'username'} />
          <TextInput style={styles.input} 
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            placeholder={'password'} />
          <TouchableOpacity
              style={styles.buttonContainer}
              activeOpacity = { .5 }
              onPress={this.onLogin.bind(this)}
          >
              <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
              style={styles.buttonContainer}
              activeOpacity = { .5 }
              onPress={this.onLogin.bind(this)}
          >
              <Text style={styles.buttonText}>Forget password</Text>
          </TouchableOpacity>

        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a75ff',
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#3385ff',
    alignItems: 'center',
    justifyContent: 'center',
    margin:100,
    marginTop:200,
    marginBottom:200,
  },
  text: {
    color: '#fff',
    fontSize:20,
    marginBottom:20,
    fontWeight:'bold'
  },
  input: {
    width: 280,
    height: 44,
    padding: 10,
    borderWidth: 2,
    color: 'black',
    backgroundColor: '#1a75ff',
    borderColor: 'white',
    marginBottom: 10,
    fontStyle:'italic'
    
  },
  buttonContainer: {
    borderWidth:1,
    borderColor:'black',
    backgroundColor:'#1a75ff',
    width: 280,
    height: 50,
    marginTop:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize:16,
    fontWeight:'bold',
  }
 
});
