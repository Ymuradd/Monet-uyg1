import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { useBasket } from './BasketContext';

export default function Sepet({ navigation }) {
  const { basket, removeFromBasket } = useBasket();

  // Sepetteki toplam fiyatı hesaplama
  const calculateTotalPrice = () => {
    return basket.reduce((total, item) => total + item.quantity * parseFloat(item.price), 0).toFixed(2);
  };

  // Sepeti onaylama işlemi
  const handleCheckout = () => {
    if (basket.length === 0) {
      Alert.alert('Hata', 'Sepetiniz boş!');
    } else {
      Alert.alert('Onay', `Toplam Fiyat: ${calculateTotalPrice()} TL\nSepeti onaylıyor musunuz?`, [
        { text: 'Hayır', style: 'cancel' },
        { text: 'Evet', onPress: () => navigation.navigate('QRScreen') }, // Burada QRScreen'e yönlendiriyoruz
      ]);
    } 
  };

  const renderBasketItem = ({ item }) => (
    <View style={styles.basketItem}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text>Miktar: {item.quantity}</Text>
      <Text>Fiyat: {(item.quantity * parseFloat(item.price)).toFixed(2)} TL</Text>
      <TouchableOpacity
        onPress={() => removeFromBasket(item.id)}
        style={styles.removeButton}
      >
        <Text style={styles.removeButtonText}>Çıkar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ImageBackground
      source={require('../../assets/japonKoprusu.jpg')} // Arka plan resmi yolu
      style={styles.background}
      imageStyle={{ opacity: 0.8 }} // Saydamlaştırma
    >
      <View style={styles.container}>
        <FlatList
          data={basket}
          renderItem={renderBasketItem}
          keyExtractor={(item) => item.id}
        />

        {/* Toplam fiyat ve sepet onaylama */}
        <View style={styles.footer}>
          <Text style={styles.totalPrice}>Toplam: {calculateTotalPrice()} TL</Text>
          <TouchableOpacity onPress={handleCheckout} style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>Sepeti Onayla</Text>
          </TouchableOpacity>
        </View>
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
    padding: 16,
  },
  basketItem: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  removeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#c0392b',
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  footer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#386063',
  },
  checkoutButton: {
    padding: 15,
    backgroundColor: '#386063',
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});
