import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import Svg, {Rect, Polygon} from 'react-native-svg';
import ArrowBack from '../../assets/Vector7.svg';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const Peminjaman = () => {
  const navigation = useNavigation();
  const [nama, setNama] = useState('');
  const [tglPinjam, setTglPinjam] = useState('');
  const [tglKembali, setTglKembali] = useState('');
  const [judul, setJudul] = useState('');

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
        <Text style={styles.headerTitle}>Formulir Peminjaman</Text>
      </View>
      <View style={styles.contentWrapper}>
        <ScrollView
          contentContainerStyle={styles.formWrapper}
          keyboardShouldPersistTaps="handled">
          <View style={styles.inputGroup}>
            <TextInput
              label="Nama"
              value={nama}
              onChangeText={setNama}
              placeholder=""
              placeholderTextColor="#BFC4CA"
              inputStyle={styles.input}
              labelStyle={styles.label}
            />
          </View>
          <View style={styles.inputGroup}>
            <TextInput
              label="Tanggal Peminjaman"
              value={tglPinjam}
              onChangeText={setTglPinjam}
              placeholder=""
              placeholderTextColor="#BFC4CA"
              inputStyle={styles.input}
              labelStyle={styles.label}
            />
          </View>
          <View style={styles.inputGroup}>
            <TextInput
              label="Tanggal Pengembalian"
              value={tglKembali}
              onChangeText={setTglKembali}
              placeholder=""
              placeholderTextColor="#BFC4CA"
              inputStyle={styles.input}
              labelStyle={styles.label}
            />
          </View>
          <View style={styles.inputGroup}>
            <TextInput
              label="Judul Buku"
              value={judul}
              onChangeText={setJudul}
              placeholder=""
              placeholderTextColor="#BFC4CA"
              inputStyle={styles.input}
              labelStyle={styles.label}
            />
          </View>
          <Button
            title="Pinjam"
            onPress={() => {}}
            style={styles.submitBtn}
            textStyle={styles.submitBtnText}
          />
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
  headerTitle: {
    color: '#fff',
    fontSize: 20,
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
    paddingHorizontal: 0,
    flex: 1,
  },
  formWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  inputGroup: {
    marginBottom: 18,
  },
  label: {
    fontSize: 15,
    color: '#222',
    marginBottom: 6,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1.2,
    borderColor: '#888',
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    color: '#222',
  },
  submitBtn: {
    backgroundColor: '#D9D9D9',
    borderRadius: 16,
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 18,
    alignSelf: 'center',
    minWidth: 140,
  },
  submitBtnText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default Peminjaman;
