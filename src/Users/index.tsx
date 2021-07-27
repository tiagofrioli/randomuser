import React from 'react';
import {Button, View} from 'react-native';
import {useAuth} from '../context';

// import { Container } from './styles';

const Users: React.FC = () => {
  const {signOut} = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <View>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

export default Users;
