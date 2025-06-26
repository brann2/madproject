import React, {useState} from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Logo from '../../assets/logo.svg';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import '../../config/firebase';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<StackNavigationProp<any>>();

  const handleSignUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed up
        const user = userCredential.user;
        Alert.alert('Success', 'Berhasil Daftar');
        // Optionally navigate to another screen
        // navigation.navigate('Login');
      })
      .catch(error => {
        const errorCode = error.code;
        let errorMessage = '';
        switch (errorCode) {
          case 'auth/email-already-in-use':
            errorMessage = 'Email sudah digunakan. Silakan gunakan email lain.';
            break;
          case 'auth/invalid-email':
            errorMessage = 'Format email tidak valid.';
            break;
          case 'auth/weak-password':
            errorMessage =
              'Password terlalu lemah. Gunakan minimal 6 karakter.';
            break;
          case 'auth/missing-password':
            errorMessage = 'Password wajib diisi.';
            break;
          default:
            errorMessage = error.message;
        }
        Alert.alert('Gagal Daftar', errorMessage);
      });
  };

  return (
    <View style={styles.root}>
      {/* Header biru dengan logo dan welcome */}
      <View style={styles.headerBlue}>
        <Logo width={158} height={150} style={styles.logo} />
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
    paddingBottom: 54,
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
  },
  logo: {
    marginBottom: 8,
  },
  welcome: {
    color: '#fff',
    fontSize: 24,
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
    fontSize: 36,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 15,
    textAlign: 'center',
  },
  inputGroup: {
    width: '100%',
    marginBottom: 5,
  },
  label: {
    fontSize: 13,
    color: '#222',
    fontWeight: 'bold',
    marginBottom: 6,
    marginLeft: 50,
    marginRight: 50,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
    alignSelf: 'center',
    fontSize: 15,
    color: '#222',
    backgroundColor: '#fff',
  },
  signUpButton: {
    backgroundColor: '#BFC4CA',
    borderRadius: 50,
    paddingVertical: 6,
    alignItems: 'center',
    width: '60%',
    marginTop: 18,
    marginBottom: 18,
  },
  signUpButtonText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 20,
  },
  loginText: {
    color: '#222',
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  loginLink: {
    color: '#174BA7',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default SignUp;
