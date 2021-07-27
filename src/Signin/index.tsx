import auth, {firebase} from '@react-native-firebase/auth';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Text} from 'react-native';
import {
  ButtonLogin,
  ButtonLoginGoogle,
  Container,
  InputLogin,
  InputPassword,
} from './styles';
import {GoogleSignin} from '@react-native-community/google-signin';
import AuthContext, {useAuth} from '../context';
import {Alert} from 'react-native';

const Signin: React.FC = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const {signIn, signed} = useAuth();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '213263686677-b562b37c2ap48adq5hjah5fc5oif309u.apps.googleusercontent.com',
    });
  }, []);

  function handleSigninEmailPassword(login: string, password: string) {
    try {
      signIn(login, password);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleLoginGoogle() {
    try {
      const {idToken} = await GoogleSignin.signIn();

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      const loginGoogle = await auth().signInWithCredential(googleCredential);

      console.log('Google', loginGoogle);
    } catch (error) {}
  }

  function handleInputLogin(value: string) {
    setLogin(value);
  }

  function handleInputPassword(value: string) {
    setPassword(value);
  }

  return (
    <Container>
      <InputLogin
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
        value={login}
        placeholder="Digite seu login"
        onChangeText={handleInputLogin}
      />

      <InputPassword
        secureTextEntry
        placeholder="Digite sua senha"
        value={password}
        onChangeText={handleInputPassword}
      />

      <ButtonLogin onPress={() => handleSigninEmailPassword(login, password)}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>Logar</Text>
      </ButtonLogin>
      <ButtonLoginGoogle onPress={handleLoginGoogle}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>Login Google</Text>
      </ButtonLoginGoogle>
      {isAuth ? <Text>Logado</Text> : null}
    </Container>
  );
};

export default Signin;
