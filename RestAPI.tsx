import {StyleSheet, View, FlatList, useColorScheme} from 'react-native'; // 🔹 ubah: tambah useColorScheme
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Users from './components/Users';

const RestAPI = () => {
  const [users, setUsers] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const colorScheme = useColorScheme(); // 🔹 tambah: deteksi dark / light

  useEffect(() => {
    onRefresh();
  }, []);

  const onRefresh = () => {
    setIsRefreshing(true);
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(result => {
        setUsers(result.data);
        setIsRefreshing(false);
      })
      .catch(error => console.log(error));
  };

  return (
    // ini tidak perlu,
    // <ScrollView showsVerticalScrollIndicator={false}>
    //   {users.map(item => (
    //     <Users name={item.name} email={item.email} phone={item.phone} />
    //   ))}
    // </ScrollView>

    // 🔹 ubah: tambahkan View wrapper agar bisa kasih background sesuai theme
    <View
      style={[
        styles.container,
        {backgroundColor: colorScheme === 'dark' ? '#000' : '#fff'},
      ]}>
      <FlatList
        refreshing={isRefreshing}
        onRefresh={onRefresh}
        data={users}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <Users
            name={item.name}
            email={item.email}
            phone={item.phone}
            darkMode={colorScheme === 'dark'} // 🔹 tambah: prop untuk kasih info ke Users
          />
        )}
      />
    </View>
  );
};

export default RestAPI;

const styles = StyleSheet.create({
  container: {
    flex: 1, // 🔹 tambah agar View isi full screen
  },
});
