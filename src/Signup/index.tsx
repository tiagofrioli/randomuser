import { firebase } from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Text, View } from 'react-native';
import { ButtonLogin, Container, InputLogin, InputPassword } from './styles';

// import { Container } from './styles';

const Signup: React.FC = () => {

 const [email, setEmail] = useState<string>('');
 const [password, setPassword] = useState<string>('');

 const navigation = useNavigation();

 function handleInputLogin(value: string) {
  setEmail(value);
}

function handleInputPassword(value: string) {
  setPassword(value);
}


async function handleAddAccount(email:string, password:string){

  const response = await firebase.auth().createUserWithEmailAndPassword(email, password);

  navigation.navigate("Signin");
  
}

  return (
   <Container>
      <InputLogin
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        placeholder="Informe um email"
        onChangeText={handleInputLogin}
      />

      <InputPassword
        secureTextEntry
        placeholder="Informe uma senha"
        value={password}
        onChangeText={handleInputPassword}
      />

      <ButtonLogin onPress={() => handleAddAccount(email, password)}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>Cadastrar</Text>
      </ButtonLogin>
      </Container>
  );
}

export default Signup;