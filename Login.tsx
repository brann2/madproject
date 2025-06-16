import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Title from './components/Title';
import InputField from './components/InputField';
import ButtonCustom from './components/ButtonCustom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleSocialLogin = (platform: string) => {
    console.log(`Login with ${platform}`);
  };

  return (
    <View style={styles.container}>
      <Title text="Welcome" />

      <InputField
        label="Username"
        placeholder="Masukan username anda"
        value={username}
        onChangeText={setUsername}
      />

      <InputField
        label="Password"
        placeholder="Masukan password anda"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <ButtonCustom text="Sign In" color="#FF7A00" onPress={handleLogin} />
      <ButtonCustom
        text="Sign in with Google"
        color="#DB4437"
        onPress={() => handleSocialLogin('Google')}
      />
      <ButtonCustom
        text="Sign in with Facebook"
        color="#1877F2"
        onPress={() => handleSocialLogin('Facebook')}
      />
      <ButtonCustom
        text="Sign in with Apple"
        color="#000000"
        onPress={() => handleSocialLogin('Apple')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'flex-start',
  },
});

export default Login;
