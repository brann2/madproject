import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Switch } from 'react-native';
import Svg, { Rect, Polygon } from 'react-native-svg';
import ArrowBack from '../../assets/Vector7.svg';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const notificationOptions = [
  { label: 'General Notification' },
  { label: 'Sound' },
  { label: 'Vibrate' },
];

const NotificationSettings = () => {
  const navigation = useNavigation();
  const [toggles, setToggles] = useState([false, false, false]);

  const handleToggle = (idx: number) => {
    setToggles((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <View style={styles.container}>
      {/* Header biru diagonal dengan back arrow */}
      <View style={styles.headerGradient}>
        <Svg height={140} width={width} style={StyleSheet.absoluteFill}>
          <Rect x="0" y="0" width={width} height="140" fill="#0A2A66" />
          <Polygon points={`0,30 ${width},0 ${width},80 0,120`} fill="#174BA7" />
          <Polygon points={`0,110 ${width},90 ${width},140 0,140`} fill="#174BA7" />
        </Svg>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <ArrowBack width={26} height={26} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notification Settings</Text>
      </View>
      <View style={styles.contentWrapper}>
        {notificationOptions.map((item, idx) => (
          <View key={item.label} style={styles.optionRow}>
            <Text style={styles.optionLabel}>{item.label}</Text>
            <Switch
              value={toggles[idx]}
              onValueChange={() => handleToggle(idx)}
              trackColor={{ false: '#BFC4CA', true: '#174BA7' }}
              thumbColor={toggles[idx] ? '#fff' : '#fff'}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FB',
  },
  headerGradient: {
    height: 140,
    justifyContent: 'flex-end',
    paddingBottom: 0,
    paddingHorizontal: 0,
    position: 'relative',
    marginBottom: 0,
    overflow: 'hidden',
  },
  backBtn: {
    position: 'absolute',
    top: 44,
    left: 18,
    zIndex: 3,
    padding: 4,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    position: 'absolute',
    top: 44,
    left: 0,
    right: 0,
    textAlign: 'center',
    zIndex: 2,
    paddingLeft: 40,
  },
  contentWrapper: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -8,
    paddingTop: 32,
    paddingHorizontal: 24,
    flex: 1,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
    justifyContent: 'space-between',
  },
  optionLabel: {
    fontSize: 15,
    color: '#222',
    fontFamily: 'Poppins-Regular',
  },
});

export default NotificationSettings; 