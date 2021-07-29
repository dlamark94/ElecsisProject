import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  Colors,
  StyledButton,
  ButtonText,
} from './../components/styles';
import { Button, Input } from 'react-native-elements';
import { View } from 'react-native';

const { brand, darkLight } = Colors;

import axios from 'axios';

  const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const authentication = async (user, password) => {
    try {
      const { data } = await axios.post('http://8.9.37.125:8085/login', {
        user,
        password,
      });
      alert(`${data.mensaje} - Ingreso correcto`);
    } catch (error) {
      alert('Error al ingresar, intentelo de nuevo');
      console.log(error);
    }
  };

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageLogo resizeMode="cover" source={require('./../assets/img/img1.png')} />
        <PageTitle>Iniciar Sesión</PageTitle>
        <SubTitle>Ingreso de Usuario</SubTitle>

        <StyledFormArea>
          <MyTextInput
            label="Usuario"
            icon="user"
            placeholder="Usuario"
            name="user"
            placeholderTextColor={darkLight}
            onChangeText={setUser}
            value={user}
            keyboardType="email-address"
          />

          <MyTextInput
            label="Contraseña"
            icon="lock1"
            placeholder="*  *  *  *  *  *  *  *  * "
            placeholderTextColor={darkLight}
            name="password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
          />
          <View style={{ alignItems: "center", display: 'flex', justifyContent: 'center', width: '100%'}}>
            <Button
              buttonStyle={{ width: 150 }}
              containerStyle={{ margin: 5 }}
              disabledStyle={{
                borderWidth: 2,
                borderColor: '#00F',
              }}
              disabledTitleStyle={{ color: '#00F' }}
              linearGradientProps={null}
              iconContainerStyle={{ background: '#000' }}
              loadingProps={{ animating: true }}
              onPress={() => authentication(user, password)}
              title="Login"
              titleProps={{}}
              titleStyle={{ marginHorizontal: 5 }}
            />
          </View>
        </StyledFormArea>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({ label, icon, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Icon name={icon} size={20} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
    </View>
  );
};

export default Login;
