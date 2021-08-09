import React from 'react';
import {useContext} from 'react';
import { ActivityIndicator, View } from 'react-native';
import AuthContext from '../context';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import LottieView from 'lottie-react-native';
import loadingAnimation from '../assets/loadingAnimation.json';

const Routes: React.FC = () => {
  const {signed, loading} = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* <ActivityIndicator size="large" color="#666" /> */}
      <LottieView source={require('../assets/loadingAnime.json')}
           autoPlay 
           loop 
           style={{width: 100, height: 100}}
           />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
