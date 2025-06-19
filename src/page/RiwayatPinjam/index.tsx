import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Svg, { Rect, Polygon } from 'react-native-svg';
import ArrowBack from '../../assets/Vector7.svg';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const historyData = [
  {
    id: '001',
    title: 'IPS',
    author: 'N.SUPARNO-HARYO TAMTOMO',
    borrowDate: '12/10/2024',
    returnDate: '14/10/2024',
  },
  {
    id: '002',
    title: 'The Jungle Book',
    author: 'Saviour Pirotta',
    borrowDate: '08/10/2024',
    returnDate: '11/10/2024',
  },
  {
    id: '003',
    title: 'Best Basic English Start Today',
    author: 'Arruzz Media',
    borrowDate: '26/09/2024',
    returnDate: '28/09/2024',
  },
];

const RiwayatPinjam = () => {
  const navigation = useNavigation();
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
        <Text style={styles.headerTitle}>Riwayat Peminjaman</Text>
      </View>
      <View style={styles.contentWrapper}>
        <Text style={styles.sectionTitle}>Riwayat Buku yang Dipinjam</Text>
        <ScrollView contentContainerStyle={styles.cardsWrapper}>
          {historyData.map((item, idx) => (
            <View key={item.id} style={styles.card}>
              <View style={styles.row}><Text style={styles.label}>ID</Text><Text style={styles.value}>: {item.id}</Text></View>
              <View style={styles.row}><Text style={styles.label}>Judul Buku</Text><Text style={styles.value}>: {item.title}</Text></View>
              <View style={styles.row}><Text style={styles.label}>Pengarang</Text><Text style={styles.value}>: {item.author}</Text></View>
              <View style={styles.row}><Text style={styles.label}>Tanggal Peminjaman</Text><Text style={styles.value}>: {item.borrowDate}</Text></View>
              <View style={styles.row}><Text style={styles.label}>Tanggal Kembali</Text><Text style={styles.value}>: {item.returnDate}</Text></View>
            </View>
          ))}
        </ScrollView>
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
    paddingTop: 24,
    paddingHorizontal: 16,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    marginBottom: 18,
    fontFamily: 'Poppins-Regular',
  },
  cardsWrapper: {
    paddingBottom: 32,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    padding: 16,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 1,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  label: {
    color: '#222',
    fontSize: 14,
    minWidth: 120,
    fontFamily: 'Poppins-Regular',
  },
  value: {
    color: '#222',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default RiwayatPinjam; 