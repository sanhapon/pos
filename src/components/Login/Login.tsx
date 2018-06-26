import React from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet, Dimensions, Alert } from 'react-native';
import { LoginInfo } from './credential';

export class Login extends React.Component<any, LoginInfo> {
  constructor(props: any) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    } as LoginInfo
  }
  
  onLogin = () => {
    Alert.alert('Credentials', `${this.state.username} + ${this.state.password}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Welcome to H&P</Text>
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
              <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>

          <TouchableOpacity
              style={ [styles.buttonContainer, {marginTop: 50, width:200}]}
              activeOpacity = { .5 }
              onPress={this.onLogin.bind(this)}
          >
              <Text style={styles.buttonText}>Forget password</Text>
          </TouchableOpacity>

        </View>
        
        <TouchableOpacity
              style={[styles.buttonContainer,{alignSelf:'center', marginBottom:50}]}
              activeOpacity = { .5 }
              onPress = { () => {this.props.navigation.navigate('Register');} }
          >
              <Text 
              style={styles.buttonText}
              
              >Create Account</Text>
          </TouchableOpacity>

      </View>
    );
  }
}

const windowSize = {
  width: Dimensions.get('screen').width,
  height: Dimensions.get('screen').height,
};

const isPhone = windowSize.height / windowSize.width > 1.6;

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
    marginLeft: isPhone ? 25 : 100,
    marginRight: isPhone ? 25 : 100,
    marginTop: isPhone ? 75 : 100,
    marginBottom:  isPhone ? 75 : 100
  },
  text: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    marginLeft: 30,
    marginRight: 30,
    width: isPhone?250:300,
    height: 44,
    padding: 10,
    borderWidth: 2,
    color: 'black',
    backgroundColor: '#1a75ff',
    borderColor: 'white',
    marginBottom: 10,
    fontStyle: 'italic',
  },
  buttonContainer: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#1a75ff',
    width: isPhone?250:300,
    height: 44,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
