import React from 'react';
import {Image, StyleSheet, Text, ScrollView, SafeAreaView} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: '600',
  },
  value: {
    fontSize: 16,
    marginBottom: 8,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
    borderRadius: 75,
  },
});

const Biodata = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <Text style={styles.title}>BIODATA MAHASISWA</Text>

        {/* Foto Lokal */}
        <Image
          style={styles.image}
          source={require('./assets/Image/profil.jpg')}
        />

        {/* Data Diri */}
        <Text style={styles.label}>Nama:</Text>
        <Text style={styles.value}>Irmando Koyo</Text>

        <Text style={styles.label}>NIM:</Text>
        <Text style={styles.value}>105012210029</Text>

        <Text style={styles.label}>Fakultas:</Text>
        <Text style={styles.value}>Computer Science</Text>

        <Text style={styles.label}>Program Studi:</Text>
        <Text style={styles.value}>Information Systems</Text>

        <Text style={styles.label}>Semester:</Text>
        <Text style={styles.value}>5</Text>

        <Text style={styles.label}>....</Text>
        <Text style={styles.value}>
          "Remember the Sabbath day, and keep it holy."
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Biodata;