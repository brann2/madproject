import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image as RNImage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Svg, { Rect, Polygon } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import ProfileIcon from '../../assets/Vector.svg';
import VectorProfile from '../../assets/Vector.svg';
import SettingsIcon from '../../assets/Vector2.svg';
import HelpIcon from '../../assets/Vector7.svg';
import LogoutIcon from '../../assets/Group 2.svg';
import DaftarBukuIcon from '../../assets/daftarbuku.svg';
import HomeIcon from '../../assets/logo.svg';
import FAQIcon from '../../assets/FAQ.svg';
import BookCollectionIcon from '../../assets/bookcollection.svg';

const { width } = Dimensions.get('window');

type RootStackParamList = {
  Main: undefined;
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
  Profile: undefined;
  BookCollection: undefined;
  FAQ: undefined;
  Settings: undefined;
};

const user = {
  name: 'John',
  avatar: null,
};

const menu = [
  { label: 'Profile', icon: VectorProfile, onPress: (navigation: any) => navigation.navigate('UpdateProfile') },
  { label: 'Settings', icon: SettingsIcon, onPress: (navigation: any) => navigation.navigate('Settings') },
  { label: 'Help', icon: LogoutIcon, onPress: (navigation: any) => navigation.navigate('Help') },
  { label: 'Logout', icon: HelpIcon, onPress: (navigation: any) => navigation.navigate('Login') },
];

const Profile = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      {/* Header biru diagonal dan judul di atas avatar */}
      <View style={styles.headerGradient}>
        <Svg height={140} width={width} style={StyleSheet.absoluteFill}>
          <Rect x="0" y="0" width={width} height="140" fill="#0A2A66" />
          <Polygon points={`0,30 ${width},0 ${width},80 0,120`} fill="#174BA7" />
          <Polygon points={`0,110 ${width},90 ${width},140 0,140`} fill="#174BA7" />
        </Svg>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>
      {/* Avatar */}
      <View style={styles.avatarWrapper}>
        <View style={styles.avatarCircle}>
          <ProfileIcon width={60} height={60} />
        </View>
      </View>
      {/* Nama User */}
      <Text style={styles.name}>{user.name}</Text>
      {/* Menu List */}
      <View style={styles.menuWrapper}>
        {menu.map((item, idx) => (
          <TouchableOpacity
            key={item.label}
            style={styles.menuItem}
            activeOpacity={0.7}
            onPress={() => item.onPress(navigation)}
          >
            <View style={styles.menuIconWrapper}>
              <item.icon width={26} height={26} />
            </View>
            <Text style={styles.menuLabel}>{item.label}</Text>
            <Text style={styles.menuArrow}>{'>'}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Bottom Navigation */}
      <LinearGradient
        colors={['rgba(255,255,255,0.9)', 'rgba(255,255,255,1)']}
        style={styles.bottomNav}
      >
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Home')}
        >
          <HomeIcon width={24} height={24} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('BookCollection')}
        >
          <BookCollectionIcon width={24} height={24} />
          <Text style={[styles.navText, styles.activeNavText]}>Book Collection</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('FAQ')}
        >
          <FAQIcon width={24} height={24} />
          <Text style={styles.navText}>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => {}}
        >
          <ProfileIcon width={24} height={24} />
          <Text style={[styles.navText, styles.activeNavText]}>Profile</Text>
        </TouchableOpacity>
      </LinearGradient>
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
    paddingBottom: 16,
    paddingHorizontal: 20,
    position: 'relative',
    marginBottom: 8,
    overflow: 'hidden',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    top: 38,
    left: 0,
    right: 0,
    textAlign: 'center',
    zIndex: 2,
  },
  avatarWrapper: {
    alignItems: 'center',
    marginTop: -40,
    marginBottom: 6,
  },
  avatarCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 2,
    borderColor: '#E0E0E0',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    marginBottom: 18,
  },
  menuWrapper: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 18,
    marginTop: 8,
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuIconWrapper: {
    width: 32,
    alignItems: 'center',
    marginRight: 18,
  },
  menuLabel: {
    flex: 1,
    fontSize: 16,
    color: '#222',
    fontWeight: '500',
  },
  menuArrow: {
    fontSize: 18,
    color: '#B0B0B0',
    marginLeft: 8,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    flex: 1,
  },
  activeNavText: {
    color: '#174BA7',
    fontWeight: '600',
  },
  navAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#eee',
    resizeMode: 'cover',
  },
  navText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});

export default Profile; 