import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, Switch } from 'react-native';

export default function Ayarlar({ navigation }) {
  const [userName, setUserName] = useState('Kullanıcı Adı');
  const [email, setEmail] = useState('example@example.com');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSave = () => {
    Alert.alert('Ayarlar Kaydedildi', 'Değişiklikler başarıyla kaydedildi.');
  };

  const handleDarkModeToggle = () => {
    setIsDarkMode(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ayarlar</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Kullanıcı Adı</Text>
        <TextInput
          style={styles.input}
          value={userName}
          onChangeText={setUserName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-posta</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Karanlık Mod</Text>
        <Switch
          value={isDarkMode}
          onValueChange={handleDarkModeToggle}
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#386063',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  saveButton: {
    padding: 15,
    backgroundColor: '#386063',
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});
