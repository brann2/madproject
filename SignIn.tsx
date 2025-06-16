import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import React, {useState} from 'react';
import Input from './components/InputField';
import Button from './components/ButtonCustom';
import Title from './components/Title';

const SignIn = () => {
  // let title = 'Welcome';
  const [title, setTitle] = useState('Registration');
  const [Name, setName] = useState('');
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Address, setAddress] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const handleClick = () => {
    // title = 'Selamat Datang';
    setTitle('Selamat Datang');
    const data = {
      Name: Name,
      username: Username,
      Email: Email,
      Address: Address,
      PhoneNumber: PhoneNumber,
    };
    console.log(data);
  };
  const handleName = e => {
    setName(e);
  };
  const handleUsername = e => {
    setUsername(e);
  };
  const handleEmail = e => {
    setEmail(e);
  };
  const handleAddress = e => {
    setAddress(e);
  };
  const handlePhoneNumber = e => {
    setPhoneNumber(e);
  };
  return (
    <View style={styles.container}>
      <Title title={title} />
      <Input
        label="Name"
        placeholder="Masukan nama lengkap anda"
        onChangeText={handleName}
      />
      <Input
        label="Username"
        placeholder="Masukan username anda"
        onChangeText={handleUsername}
      />
      <Input
        label="Email"
        placeholder="Masukan email anda"
        onChangeText={handleEmail}
      />
      <Input
        label="Address"
        placeholder="Masukan alamat anda"
        onChangeText={handleAddress}
      />
      <Input
        label="Phone Number"
        placeholder="Masukan Nomor telepon anda"
        onChangeText={handlePhoneNumber}
        keyboardType="numeric"
      />
      {/* <Input label="Address" placeholder="Masukan alamat anda" /> */}
      <Button label="Register" onPress={handleClick} />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    margin: 20,
  },
});
