import styled, {css} from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  background-color: #333;
  align-items: center;
  padding: 20px;
`;

const styleInput = css`
  height: 45px;
  background-color: #fff;
  align-self: stretch;
  border-color: #eee;
  border-width: 1px;
  padding: 0 20px;
  margin-bottom: 20px;
`;

export const InputLogin = styled.TextInput`
  ${styleInput};
`;

export const InputPassword = styled.TextInput`
  ${styleInput};
`;

export const ButtonLogin = styled.TouchableOpacity`
  height: 45px;
  background-color: #dd4b39;
  align-self: stretch;
  padding: 0 20px;
  justify-content: center;
  margin-bottom: 20px;
  align-items: center;
`;

export const ButtonLoginGoogle = styled.TouchableOpacity`
  height: 45px;
  background-color: #1166e8;
  align-self: stretch;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
`;
