import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import HeaderAuth from '../../../components/HeaderAuth';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Main: undefined;
  Login: undefined;
  SignUp: undefined;
};

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [origin, setOrigin] = useState('');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <HeaderAuth />
      <View style={styles.formCard}>
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="John Doe"
            value={name}
            onChangeText={setName}
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Date Of Birth</Text>
          <TextInput
            style={styles.input}
            placeholder="18/07/2001"
            value={dob}
            onChangeText={setDob}
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Origin</Text>
          <TextInput
            style={styles.input}
            placeholder="Jakarta"
            value={origin}
            onChangeText={setOrigin}
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="087576343234"
            value={phone}
            onChangeText={setPhone}
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.codeRow}>
          <TouchableOpacity style={styles.codeButton}>
            <Text style={styles.codeButtonText}>Get Code</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.codeInput}
            placeholder="578645"
            value={code}
            onChangeText={setCode}
            placeholderTextColor="#888"
          />
        </View>
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>Sudah punya akun? Login</Text>
        </TouchableOpacity>
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
    alignItems: 'center',
    zIndex: 2,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
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
    borderColor: '#BFC4CA',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: '#222',
    backgroundColor: '#fff',
  },
  codeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 18,
  },
  codeButton: {
    backgroundColor: '#BFC4CA',
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  codeButtonText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
  },
  codeInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#BFC4CA',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: '#222',
    backgroundColor: '#fff',
  },
  signUpButton: {
    backgroundColor: '#BFC4CA',
    borderRadius: 6,
    paddingVertical: 12,
    alignItems: 'center',
    width: '100%',
    marginTop: 8,
    marginBottom: 18,
  },
  signUpButtonText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 17,
    fontFamily: 'Poppins-Bold',
  },
  linkText: {
    color: '#174BA7',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Bold',
  },
});

export default SignUp;
