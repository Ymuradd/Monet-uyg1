import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, ImageBackground } from 'react-native';

export default function Hesap_olustur({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert('Hata', 'Şifreler uyuşmuyor. Lütfen tekrar deneyin.');
    } else {
      // Kullanıcı kayıt işlemi burada yapılır.
      console.log({
        firstName,
        lastName,
        phone,
        email,
        password,
      });
      Alert.alert('Başarılı', 'Hesabınız başarıyla oluşturuldu!');
      navigation.navigate('Giriş'); // Kullanıcıyı giriş ekranına yönlendirin
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/hesapolustur.jpg')} // Arka plan resminin yolu
      style={styles.background}
      imageStyle={{ opacity: 0.8 }} // Saydamlaştırma
    >
      <View style={styles.container}>
        <Text style={styles.title}>Hesap Oluştur</Text>

        <TextInput
          style={styles.input}
          placeholder="İsim"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Soyisim"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Telefon Numarası"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
        <TextInput
          style={styles.input}
          placeholder="E-posta"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Şifre"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Şifreyi Tekrar Girin"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Hesap Oluştur</Text>
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
    marginBottom: 15,
    backgroundColor: '#ffffff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#386063',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});