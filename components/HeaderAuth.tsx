import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Svg, { Rect, Polygon } from 'react-native-svg';
import Logo from '../src/assets/logo.svg';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const HeaderAuth: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Svg height={220} width={width} style={StyleSheet.absoluteFill}>
        <Rect x="0" y="0" width={width} height="220" fill="#0A2A66" />
        <Polygon points={`0,40 ${width},0 ${width},60 0,100`} fill="#174BA7" />
        <Polygon points={`0,120 ${width},80 ${width},140 0,180`} fill="#174BA7" />
      </Svg>
      <View style={styles.logoWrap}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Main')}>
          <Logo width={70} height={70} />
        </TouchableOpacity>
        <Text style={styles.welcome}>Welcome! to{"\n"}Adventist Paal 2 Library</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 220,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  logoWrap: {
    alignItems: 'center',
    marginBottom: 0,
    zIndex: 1,
  },
  welcome: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 26,
    fontFamily: 'Poppins-Bold',
  },
});

export default HeaderAuth; 