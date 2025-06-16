import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const UserCard = ({user}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: user.avatar}} style={styles.avatar} />
      <View>
        <Text style={styles.name}>
          <Text style={styles.bold}>{user.last_name}</Text> {user.first_name}
        </Text>
        <Text>{user.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    marginBottom: 4,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default UserCard;
