import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, TextInput, Alert } from 'react-native';
import { useBasket } from './BasketContext';
export default function EspressoHot({ navigation }) {
  const { addToBasket } = useBasket();
  const initialProducts = [
    { id: '1', name: 'Caramel Latte', description: 'DaVinci karamel sos üzerine espresso ve ince süt formu', price: '95,00' },
    { id: '2', name: 'Kavrulmuş Badem Latte', description: 'DaVinci kavrulmuş badem aroması üzerine espresso ve ince süt formu', price: '105,00' },
    { id: '3', name: 'Ristretto', description: 'Espresso özü', price: '65,00' },
    { id: '4', name: 'Double Espresso', description: 'Çift çekim Espresso', price: '70,00' },
    { id: '5', name: 'Americano', description: 'Çift çekim espresso üzerine sıcak su', price: '85,00' },
    { id: '6', name: 'Filter Coffee', description: 'Üç farklı Arabica bazlı demlenmiş kahve', price: '85,00' },
    { id: '7', name: 'Espresso Macchiato', description: 'Espresso ve süt köpüğü', price: '70,00' },
    { id: '8', name: 'Cortado', description: 'Dopio çekim espresso üzerine süt formu', price: '90,00' },
    { id: '9', name: 'Flat White', description: 'Ristretto çekim espresso üzerine ince süt formu', price: '90,00' },
    { id: '10', name: 'Winter Coffee', description: 'Tarçın aromalı Espresso ve Süt', price: '95,00' },
    { id: '11', name: 'Cappuccino', description: 'Çift çekim espresso üzerine kalın süt formu', price: '95,00' },
    { id: '12', name: 'Latte', description: 'Tek çekim espresso üzerine ince süt formu', price: '95,00' },
    { id: '13', name: 'Toffee Nut Latte', description: 'Da Vinci karamel ve vanilya aroması üzerine tek çekim espresso ve ince süt formu', price: '105,00' },
    { id: '14', name: 'Cevizli Latte', description: 'Tek çekim espresso üzerine Ceviz aroması ve ince süt formu', price: '105,00' },
    { id: '15', name: 'Latte Macchiato', description: 'Tek çekim espresso üzerine kalın süt formu', price: '105,00' },
    { id: '16', name: 'Caramel Macchiato', description: 'Da Vinci Karamel çikolata üzerine tek çekim espresso ve kalın süt formu', price: '105,00' },
    { id: '17', name: 'Mocha', description: 'Da Vinci çikolata üzerine tek çekim espresso ve ince süt formu', price: '105,00' },
    { id: '18', name: 'White Mocha', description: 'Da Vinci beyaz çikolata üzerine tek çekim espresso ve ince süt formu', price: '105,00' }
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