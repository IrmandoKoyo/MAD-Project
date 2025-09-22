import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Title from './components/Title';
import TextInput from './components/TextInput';
import Button from './components/Button';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const onRegister = () => {
    console.log('Button di klik');
    console.log('Name:', name);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Phone:', phone);
  };

  return (
    <View style={styles.container}>
      <Title>Registration</Title> 

      <TextInput 
        placeholder="Masukan nama lengkap anda" 
        label="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput 
        placeholder="Masukan username anda" 
        label="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput 
        placeholder="Masukan email anda" 
        label="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput 
        placeholder="Masukan alamat anda" 
        label="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput 
        placeholder="Masukan Nomor telepon anda" 
        label="Phone Number"
        value={phone}
        onChangeText={setPhone}
      />

      <Button label="Register" onPress={onRegister} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
});