import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Button from '../../components/atoms/Button';
import Svg, {Rect, Polygon} from 'react-native-svg';
import ArrowBack from '../../assets/Vector7.svg';
import NotifIcon from '../../assets/notif.svg';
import VectorIcon from '../../assets/Vector.svg';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const Settings = () => {
  const navigation = useNavigation();
  const settingsOptions = [
    {
      label: 'Notification Setting',
      icon: NotifIcon,
      onPress: () => navigation.navigate('NotificationSettings'),
    },
    {label: 'Delete Account', icon: VectorIcon, onPress: () => {}},
  ];
  return (
    <View style={styles.container}>
      {/* Header biru diagonal tanpa back arrow */}
      <View style={styles.headerGradient}>
        <Svg height={140} width={width} style={StyleSheet.absoluteFill}>
          <Rect x="0" y="0" width={width} height="140" fill="#0A2A66" />
          <Polygon
            points={`0,30 ${width},0 ${width},80 0,120`}
            fill="#174BA7"
          />
          <Polygon
            points={`0,110 ${width},90 ${width},140 0,140`}
            fill="#174BA7"
          />
        </Svg>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>
      <ScrollView contentContainerStyle={styles.optionsWrapper}>
        {settingsOptions.map((item, idx) => (
          <TouchableOpacity
            key={item.label}
            onPress={item.onPress}
            style={styles.optionItem}
            activeOpacity={0.7}>
            <Text style={styles.optionLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  optionsWrapper: {
    paddingTop: 18,
    paddingHorizontal: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    flexGrow: 1,
  },
  optionItem: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 28,
  },
  optionLabel: {
    flex: 1,
    fontSize: 16,
    color: '#222',
    fontWeight: '500',
  },
});

export default Settings;
