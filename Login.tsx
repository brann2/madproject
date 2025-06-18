import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import HeaderAuth from './components/HeaderAuth';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Main: undefined;
  Login: undefined;
  SignUp: undefined;
};

const Login: React.FC = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <HeaderAuth />
      <View style={styles.formCard}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="John Doe"
            value={name}
            onChangeText={setName}
            placeholderTextColor="#BFC4CA"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Date Of Birth</Text>
          <TextInput
            style={styles.input}
            placeholder="18/07/2001"
            value={dob}
            onChangeText={setDob}
            placeholderTextColor="#BFC4CA"
          />
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.signupText}>
          Don't have an account?{' '}
          <Text style={styles.signupLink} onPress={() => navigation.navigate('SignUp')}>
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  formCard: {
    backgroundColor: '#fff',
    borderRadius: 32,
    marginHorizontal: 16,
    marginTop: -32,
    padding: 28,
    shadowColor: '#174BA7',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.10,
    shadowRadius: 24,
    elevation: 12,
    alignItems: 'center',
    zIndex: 2,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#174BA7',
    marginBottom: 28,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  inputGroup: {
    width: '100%',
    marginBottom: 18,
  },
  label: {
    fontSize: 13,
    color: '#222',
    fontWeight: 'bold',
    marginBottom: 6,
    fontFamily: 'Poppins-SemiBold',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#E3E6ED',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: '#222',
    backgroundColor: '#fff',
  },
  loginButton: {
    backgroundColor: '#174BA7',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    width: '100%',
    marginTop: 8,
    marginBottom: 18,
    shadowColor: '#174BA7',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    fontFamily: 'Poppins-Bold',
  },
  signupText: {
    color: '#222',
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  signupLink: {
    color: '#174BA7',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Bold',
  },
});

export default Login;
