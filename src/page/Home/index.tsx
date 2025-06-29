import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions,
  StatusBar,
  Image as RNImage,
  TouchableOpacity,
} from 'react-native';
import Button from '../../components/atoms/Button';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Svg, {Rect, Polygon} from 'react-native-svg';
import Logo from '../../assets/logo.svg';
import ProfileAvatar from '../../assets/profile.svg';
import Image22 from '../../../src/assets/image 22.svg';
import Image23 from '../../../src/assets/image 23.svg';
import Image24 from '../../assets/image 24.svg';
import Image25 from '../../../src/assets/image25.svg';
import Image27 from '../../assets/images 27 1.svg';
import PeminjamanIcon from '../../assets/peminjaman.svg';
import PengembalianIcon from '../../assets/pengembalian.svg';
import DaftarBukuIcon from '../../assets/daftarbuku.svg';
import RiwayatPeminjamanIcon from '../../assets/riwayatpeminjaman.svg';
import LinearGradient from 'react-native-linear-gradient';
import BookCollectionIcon from '../../assets/bookcollection.svg';
import FAQIcon from '../../assets/FAQ.svg';
import ProfileIcon from '../../assets/profile.svg';
import HomeIcon from '../../assets/logo.svg';

const {width} = Dimensions.get('window');

type RootStackParamList = {
  Main: undefined;
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
  Profile: undefined;
  BookCollection: undefined;
  FAQ: undefined;
  RiwayatPinjam: undefined;
  Pengembalian: undefined;
  Peminjaman: undefined;
};

const bookImages = [
  {Svg: Image22, title: 'Matematika'},
  {Svg: Image23, title: 'IPA'},
  {Svg: Image25, title: 'Bahasa Indonesia'},
  {Svg: Image27, title: 'Cut Nyak Dien'},
];

const menuItems = [
  {icon: PeminjamanIcon, label: 'Peminjaman', nav: 'Peminjaman'},
  {icon: PengembalianIcon, label: 'Pengembalian', nav: 'Pengembalian'},
  {icon: DaftarBukuIcon, label: 'Daftar Buku', nav: 'BookCollection'},
  {
    icon: RiwayatPeminjamanIcon,
    label: 'Riwayat Peminjaman',
    nav: 'RiwayatPinjam',
  },
];

const newArrivals = [
  {Svg: Image22, title: 'Matematika', isFirst: true},
  {Svg: Image23, title: 'IPA'},
  {Svg: Image25, title: 'Bahasa Indonesia'},
];

const borrowedBook = {
  Svg: Image23,
  title: 'BUKU IPA (SMP)',
  author: 'TIM ABDI GURU',
  borrowDate: '12/10/2024',
  returnDate: '14/10/2024',
};

const avatarUrl = 'https://randomuser.me/api/portraits/men/1.jpg';

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#174BA7" />
      {/* Header biru dengan logo, teks, dan avatar */}
      <View style={styles.headerBlue}>
        <Logo width={63} height={64} style={styles.logo} />
        <View style={styles.headerTextWrap}>
          <Text style={styles.headerTitle}>Adventist Paal 2 Library</Text>
          <Text style={styles.headerHi}>Hi, John</Text>
        </View>
        <View style={styles.avatar}>
          <ProfileIcon width={35} height={35} />
        </View>
      </View>
      {/* Card menu overlap, rounded besar, shadow */}
      <View style={styles.menuCard}>
        <FlatList
          data={menuItems}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.label}
          contentContainerStyle={styles.menuList}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.menuItemWrapper}>
              <View style={styles.menuIconCircle}>
                <item.icon width={38} height={38} />
              </View>
              <Text style={styles.menuLabel}>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <ScrollView style={{flex: 1}} contentContainerStyle={{paddingBottom: 90}}>
        {/* New arrivals */}
        <Text style={styles.sectionTitle}>New arrivals</Text>
        <FlatList
          data={newArrivals}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.title}
          contentContainerStyle={styles.arrivalsList}
          renderItem={({item}) => (
            <View style={styles.arrivalCard}>
              <item.Svg width={110} height={150} style={styles.arrivalImage} />
              {item.isFirst && (
                <TouchableOpacity style={styles.plusButton}>
                  <Text style={styles.plusText}>+</Text>
                </TouchableOpacity>
              )}
              <Text style={styles.arrivalTitle}>{item.title}</Text>
            </View>
          )}
        />
        {/* Previously Borrowed */}
        <Text style={styles.sectionTitle}>Previously Borrowed</Text>
        <View style={styles.borrowedCard}>
          <borrowedBook.Svg
            width={60}
            height={90}
            style={styles.borrowedImage}
          />
          <View style={styles.borrowedInfo}>
            <View style={styles.borrowedRow}>
              <Text style={styles.borrowedLabel}>Judul Buku</Text>
              <Text style={styles.borrowedValue}>{borrowedBook.title}</Text>
            </View>
            <View style={styles.borrowedRow}>
              <Text style={styles.borrowedLabel}>Penulis</Text>
              <Text style={styles.borrowedValue}>{borrowedBook.author}</Text>
            </View>
            <View style={styles.borrowedRow}>
              <Text style={styles.borrowedLabel}>Tanggal Dipinjam</Text>
              <Text style={styles.borrowedValue}>
                {borrowedBook.borrowDate}
              </Text>
            </View>
            <View style={styles.borrowedRow}>
              <Text style={styles.borrowedLabel}>Tanggal Dikembalikan</Text>
              <Text style={styles.borrowedValue}>
                {borrowedBook.returnDate}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
          <HomeIcon width={24} height={24} />
          <Text style={[styles.navText, styles.activeNavText]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('BookCollection')}>
          <BookCollectionIcon width={24} height={24} />
          <Text style={styles.navText}>Book Collection</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('FAQ')}>
          <FAQIcon width={24} height={24} />
          <Text style={styles.navText}>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Profile')}>
          <ProfileIcon width={24} height={24} />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerBlue: {
    backgroundColor: '#174BA7',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 25,
    paddingHorizontal: 20,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    zIndex: 10,
  },
  logo: {
    marginRight: 12,
  },
  headerTextWrap: {
    flex: 1,
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  headerHi: {
    color: '#fff',
    fontSize: 14,
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 2,
    borderColor: '#fff',
    marginLeft: 10,
  },
  menuCard: {
    backgroundColor: '#fff',
    borderRadius: 1,
    marginTop: 20,
    paddingVertical: 18,
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 1,
    zIndex: 1,
  },
  menuList: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemWrapper: {
    alignItems: 'center',
    marginHorizontal: 16,
  },
  menuIconCircle: {
    width: 54,
    height: 54,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 4,
    elevation: 2,
  },
  menuLabel: {
    fontSize: 10,
    color: '#222',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 24,
    marginLeft: 20,
    marginBottom: 12,
  },
  arrivalsList: {
    paddingLeft: 16,
    paddingBottom: 8,
  },
  arrivalCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginRight: 16,
    alignItems: 'center',
    width: 140,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 1,
    position: 'relative',
  },
  arrivalImage: {
    width: 110,
    height: 150,
    borderRadius: 10,
    marginBottom: 8,
    resizeMode: 'cover',
  },
  plusButton: {
    position: 'absolute',
    left: 8,
    bottom: 8,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#174BA7',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  plusText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -2,
  },
  arrivalTitle: {
    fontSize: 14,
    color: '#222',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  borrowedCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginHorizontal: 16,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 1,
  },
  borrowedImage: {
    width: 60,
    height: 90,
    borderRadius: 8,
    marginRight: 14,
    resizeMode: 'cover',
  },
  borrowedInfo: {
    flex: 1,
  },
  borrowedRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  borrowedLabel: {
    fontSize: 12,
    color: '#888',
    fontWeight: 'bold',
    marginRight: 8,
  },
  borrowedValue: {
    fontSize: 13,
    color: '#222',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'right',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingVertical: 8,
    paddingHorizontal: 8,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: {width: 0, height: -2},
    shadowRadius: 4,
    elevation: 8,
  },
  navItem: {
    flex: 1,
    marginHorizontal: 4,
    backgroundColor: 'transparent',
    borderRadius: 10,
    paddingVertical: 6,
    alignItems: 'center',
  },
  activeNavItem: {
    backgroundColor: '#E5F0FF',
  },
  navText: {
    color: '#174BA7',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 2,
  },
  activeNavText: {
    color: '#174BA7',
    fontWeight: 'bold',
  },
});

export default Home;
