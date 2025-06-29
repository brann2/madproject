import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Button from '../../components/atoms/Button';
import Svg, {Rect, Polygon} from 'react-native-svg';
import ArrowBack from '../../assets/Vector7.svg';
import GlobeIcon from '../../assets/globalr.svg';
import PhoneIcon from '../../assets/Group 97.svg';
import FacebookIcon from '../../assets/Group 96.svg';
import InstagramIcon from '../../assets/Group 95.svg';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const contacts = [
  {icon: GlobeIcon, value: 'smpadvent4paal2manado.com'},
  {icon: PhoneIcon, value: '(0431) 841700'},
  {icon: FacebookIcon, value: 'SMP Advent 4 Paal 2 Manado'},
  {icon: InstagramIcon, value: '@smp advent 4 paal 2 manado'},
];

const Help = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header biru diagonal dengan back arrow */}
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
        <Text style={styles.headerTitle}>Help Center</Text>
      </View>
      <View style={styles.contentWrapper}>
        <Text style={styles.contactTitle}>Contact Us</Text>
        {contacts.map((item, idx) => (
          <View key={item.value} style={styles.contactRow}>
            <View style={styles.iconCircle}>
              <item.icon width={22} height={22} />
            </View>
            <Text style={styles.contactText}>{item.value}</Text>
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
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    marginBottom: 24,
    fontFamily: 'Poppins-Regular',
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E3F0FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  contactText: {
    fontSize: 15,
    color: '#222',
    fontFamily: 'Poppins-Regular',
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default Help;
