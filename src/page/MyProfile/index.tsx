import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useUser} from '../../context/UserContext';
import {getAuth, signOut} from 'firebase/auth';
// Ganti dengan icon SVG atau PNG kamu jika ada
// import ProfileIcon from '../../assets/profile.svg';
// import SettingsIcon from '../../assets/settings.svg';
// import HelpIcon from '../../assets/help.svg';
// import LogoutIcon from '../../assets/logout.svg';

const MyProfile = () => {
  const navigation = useNavigation();
  const {avatar, name} = useUser();

  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.avatarContainer}>
        {avatar ? (
          <Image source={{uri: avatar}} style={styles.avatar} />
        ) : (
          <View style={[styles.avatar, {backgroundColor: '#eee'}]} />
        )}
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.menu}>
        <MenuItem
          // icon={<ProfileIcon width={24} height={24} />}
          label="Profile"
          onPress={() => (navigation as any).navigate('Profile')}
        />
        <MenuItem
          // icon={<SettingsIcon width={24} height={24} />}
          label="Settings"
          onPress={() => (navigation as any).navigate('Settings')}
        />
        <MenuItem
          // icon={<HelpIcon width={24} height={24} />}
          label="Help"
          onPress={() => (navigation as any).navigate('Help')}
        />
        <MenuItem
          // icon={<LogoutIcon width={24} height={24} />}
          label="Logout"
          onPress={handleLogout}
        />
      </View>
    </View>
  );
};

const MenuItem = ({
  icon = null,
  label,
  onPress,
}: {
  icon?: any;
  label: string;
  onPress: () => void;
}) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    {/* {icon && <View style={styles.menuIcon}>{icon}</View>} */}
    <Text style={styles.menuLabel}>{label}</Text>
    <Text style={styles.menuArrow}>{'>'}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F7F8FA'},
  header: {
    backgroundColor: '#174BA7',
    height: 120,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 0,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 16,
    zIndex: 1,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: '#eee',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 8,
    color: '#222',
  },
  menu: {marginHorizontal: 24, marginTop: 16},
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 2,
    elevation: 1,
  },
  menuLabel: {flex: 1, fontSize: 16, color: '#222'},
  menuArrow: {color: '#BFC4CA', fontSize: 18},
});

export default MyProfile;
