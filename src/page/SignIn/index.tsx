import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Logo from '../../assets/logo.svg';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import '../../config/firebase';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [loading, setLoading] = useState(false);

  const handleSignIn = () => {
    setLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        setLoading(false);
        // Login berhasil
        Alert.alert('Success', 'Berhasil Login!');
        navigation.navigate('Home');
      })
      .catch(error => {
        setLoading(false);
        const errorCode = error.code;
        let errorMessage = '';
        switch (errorCode) {
          case 'auth/user-not-found':
            errorMessage = 'Email tidak ditemukan.';
            break;
          case 'auth/wrong-password':
            errorMessage = 'Password salah.';
            break;
          case 'auth/invalid-credential':
            errorMessage = 'Email atau password salah.';
            break;
          case 'auth/invalid-email':
            errorMessage = 'Format email tidak valid.';
            break;
          default:
            errorMessage = error.message;
        }
        Alert.alert('Gagal Login', errorMessage);
      });
  };

  return (
    <View style={styles.root}>
      {/* Header biru dengan logo dan welcome */}
      <View style={styles.headerBlue}>
        <Logo width={158} height={150} style={styles.logo} />
        <Text style={styles.welcome}>
          Welcome! to{'\n'}Adventist Paal 2{'\n'}Library
        </Text>
      </View>
      {/* Card putih membulat */}
      <View style={styles.card}>
        <Text style={styles.signInTitle}>Sign In</Text>
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
          title={loading ? 'Signing In...' : 'Sign In'}
          onPress={handleSignIn}
          style={styles.signInButton}
          textStyle={styles.signInButtonText}
          disabled={loading}
        />
        {loading && (
          <ActivityIndicator
            size="large"
            color="#174BA7"
            style={{marginTop: 12}}
          />
        )}
        <Text style={styles.signupText}>
          Don't have an account?{' '}
          <Text
            style={styles.signupLink}
            onPress={() => navigation.navigate('SignUp')}>
            Sign Up
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
    width: 250,
    height: 250,
  },
  welcome: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 38,
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
  signInTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 2,
    textAlign: 'center',
  },
  inputGroup: {
    width: '100%',
    marginBottom: 15,
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
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#222',
    backgroundColor: '#fff',
  },
  signInButton: {
    backgroundColor: '#BFC4CA',
    borderRadius: 50,
    paddingVertical: 6,
    alignItems: 'center',
    width: '60%',
    marginTop: 8,
    marginBottom: 18,
  },
  signInButtonText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 20,
  },
  signupText: {
    color: '#222',
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  signupLink: {
    color: '#174BA7',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default SignIn;
