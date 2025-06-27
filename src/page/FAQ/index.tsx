import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image as RNImage,
  TouchableOpacity,
} from 'react-native';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Svg, {Rect, Polygon} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import DaftarBukuIcon from '../../assets/daftarbuku.svg';
import PeminjamanIcon from '../../assets/peminjaman.svg';
import ProfileIcon from '../../assets/Vector.svg';
import BookCollectionIcon from '../../assets/bookcollection.svg';
import FAQIcon from '../../assets/FAQ.svg';
import HomeIcon from '../../assets/logo.svg';
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
};

const faqData = [
  {
    question: 'Cara Meminjam Buku',
    answer:
      '1. Pilih buku yang ingin dipinjam. 2. Klik tombol pinjam. 3. Konfirmasi peminjaman.',
  },
  {
    question: 'Cara Mengembalikan Buku',
    answer:
      '1. Buka menu pengembalian. 2. Pilih buku yang ingin dikembalikan. 3. Konfirmasi pengembalian.',
  },
  {
    question: 'Cara Cek riwayat peminjaman',
    answer:
      '1. Masuk ke menu riwayat. 2. Lihat daftar buku yang pernah dipinjam.',
  },
  {
    question: 'Cara Log Out',
    answer: '1. Buka menu profil. 2. Klik tombol log out.',
  },
];

const FAQ = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [expanded, setExpanded] = useState<number | null>(null);
  const [search, setSearch] = useState('');
  const {avatar} = useUser();

  const filteredFaq = faqData.filter(faq =>
    faq.question.toLowerCase().includes(search.toLowerCase()),
  );

  const user = {
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  };

  return (
    <View style={styles.container}>
      {/* Header biru diagonal */}
      <View style={styles.headerGradient}>
        <Svg height={110} width={width} style={StyleSheet.absoluteFill}>
          <Rect x="0" y="0" width={width} height="110" fill="#0A2A66" />
          <Polygon points={`0,20 ${width},0 ${width},50 0,70`} fill="#174BA7" />
          <Polygon
            points={`0,80 ${width},60 ${width},110 0,110`}
            fill="#174BA7"
          />
        </Svg>
        <Text style={styles.headerTitle}>FAQ</Text>
        <Text style={styles.headerSubtitle}>
          Pusat Bantuan Adventist Paal 2 Library
        </Text>
      </View>
      {/* Search Bar */}
      <View style={styles.searchBarWrapper}>
        <TextInput
          placeholder="Cari pertanyaan..."
          placeholderTextColor="#A0A0A0"
          value={search}
          onChangeText={setSearch}
          inputStyle={styles.searchBar}
        />
      </View>
      {/* FAQ Accordion */}
      <ScrollView
        contentContainerStyle={styles.faqList}
        showsVerticalScrollIndicator={false}>
        {filteredFaq.map((item, idx) => (
          <View key={idx} style={styles.accordionItem}>
            <TouchableOpacity
              style={styles.accordionHeader}
              onPress={() => setExpanded(expanded === idx ? null : idx)}
              activeOpacity={0.7}>
              <Text style={styles.accordionTitle}>{item.question}</Text>
              <Text style={styles.accordionIcon}>
                {expanded === idx ? '▲' : '▼'}
              </Text>
            </TouchableOpacity>
            {expanded === idx && (
              <View style={styles.accordionContent}>
                <Text style={styles.accordionAnswer}>{item.answer}</Text>
              </View>
            )}
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
          style={styles.navItem}
          onPress={() => navigation.navigate('BookCollection')}>
          <BookCollectionIcon width={24} height={24} />
          <Text style={styles.navText}>Book Collection</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
          <FAQIcon width={24} height={24} />
          <Text style={[styles.navText, styles.activeNavText]}>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('MyProfile')}>
          {avatar ? (
            <RNImage
              source={{uri: avatar}}
              style={{width: 24, height: 24, borderRadius: 12}}
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 0,
    marginTop: 18,
    textAlign: 'left',
  },
  headerSubtitle: {
    color: '#fff',
    fontSize: 12,
    marginTop: 2,
    marginBottom: 8,
    textAlign: 'left',
  },
  searchBarWrapper: {
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 15,
    color: '#333',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  faqList: {
    paddingHorizontal: 12,
    paddingBottom: 90,
  },
  accordionItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 1,
  },
  accordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  accordionTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#222',
  },
  accordionContent: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  accordionAnswer: {
    fontSize: 14,
    color: '#444',
  },
  accordionIcon: {
    fontSize: 12,
    color: '#666',
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

export default FAQ;
