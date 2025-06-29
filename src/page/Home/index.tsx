import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../assets/logo.svg';
import ProfileIcon from '../../assets/profile.svg';
import Image22 from '../../../src/assets/image 22.svg';
import Image23 from '../../../src/assets/image 23.svg';
import Image25 from '../../assets/image25.svg';
import PeminjamanIcon from '../../assets/peminjaman.svg';
import PengembalianIcon from '../../assets/pengembalian.svg';
import DaftarBukuIcon from '../../assets/daftarbuku.svg';
import RiwayatPeminjamanIcon from '../../assets/riwayatpeminjaman.svg';
import BookCollectionIcon from '../../assets/bookcollection.svg';
import FAQIcon from '../../assets/FAQ.svg';
import HomeIcon from '../../assets/logo.svg';

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

const menuItems = [
  {icon: PeminjamanIcon, label: 'Peminjaman', nav: 'Peminjaman'},
  {icon: PengembalianIcon, label: 'Pengembalian', nav: 'Pengembalian'},
  {icon: DaftarBukuIcon, label: 'Daftar Buku', nav: 'BookCollection'},
  {icon: RiwayatPeminjamanIcon, label: 'Riwayat Peminjaman', nav: 'RiwayatPinjam'},
];

const newArrivals = [
  {Svg: Image22, title: 'Matematika'},
  {Svg: Image23, title: 'IPA'},
  {Svg: Image25, title: 'Bahasa Indonesia'},
];

const borrowedBook = {
  Svg: Image23,
  title: 'BUKU IPA SMP/MTs KELAS 8',
  author: 'TIM ABDI GURU',
  borrowDate: '12/10/2024',
  returnDate: '14/10/2024',
};

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#174BA7" />
      <LinearGradient
        colors={['#174BA7', '#0A2A66']}
        style={styles.headerBlue}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <Logo width={63} height={64} style={styles.logo} />
        <View style={styles.headerTextWrap}>
          <Text style={styles.headerTitle}>Adventist Paal 2 Library</Text>
          <Text style={styles.headerHi}>Hi, John</Text>
        </View>
        <View style={styles.avatar}>
          <ProfileIcon width={35} height={35} />
        </View>
      </LinearGradient>

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
        {/* New Arrivals Card */}
        <View style={styles.sectionCardBlue}>
          <Text style={styles.sectionTitleWhite}>New arrivals</Text>
          <FlatList
            data={newArrivals}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.title}
            contentContainerStyle={styles.arrivalsList}
            renderItem={({item}) => (
              <View style={styles.arrivalCard}>
                <item.Svg width={110} height={150} style={styles.arrivalImage} />
                <Text style={styles.arrivalTitle}>{item.title}</Text>
              </View>
            )}
          />
        </View>

        {/* Previously Borrowed Card */}
        <View style={styles.sectionCardWhite}>
          <Text style={styles.sectionTitleBlack}>Previously Borrowed</Text>
          <View style={styles.borrowedCardInner}>
            <borrowedBook.Svg width={80} height={120} style={styles.borrowedImage} />
            <View style={styles.borrowedInfo}>
              <Text style={styles.borrowedLabel}>Judul Buku</Text>
              <Text style={styles.borrowedValue}>{borrowedBook.title}</Text>
              <Text style={styles.borrowedLabel}>Penulis</Text>
              <Text style={styles.borrowedValue}>{borrowedBook.author}</Text>
              <Text style={styles.borrowedLabel}>Tanggal Dipinjam</Text>
              <Text style={styles.borrowedValue}>{borrowedBook.borrowDate}</Text>
              <Text style={styles.borrowedLabel}>Tanggal Dikembalikan</Text>
              <Text style={styles.borrowedValue}>{borrowedBook.returnDate}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

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
  root: {flex: 1, backgroundColor: '#FFFFFF'},
  headerBlue: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 50,
    paddingHorizontal: 20,
  },
  logo: {marginRight: 12},
  headerTextWrap: {flex: 1, justifyContent: 'center'},
  headerTitle: {color: '#fff', fontSize: 18, fontWeight: 'bold', marginBottom: 2},
  headerHi: {color: '#fff', fontSize: 14},
  avatar: {
    width: 38, height: 38, borderRadius: 19, borderWidth: 2, borderColor: '#fff', marginLeft: 10,
  },
  menuCard: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -24,
    paddingVertical: 18,
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -4},
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 6,
    zIndex: 1,
  },
  menuList: {flexDirection: 'row', alignItems: 'center'},
  menuItemWrapper: {alignItems: 'center', marginHorizontal: 16},
  menuIconCircle: {
    width: 54, height: 54, borderRadius: 12, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center',
    marginBottom: 6, borderWidth: 1, borderColor: '#E5E5E5',
    shadowColor: '#000', shadowOpacity: 1, shadowOffset: {width: 1, height: 1}, shadowRadius: 4, elevation: 2,
  },
  menuLabel: {fontSize: 10, color: '#222', fontWeight: 'bold', textAlign: 'center'},
  sectionCardBlue: {
    backgroundColor: '#174BA7',
    borderRadius: 20,
    marginHorizontal: 16,
    marginTop: 20,
    paddingVertical: 16,
  },
  sectionTitleWhite: {fontSize: 18, fontWeight: 'bold', color: '#fff', marginLeft: 16, marginBottom: 12},
  arrivalsList: {paddingLeft: 16, paddingBottom: 8},
  arrivalCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginRight: 16,
    alignItems: 'center',
    width: 130,
    padding: 10,
  },
  arrivalImage: {
    width: 110,
    height: 150,
    borderRadius: 10,
    marginBottom: 8,
    resizeMode: 'cover',
  },
  arrivalTitle: {fontSize: 14, color: '#222', fontWeight: 'bold', textAlign: 'center'},
  sectionCardWhite: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 16,
    marginTop: 20,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  sectionTitleBlack: {fontSize: 18, fontWeight: 'bold', color: '#222', marginBottom: 12},
  borrowedCardInner: {flexDirection: 'row', alignItems: 'flex-start'},
  borrowedImage: {borderRadius: 8, marginRight: 14},
  borrowedInfo: {flex: 1},
  borrowedLabel: {fontSize: 12, color: '#888', fontWeight: 'bold', marginTop: 4},
  borrowedValue: {fontSize: 13, color: '#222', fontWeight: 'bold'},
  bottomNav: {
    flexDirection: 'row', backgroundColor: '#fff',
    borderTopLeftRadius: 18, borderTopRightRadius: 18,
    paddingVertical: 8, paddingHorizontal: 8,
    position: 'absolute', left: 0, right: 0, bottom: 0,
    justifyContent: 'space-between',
    shadowColor: '#000', shadowOpacity: 0.06, shadowOffset: {width: 0, height: -2}, shadowRadius: 4, elevation: 8,
  },
  navItem: {flex: 1, marginHorizontal: 4, backgroundColor: 'transparent', borderRadius: 10, paddingVertical: 6, alignItems: 'center'},
  activeNavItem: {backgroundColor: '#E5F0FF'},
  navText: {color: '#174BA7', fontWeight: 'bold', fontSize: 12, textAlign: 'center', marginTop: 2},
  activeNavText: {color: '#174BA7', fontWeight: 'bold'},
});

export default Home;
