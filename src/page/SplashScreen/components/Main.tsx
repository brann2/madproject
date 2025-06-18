import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '../../../assets/logo.svg';
import { useNavigation } from '@react-navigation/native';

const Main: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} activeOpacity={0.7}>
        <Logo width={158} height={150} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Main; 