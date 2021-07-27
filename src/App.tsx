import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './navigation';
import AuthContext, { AuthProvider } from './context/index';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <NavigationContainer>
			<AuthProvider>
          <Routes />
			</AuthProvider>
		</NavigationContainer>
  );
};



export default App;
