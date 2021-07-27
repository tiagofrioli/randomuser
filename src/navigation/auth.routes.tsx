import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import Signin from '../Signin';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      options={{header: () => null}}
      name="Signin"
      component={Signin}
    />
  </AuthStack.Navigator>
);

export default AuthRoutes;
