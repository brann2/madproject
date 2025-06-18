import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '../../../assets/logo.svg';
import { useNavigation } from '@react-navigation/native';

const Amin: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} activeOpacity={0.7}>
        <Logo width={158} height={150} />
      </TouchableOpacity>
      <Text style={styles.text}>Money Tracker</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#02CF8E',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
    color: '#222',
    marginTop: 24,
  },
});

export default Amin; 