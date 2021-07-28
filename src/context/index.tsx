import AsyncStorage from '@react-native-community/async-storage';
import auth, {firebase} from '@react-native-firebase/auth';
import React, {useContext, useEffect, useState} from 'react';
import {createContext} from 'react';
import {AuthContextData} from './types';
import {GoogleSignin} from '@react-native-community/google-signin';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<object | null>(null);
  /* const [userGoogle, setUserGoogle] = useState<object | null>(null); */

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@Auth:user');

      if (storagedUser) {
        setUser(JSON.parse(storagedUser));
      }
    }

    loadStorageData();
  });

  async function signIn(login: string, password: string) {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(login, password);

      if (!!response.user) {
        setUser(response.user);
        await AsyncStorage.setItem('@Auth:user', JSON.stringify(response.user));
        console.log('response', response.user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function signInGoogle() {
    try {
      const {idToken} = await GoogleSignin.signIn();

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      const response = await auth().signInWithCredential(googleCredential);
      await AsyncStorage.setItem('@Auth:user', JSON.stringify(response.user));
      setUser(response.user);

      console.log('Google', response.user);
    } catch (error) {}
  }

  async function signOut() {
    try {
      await firebase.auth().signOut();

      await AsyncStorage.clear();
      setUser(null);
    } catch (error) {}
  }

  return (
    <AuthContext.Provider
      value={{signed: !!user, user: {}, signIn, signOut, signInGoogle}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
