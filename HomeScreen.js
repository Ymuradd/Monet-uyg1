import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import React from 'react';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/anasayfa.jpg')} // Arka plan resmi
      style={styles.background}
      background={{ opacity: 0.6 }}
    >
      <View style={styles.container}>
        {/* Header Image */}
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/monet.png')} style={styles.headerImage} />
        </View>

        <View style={styles.formContainer}>
          {/* Email Field */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Mail Adresiniz</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
            />
          </View>

          {/* Password Field */}
          <View style={styles.inputGroup}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Şifreniz</Text>
              <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>Şifrenizi mi unuttunuz?</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              secureTextEntry
              autoComplete="password"
            />
          </View>

          {/* Sign-in Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('AnaSayfa')} // Yönlendirme
          >
            <Text style={styles.buttonText}>Giriş Yap</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonText}
            onPress={() => navigation.navigate('Hesap Oluştur!')} // Yönlendirme
          >
            <Text style={styles.buttonText}>Hesap Oluştur</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Arka plan resmini tamamen kapla
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  imageContainer: {
    alignItems: 'center', // Yatay eksende ortalar
    marginBottom: 10, // Resim ile form arasında boşluk
  },
  headerImage: {
    width: 300, // Resim genişliği
    height: 300, // Resim yüksekliği
    resizeMode: 'contain', // Resmin oranlarını koruyarak sığdırır
  },
  formContainer: {
    marginTop: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff', // Etiket metin rengi
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forgotPasswordText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#386063',
  },
  button: {
    backgroundColor: '#386063', // Buton rengi
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff', // Buton metin rengi
    alignItems: 'center'
  },
});
