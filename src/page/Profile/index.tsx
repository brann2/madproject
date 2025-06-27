import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import {useUser} from '../../context/UserContext';

const Profile = () => {
  const {avatar, setAvatar, name, setName} = useUser();
  const [localAvatar, setLocalAvatar] = useState<string | null>(avatar);
  const [localName, setLocalName] = useState(name);
  const [phone, setPhone] = useState('');
  const [bio, setBio] = useState('');
  const [dob, setDob] = useState('');

  const handleEditAvatar = () => {
    launchCamera(
      {
        mediaType: 'photo',
        includeBase64: true,
        saveToPhotos: false,
      },
      response => {
        if (response.didCancel) return;
        if (response.assets && response.assets.length > 0) {
          setLocalAvatar(
            `data:${response.assets[0].type};base64,${response.assets[0].base64}`,
          );
        }
      },
    );
  };

  const handleUpdateProfile = () => {
    setAvatar(localAvatar);
    setName(localName);
    // Simpan phone, bio, dob ke backend jika perlu
    // Tampilkan notifikasi sukses jika perlu
  };

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.avatarContainer}>
        <TouchableOpacity
          onPress={handleEditAvatar}
          style={styles.avatarButton}>
          {localAvatar ? (
            <Image source={{uri: localAvatar}} style={styles.avatar} />
          ) : (
            <View
              style={[
                styles.avatar,
                {
                  backgroundColor: '#eee',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}
            />
          )}
          <View style={styles.settingIcon}>
            <Text style={{fontSize: 18}}>⚙️</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.name}>{localName}</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Nama Lengkap</Text>
        <TextInput
          style={styles.input}
          value={localName}
          onChangeText={setLocalName}
          placeholder="John"
          placeholderTextColor="#BFC4CA"
        />
        <Text style={styles.label}>No. Telp</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="No. Telp"
          placeholderTextColor="#BFC4CA"
        />
        <Text style={styles.label}>BIO</Text>
        <TextInput
          style={styles.input}
          value={bio}
          onChangeText={setBio}
          placeholder="BIO"
          placeholderTextColor="#BFC4CA"
        />
        <Text style={styles.label}>Tanggal Lahir</Text>
        <TextInput
          style={styles.input}
          value={dob}
          onChangeText={setDob}
          placeholder="Tanggal Lahir"
          placeholderTextColor="#BFC4CA"
        />
        <TouchableOpacity
          style={styles.updateButton}
          onPress={handleUpdateProfile}>
          <Text style={styles.updateButtonText}>Update Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },
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
  avatarButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#fff',
    backgroundColor: '#eee',
  },
  settingIcon: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 2,
    borderWidth: 1,
    borderColor: '#174BA7',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 8,
    color: '#222',
  },
  form: {
    marginHorizontal: 24,
    marginTop: 16,
  },
  label: {
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#F3F6FB',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    color: '#222',
    marginBottom: 4,
  },
  updateButton: {
    backgroundColor: '#174BA7',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 24,
  },
  updateButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Profile;
