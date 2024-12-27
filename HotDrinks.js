import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, TextInput, Alert } from 'react-native';
import { useBasket } from './BasketContext';
export default function SicakIcecekler({ navigation }) {
   const { addToBasket } = useBasket();
  const initialProducts = [
    { id: '1', name: 'Ballı Süt', description: '', price: '75,00' },
    { id: '2', name: 'Oreo Hot Chocolate', description: 'Süt, Oreo Chocolate', price: '85,00' },
    { id: '3', name: 'Sıcak Çikolata', description: '', price: '85,00' },
    { id: '4', name: 'Sıcak Beyaz Çikolata', description: '', price: '85,00' },
    { id: '5', name: 'Salep', description: '', price: '85,00' },
    { id: '6', name: 'Sıcak Süt', description: '', price: '70,00' }
  ];
  

  const [products] = useState(initialProducts);
         
           const renderItem = ({ item }) => (
             <View style={styles.menuItem}>
               <Text style={styles.itemTitle}>{item.name}</Text>
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
           container: { flex: 1, padding: 16, backgroundColor: '#f8f8f8' },
           menuItem: { marginBottom: 15, padding: 15, backgroundColor: '#fff', borderRadius: 8 },
           itemTitle: { fontSize: 18, fontWeight: 'bold' },
           itemPrice: { fontSize: 16, color: '#555' },
           addButton: { marginTop: 10, padding: 10, backgroundColor: '#386063', borderRadius: 5 },
           addButtonText: { color: '#fff', textAlign: 'center' },
           viewBasketButton: { padding: 15, backgroundColor: '#386063', borderRadius: 8, marginTop: 20 },
           viewBasketButtonText: { color: '#fff', textAlign: 'center', fontSize: 18 },
         });