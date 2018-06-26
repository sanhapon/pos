import { createStackNavigator } from 'react-navigation';
import { Login } from './components/Login/Login';
import { Register } from './components/Login/Register';

export const Navigation = createStackNavigator(
    {
      Login: Login,
      Register: Register,
    },
    {
      initialRouteName: 'Login',
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      }
    },
    
);