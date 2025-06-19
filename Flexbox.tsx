import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import Logo from './src/assets/logo.svg';

const Flexbox = () => {
  return (
    <>
      <View style={styles.topContainer}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
      <View style={styles.container}>
        <Logo width={100} height={100} />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
    </>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'left', // Untuk menempatkan redBox di tengah vertikal
    alignItems: 'center', // Untuk menempatkan redBox di tengah horizontal
  },
  container: {
    flex: 3,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  Image: {
    height: 90,
    width: 400,
  },
  bottomContainer: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center', // Untuk menempatkan redBox di tengah vertikal
    alignItems: 'center', // Untuk menempatkan redBox di tengah horizontal
  },
  blackBox: {
    height: 80,
    width: 80,
    margin: 20,
    backgroundColor: 'black',
  },
  yellowBox: {
    height: 80,
    width: 80,
    backgroundColor: 'yellow',
  },
});
