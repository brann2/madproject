import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Svg, { Rect, Polygon } from 'react-native-svg';
import EditIcon from '../../assets/Vector2.svg';
import ArrowBack from '../../assets/Vector7.svg';

const { width } = Dimensions.get('window');

const AVATAR_PLACEHOLDER = 'https://randomuser.me/api/portraits/men/1.jpg'; // Placeholder image

type RootStackParamList = {
  UpdateProfile: undefined;
};

const UpdateProfile = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [nama, setNama] = useState('John');
  const [telp, setTelp] = useState('');
  const [bio, setBio] = useState('');
  const [tglLahir, setTglLahir] = useState('');

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
          <ArrowBack width={24} height={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>
      {/* Avatar dengan tombol edit */}
      <View style={styles.avatarWrapper}>
        <View style={styles.avatarCircle}>
          <Image source={{ uri: AVATAR_PLACEHOLDER }} style={styles.avatarImg} />
          <TouchableOpacity style={styles.editBtn}>
            <EditIcon width={22} height={22} />
          </TouchableOpacity>
        </View>
        <Text style={styles.namaText}>{nama}</Text>
      </View>
      {/* Form */}
      <View style={styles.formWrapper}>
        <Text style={styles.label}>Nama Lengkap</Text>
        <TextInput
          style={styles.input}
          value={nama}
          onChangeText={setNama}
          placeholder="Nama Lengkap"
          placeholderTextColor="#A0B5D1"
        />
        <Text style={styles.label}>No. Telp</Text>
        <TextInput
          style={styles.input}
          value={telp}
          onChangeText={setTelp}
          placeholder="No. Telp"
          placeholderTextColor="#A0B5D1"
          keyboardType="phone-pad"
        />
        <Text style={styles.label}>BIO</Text>
        <TextInput
          style={[styles.input, { height: 60 }]}
          value={bio}
          onChangeText={setBio}
          placeholder="BIO"
          placeholderTextColor="#A0B5D1"
          multiline
        />
        <Text style={styles.label}>Tanggal Lahir</Text>
        <TextInput
          style={styles.input}
          value={tglLahir}
          onChangeText={setTglLahir}
          placeholder="Tanggal Lahir"
          placeholderTextColor="#A0B5D1"
        />
        <TouchableOpacity style={styles.saveBtn}>
          <Text style={styles.saveBtnText}>Update Profile</Text>
        </TouchableOpacity>
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
  },
  avatarWrapper: {
    alignItems: 'center',
    marginTop: -50,
    marginBottom: 8,
  },
  avatarCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
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
    position: 'relative',
  },
  avatarImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  editBtn: {
    position: 'absolute',
    right: -2,
    bottom: -2,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 2,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    elevation: 2,
  },
  namaText: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
  },
  formWrapper: {
    marginTop: 10,
    paddingHorizontal: 28,
  },
  label: {
    fontSize: 14,
    color: '#222',
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#F1F6FF',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 15,
    color: '#333',
    borderWidth: 0,
    marginBottom: 0,
  },
  saveBtn: {
    backgroundColor: '#174BA7',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 32,
  },
  saveBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
});

export default UpdateProfile; 