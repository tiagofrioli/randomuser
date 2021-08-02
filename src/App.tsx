import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useColorScheme} from 'react-native';
import 'react-native-gesture-handler';
import {AuthProvider} from './context/index';
import Routes from './navigation';

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
