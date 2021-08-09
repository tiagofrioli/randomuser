import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import Signin from '../Signin';
import Signup from '../Signup';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      options={{header: () => null}}
      name="Signin"
      component={Signin}
    />
     <AuthStack.Screen options={{header: () => null}} name="Signup" component={Signup} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
