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
import {getDatabase, ref, set} from 'firebase/database';
import '../../config/firebase';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<StackNavigationProp<any>>();

  const handleSignIn = async () => {
    setLoading(true);
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      // Simpan user ke Realtime Database
      const db = getDatabase();
      await set(ref(db, 'users/' + user.uid), {
        email: user.email,
        uid: user.uid,
      });
      setLoading(false);
      Alert.alert('Success', 'Berhasil Login!');
      navigation.navigate('Home');
    } catch (error: any) {
      setLoading(false);
      let errorMessage = '';
      switch (error.code) {
        case 'auth/user-not-found':
        case 'auth/wrong-password':
        case 'auth/invalid-credential':
          errorMessage = 'Email atau password salah / tidak terdaftar.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Format email tidak valid.';
          break;
        default:
          errorMessage = error.message;
      }
      Alert.alert('Gagal Login', errorMessage);
    }
  };

  return (
    <View style={styles.root}>
      {/* Header biru dengan logo dan welcome */}
      <View style={styles.headerBlue}>
        <Logo width={80} height={80} style={styles.logo} />
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
          title="Sign In"
          onPress={handleSignIn}
          style={styles.signInButton}
          textStyle={styles.signInButtonText}
        />
        <Text style={styles.signupText}>
          Don't have an account?{' '}
          <Text
            style={styles.signupLink}
            onPress={() => navigation.navigate('SignUp')}>
            Sign Up
          </Text>
        </Text>
        {loading && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color="#174BA7" />
          </View>
        )}
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
  signInTitle: {
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
  signInButton: {
    backgroundColor: '#BFC4CA',
    borderRadius: 6,
    paddingVertical: 12,
    alignItems: 'center',
    width: '100%',
    marginTop: 8,
    marginBottom: 18,
  },
  signInButtonText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 17,
  },
  signupText: {
    color: '#222',
    fontSize: 14,
    textAlign: 'center',
  },
  signupLink: {
    color: '#174BA7',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  loadingOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
});

export default SignIn;
