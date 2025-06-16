import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import UserCard from './components/UserCards/UserCards';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllUsers = async () => {
    try {
      const firstPageRes = await fetch('https://reqres.in/api/users?page=1', {
        headers: {
          'x-api-key': 'reqres-free-v1',
        },
      });
      const firstPageJson = await firstPageRes.json();

      const totalPages = firstPageJson.total_pages;
      const allUsers = [...firstPageJson.data];

      // Ambil data dari halaman berikutnya (mulai dari page 2)
      for (let page = 2; page <= totalPages; page++) {
        const res = await fetch(`https://reqres.in/api/users?page=${page}`, {
          headers: {
            'x-api-key': 'reqres-free-v1',
          },
        });
        const json = await res.json();
        allUsers.push(...json.data);
      }

      setUsers(allUsers);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>User List</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={users}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <UserCard user={item} />}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 16,
    marginVertical: 16,
  },
});

export default Home;
