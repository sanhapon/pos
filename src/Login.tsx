import React from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';
import { Credential } from './credential';

export  class Login extends React.Component<any, Credential> {
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
        <TextInput
          value={this.state.username}
          onChangeText={(username:string) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password:string) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <View style={styles.button}>
          <Button
            title={'Login'}
            onPress={this.onLogin.bind(this)}
          />
            <Button
            title={'Reset'}
            onPress={this.onLogin.bind(this)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',
  },
});
