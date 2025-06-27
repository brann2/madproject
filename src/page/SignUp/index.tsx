import React, {useState} from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Logo from '../../assets/logo.svg';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {getDatabase, ref, set} from 'firebase/database';
import '../../config/firebase';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<StackNavigationProp<any>>();

  const handleSignUp = async () => {
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      // Simpan data user ke Realtime Database
      const db = getDatabase();
      await set(ref(db, 'users/' + user.uid), {
        name,
        dob,
        email: user.email,
        uid: user.uid,
      });
      Alert.alert('Success', 'Berhasil Daftar');
      // navigation.navigate('Login');
    } catch (error: any) {
      let errorMessage = '';
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'Email sudah digunakan. Silakan gunakan email lain.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Format email tidak valid.';
          break;
        case 'auth/weak-password':
          errorMessage = 'Password terlalu lemah. Gunakan minimal 6 karakter.';
          break;
        case 'auth/missing-password':
          errorMessage = 'Password wajib diisi.';
          break;
        default:
          errorMessage = error.message;
      }
      Alert.alert('Gagal Daftar', errorMessage);
    }
  };

  return (
    <View style={styles.root}>
      {/* Header biru dengan logo dan welcome */}
      <View style={styles.headerBlue}>
        <Logo width={80} height={80} style={styles.logo} />
        <Text style={styles.welcome}>
          Welcome! to{'\n'}Adventist Paal 2 Library
        </Text>
      </View>
      {/* Card putih membulat */}
      <View style={styles.card}>
        <Text style={styles.signUpTitle}>Sign Up</Text>
        <View style={styles.inputGroup}>
          <TextInput
            label="Name"
            placeholder="John Doe"
            value={name}
            onChangeText={setName}
            inputStyle={styles.input}
            labelStyle={styles.label}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            label="Date Of Birth"
            placeholder="18/07/2001"
            value={dob}
            onChangeText={setDob}
            inputStyle={styles.input}
            labelStyle={styles.label}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            value={email}
            onChangeText={setEmail}
            inputStyle={styles.input}
            labelStyle={styles.label}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            inputStyle={styles.input}
            labelStyle={styles.label}
            secureTextEntry={true}
          />
        </View>
        <Button
          title="Sign Up"
          onPress={handleSignUp}
          style={styles.signUpButton}
          textStyle={styles.signUpButtonText}
        />
        <Text style={styles.loginText}>
          Already have an account?{' '}
          <Text
            style={styles.loginLink}
            onPress={() => navigation.navigate('Login')}>
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  headerBlue: {
    backgroundColor: '#174BA7',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  logo: {
    marginBottom: 8,
  },
  welcome: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 28,
  },
  card: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: -24,
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 8,
    flex: 1,
  },
  signUpTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 24,
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
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
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
  },
  loginText: {
    color: '#222',
    fontSize: 14,
    textAlign: 'center',
  },
  loginLink: {
    color: '#174BA7',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default SignUp;
