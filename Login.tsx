import React from 'react';
import {View, StyleSheet} from 'react-native';
import Title from './components/Title';
import TextInput from './components/TextInput';
import Button from './components/Button';

const Login = () => {
  const onSignIn = () => {
    console.log('Button di klik');
  };


  return (
    <View style={styles.container}>
      <Title>Welcome</Title>

      <TextInput placeholder="Masukan username anda" label="Username" />
      <TextInput
        placeholder="Masukan password anda"
        label="Password"
        secureTextEntry={true}
      />
      <Button label="Sign in" onPress={onSignIn} />

      <Button label="Create New Account" color="#797171" colorText="#ffffff" />

      <Button label="Sign in with Google" color="#DB4437" colorText="#ffffff" />
      <Button label="Sign in with Facebook" color="#1877F2" colorText="#ffffff" />
      <Button label="Sign in with Apple" color="#000000" colorText="#ffffff" />
      
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
});
