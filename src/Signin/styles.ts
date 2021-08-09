import styled, {css} from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  padding: 20px;
`;

const styleInput = css`
  width: 300px;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 30px;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #f92e64;
  margin-left: auto;
  margin-right: auto;
  color: #4d5156;

`;

export const InputLogin = styled.TextInput`
  ${styleInput};
`;

export const InputPassword = styled.TextInput`
  ${styleInput};
`;

export const ButtonLogin = styled.TouchableOpacity`
  height: 45px;
  width: 300px;
  background-color: #dd4b39;
  align-self: center;
  padding: 0 20px;
  justify-content: center;
  margin-bottom: 20px;
  align-items: center;
`;

export const ButtonLoginGoogle = styled.TouchableOpacity`
  height: 45px;
  width: 300px;
  background-color: #1166e8;
  align-self: center;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
`;
