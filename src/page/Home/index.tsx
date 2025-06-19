import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, Dimensions, TouchableOpacity, StatusBar, Image as RNImage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Svg, { Rect, Polygon } from 'react-native-svg';
import Logo from '../../assets/logo.svg';
import ProfileAvatar from '../../assets/profile.svg';
import Image22 from '../../assets/image 22.svg';
import Image23 from '../../assets/image 23.svg';
import Image24 from '../../assets/image 24.svg';
import Image25 from '../../assets/image25.svg';
import Image27 from '../../assets/images 27 1.svg';
import PeminjamanIcon from '../../assets/peminjaman.svg';
import PengembalianIcon from '../../assets/pengembalian.svg';
import DaftarBukuIcon from '../../assets/daftarbuku.svg';
import RiwayatPeminjamanIcon from '../../assets/riwayatpeminjaman.svg';
import LinearGradient from 'react-native-linear-gradient';
import BookCollectionIcon from '../../assets/bookcollection.svg';
import FAQIcon from '../../assets/FAQ.svg';
import ProfileIcon from '../../assets/Vector.svg';

const { width } = Dimensions.get('window');

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
  { Svg: Image22, title: 'Matematika' },
  { Svg: Image23, title: 'IPA' },
  { Svg: Image25, title: 'Bahasa Indonesia' },
  { Svg: Image27, title: 'Cut Nyak Dien' },
];

const menuItems = [
  { icon: PeminjamanIcon, label: 'Peminjaman' },
  { icon: PengembalianIcon, label: 'Pengembalian' },
  { icon: DaftarBukuIcon, label: 'Daftar Buku' },
  { icon: RiwayatPeminjamanIcon, label: 'Riwayat Peminjaman' },
];

const user = {
  avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
};

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0A2A66', '#174BA7']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <StatusBar barStyle="light-content" backgroundColor="#0A2A66" />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {/* Header Section */}
          <View style={styles.headerGradient}>
            <Svg height={280} width={width} style={StyleSheet.absoluteFill}>
              <Rect x="0" y="0" width={width} height="280" fill="#0A2A66" />
              <Polygon points={`0,40 ${width},0 ${width},60 0,100`} fill="#174BA7" />
              <Polygon points={`0,120 ${width},80 ${width},140 0,180`} fill="#174BA7" />
            </Svg>
            
            {/* Header Content */}
            <View style={styles.headerContent}>
              <View style={styles.headerTopRow}>
                <Logo width={48} height={48} style={{ marginLeft: 8 }} />
                <Text style={styles.libraryName}>Adventist Paal 2 Library</Text>
              </View>
            </View>
          </View>

          {/* Content Area (White Background) */}
          <View style={styles.contentArea}>
            {/* Menu Horizontal */}
            <View style={styles.menuContainer}>
              <FlatList
                data={menuItems}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.menuList}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => {
                      if (item.label === 'Peminjaman') {
                        navigation.navigate('Peminjaman');
                      } else if (item.label === 'Pengembalian') {
                        navigation.navigate('Pengembalian');
                      } else if (item.label === 'Riwayat Peminjaman') {
                        navigation.navigate('RiwayatPinjam');
                      }
                    }}
                  >
                    <View style={styles.menuIcon}>
                      <item.icon width={32} height={32} />
                    </View>
                    <Text style={styles.menuLabel}>{item.label}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.label}
              />
            </View>

            {/* New Arrivals */}
            <View style={styles.sectionTitleRow}>
              <Text style={styles.sectionTitle}>New arrivals</Text>
              <Text style={styles.seeAll}>See All</Text>
            </View>
            <View style={styles.sliderWrapper}>
              <FlatList
                data={bookImages}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, idx) => idx.toString()}
                contentContainerStyle={styles.bookList}
                renderItem={({ item }) => (
                  <View style={styles.bookCard}>
                    <item.Svg width={100} height={150} />
                    <Text style={styles.bookTitle}>{item.title}</Text>
                  </View>
                )}
              />
            </View>

            {/* Previously Borrowed */}
            <Text style={styles.sectionTitle}>Previously Borrowed</Text>
            <View style={styles.borrowedCard}>
              <Image23 width={60} height={90} />
              <View style={{ marginLeft: 12 }}>
                <Text style={styles.borrowedTitle}>Judul Buku: IPA SMP</Text>
                <Text style={styles.borrowedDetail}>Penulis: TIM ABDI GURU</Text>
                <Text style={styles.borrowedDetail}>Tanggal Dipinjam: 12/10/2024</Text>
                <Text style={styles.borrowedDetail}>Tanggal Dikembalikan: 14/10/2024</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
      
      {/* Bottom Navigation */}
      <LinearGradient
        colors={['rgba(255,255,255,0.9)', 'rgba(255,255,255,1)']}
        style={styles.bottomNav}
      >
        <TouchableOpacity 
          style={[styles.navItem, styles.activeNavItem]}
          onPress={() => {}}
        >
          <Logo width={24} height={24} />
          <Text style={[styles.navText, styles.activeNavText]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('BookCollection')}
        >
          <BookCollectionIcon width={24} height={24} />
          <Text style={styles.navText}>Book Collection</Text>
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
          onPress={() => navigation.navigate('Profile')}
        >
          <ProfileIcon width={24} height={24} />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
  },
  headerGradient: {
    paddingTop: StatusBar.currentHeight || 0,
    height: 280,
    position: 'relative',
    overflow: 'hidden',
  },
  headerContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    zIndex: 1,
  },
  headerTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  avatarImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  libraryName: { 
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 12,
    marginBottom: 0,
  },
  greeting: { 
    color: '#fff',
    fontSize: 16,
    marginBottom: 24,
  },
  contentArea: {
    flex: 1,
    backgroundColor: '#F7F9FB',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    paddingTop: 20,
    paddingBottom: 80,
  },
  menuContainer: {
    marginBottom: 20,
  },
  menuList: {
    paddingHorizontal: 20,
  },
  menuItem: {
    alignItems: 'center',
    marginRight: 24,
  },
  menuIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  menuLabel: { 
    color: '#333',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  sectionTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: { 
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAll: { 
    fontSize: 14,
    color: '#174BA7',
    textDecorationLine: 'underline',
  },
  sliderWrapper: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    marginBottom: 24,
  },
  bookList: { 
    paddingHorizontal: 20,
  },
  bookCard: {
    width: 140,
    height: 200,
    backgroundColor: '#174BA7',
    borderRadius: 20,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
    paddingTop: 8,
  },
  bookTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 0,
    textAlign: 'center',
  },
  borrowedCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 20,
    marginTop: 32,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  borrowedTitle: { 
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
    color: '#333',
  },
  borrowedDetail: { 
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
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
  activeNavItem: {
    backgroundColor: 'rgba(23, 75, 167, 0.1)',
    borderRadius: 12,
  },
  navText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
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
});

export default Home; 