import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Svg, {Rect, Polygon} from 'react-native-svg';
import Image22 from '../../assets/image 22.svg';
import Image23 from '../../assets/image 23.svg';
import Image25 from '../../assets/image25.svg';
import Image27 from '../../assets/images 27 1.svg';
import LinearGradient from 'react-native-linear-gradient';
import DaftarBukuIcon from '../../assets/daftarbuku.svg';
import PeminjamanIcon from '../../assets/peminjaman.svg';
import ProfileIcon from '../../assets/Vector.svg';
import BookCollectionIcon from '../../assets/bookcollection.svg';
import FAQIcon from '../../assets/FAQ.svg';
import HomeIcon from '../../assets/logo.svg';
import {Image as RNImage} from 'react-native';
import {useUser} from '../../context/UserContext';

const {width} = Dimensions.get('window');

type RootStackParamList = {
  Main: undefined;
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
  Profile: undefined;
  BookCollection: undefined;
  FAQ: undefined;
  MyProfile: undefined;
  UpdateProfile: undefined;
};

const books = [
  {
    id: '001',
    Svg: Image27,
    title: 'IPS',
    author: 'N.SUPARNO-HARYO TAMTOMO',
    publisher: 'PT. Penerbit Erlangga Mahameru',
    year: '08 Jun 2017',
    pages: 88,
    stock: 100,
  },
  {
    id: '002',
    Svg: Image22,
    title: 'The Jungle Book',
    author: 'Saviour Priotta',
    publisher: 'Kepustakaan Populer Gramedia',
    year: '08 Jun 2017',
    pages: 50,
    stock: 75,
  },
  {
    id: '003',
    Svg: Image25,
    title: 'Best Basic English Starts Today',
    author: 'Arruzz Media',
    publisher: 'Arruzz Media',
    year: '08 Jun 2017',
    pages: 120,
    stock: 40,
  },
];

const user = {
  avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
};

const BookCollection = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {avatar} = useUser();
  return (
    <View style={styles.container}>
      {/* Header biru dengan garis diagonal seperti Home */}
      <View style={styles.headerGradient}>
        <Svg height={110} width={width} style={StyleSheet.absoluteFill}>
          <Rect x="0" y="0" width={width} height="110" fill="#0A2A66" />
          <Polygon points={`0,20 ${width},0 ${width},50 0,70`} fill="#174BA7" />
          <Polygon
            points={`0,80 ${width},60 ${width},110 0,110`}
            fill="#174BA7"
          />
        </Svg>
        <Text style={styles.headerTitle}>Book Collection</Text>
      </View>
      {/* List buku */}
      <ScrollView
        contentContainerStyle={styles.listWrapper}
        showsVerticalScrollIndicator={false}>
        {books.map((item, idx) => (
          <View style={styles.card} key={item.id}>
            <View style={styles.coverWrapper}>
              <item.Svg width={70} height={100} />
            </View>
            <View style={styles.detailWrapper}>
              <Text style={styles.detailRow}>
                <Text style={styles.label}>ID</Text> : {item.id}
              </Text>
              <Text style={styles.detailRow}>
                <Text style={styles.label}>Judul Buku</Text> : {item.title}
              </Text>
              <Text style={styles.detailRow}>
                <Text style={styles.label}>Pengarang</Text> : {item.author}
              </Text>
              <Text style={styles.detailRow}>
                <Text style={styles.label}>Penerbit</Text> : {item.publisher}
              </Text>
              <Text style={styles.detailRow}>
                <Text style={styles.label}>Tahun Terbit</Text> : {item.year}
              </Text>
              <Text style={styles.detailRow}>
                <Text style={styles.label}>Jumlah Halaman</Text> : {item.pages}
              </Text>
              <Text style={styles.detailRow}>
                <Text style={styles.label}>Jumlah Buku</Text> : {item.stock}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
      {/* Bottom Navigation */}
      <LinearGradient
        colors={['rgba(255,255,255,0.9)', 'rgba(255,255,255,1)']}
        style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Home')}>
          <HomeIcon width={24} height={24} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.navItem, styles.activeNavItem]}
          onPress={() => {}}>
          <BookCollectionIcon width={24} height={24} />
          <Text style={[styles.navText, styles.activeNavText]}>
            Book Collection
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('FAQ')}>
          <FAQIcon width={24} height={24} />
          <Text style={styles.navText}>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('MyProfile')}>
          {avatar ? (
            <RNImage
              source={{uri: avatar}}
              style={{
                width: 24,
                height: 24,
                borderRadius: 12,
                resizeMode: 'cover',
              }}
            />
          ) : (
            <View
              style={{
                width: 24,
                height: 24,
                borderRadius: 12,
                backgroundColor: '#eee',
              }}
            />
          )}
          <Text style={styles.navText}>Profile</Text>
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
    height: 110,
    justifyContent: 'flex-end',
    paddingBottom: 16,
    paddingHorizontal: 20,
    position: 'relative',
    marginBottom: 8,
    overflow: 'hidden',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 0,
    marginTop: 32,
    textAlign: 'left',
  },
  listWrapper: {
    paddingHorizontal: 12,
    paddingBottom: 24,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 14,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 2,
  },
  coverWrapper: {
    marginRight: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  detailRow: {
    fontSize: 13,
    color: '#222',
    marginBottom: 2,
  },
  label: {
    fontWeight: 'bold',
    color: '#174BA7',
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

export default BookCollection;
