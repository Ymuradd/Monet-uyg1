import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, ImageBackground } from 'react-native';

export default function Firsatlar() {
  const [opportunityDetails, setOpportunityDetails] = useState('');

  const handleAddOpportunity = () => {
    if (!opportunityDetails.trim()) {
      Alert.alert('Hata', 'Fırsat detaylarını girin!');
      return;
    }

    Alert.alert('Başarılı', 'Fırsat eklendi: ' + opportunityDetails);
    setOpportunityDetails(''); // Formu sıfırla
  };

  return (
    <ImageBackground
      source={require('../../assets/gul.jpg')} // Arka plan resmi yolu
      style={styles.background}
      imageStyle={{ opacity: 0.8 }} // Saydamlaştırma
    >
      <View style={styles.container}>
        <Text style={styles.title}>Fırsat Detayları Ekle</Text>

        <TextInput
          style={styles.input}
          placeholder="Fırsat Detaylarını Girin"
          value={opportunityDetails}
          onChangeText={setOpportunityDetails}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddOpportunity}>
          <Text style={styles.buttonText}>Fırsatı Ekle</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#fff', // Başlık rengini beyaz yapalım ki arka plan ile uyumlu olsun
  },
  input: {
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    opacity:0.8,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#386063',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
/*import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Fırsatlar() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mevcut Fırsatlar</Text>
      <Button title="Fırsatları Görüntüle" onPress={() => alert("Fırsatlar")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
*/