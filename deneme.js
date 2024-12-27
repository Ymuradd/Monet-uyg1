import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function ImageWithText() {
  return (
    <ImageBackground
      source={require('../../assets/anasayfa.jpg')} // Kendi resim yolunuzu buraya ekleyin
      style={styles.image}
    >
      <Text style={styles.overlayText}>Merhaba, bu bir örnek metin!</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover', // Görselin tam kaplaması için
  },
  overlayText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Renk transparan olacak
    padding: 5,
    color: '#fff', // Metin rengi beyaz
    fontSize: 18,
  },
});
