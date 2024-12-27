import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useBasket } from './BasketContext';

export default function BubbleTea({ navigation }) {
  const { addToBasket } = useBasket();
  const initialProducts = [
    { id: '1', name: 'Çilek Bubble', description: 'Çilek aromalı bubble tea', price: '95.00' },
    { id: '2', name: 'Yeşil Elma Bubble', description: 'Yeşil Elma aromalı bubble', price: '95.00' },
    { id: '3', name: 'Çikolata Kahve Bubble', description: 'Çikolatalı ve kahveli bubble tea', price: '105.00' },
  ];

  const [products] = useState(initialProducts);

  const renderItem = ({ item }) => (
    <View style={styles.menuItem}>
      <Text style={styles.itemTitle}>{item.name}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <Text style={styles.itemPrice}>{item.price} TL</Text>
      <TouchableOpacity
        onPress={() => addToBasket(item)}
        style={styles.addButton}
      >
        <Text style={styles.addButtonText}>Sepete Ekle</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Sepet')}
        style={styles.viewBasketButton}
      >
        <Text style={styles.viewBasketButtonText}>Sepeti Gör</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  menuItem: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 10,
  },
  addButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#386063',
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  viewBasketButton: {
    padding: 15,
    backgroundColor: '#386063',
    borderRadius: 8,
    alignItems: 'center',
  },
  viewBasketButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});
