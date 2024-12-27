import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, TextInput, Alert } from 'react-native';
import { useBasket } from './BasketContext';
export default function EditPage({ navigation }) {
    const { addToBasket } = useBasket();
  const initialProducts = [
    { id: '1', name: 'Klasik Waffle', description: 'Sütlü ve beyaz çikolata, çilek, muz, kivi, toz fındık, file yer fıstığı ve bitter pasta süsü.', price: '240,00' },
    { id: '2', name: 'Sütbeyaz Waffle', description: 'Beyaz Çikolata, hindistan cevizi çikolata, çilek, muz, beyaz pirinç patlağı, file yer fıstığı, hindistan cevizi.', price: '240,00' },
    { id: '3', name: 'Karamel Rüyası Waffle', description: 'Karamel ve sütlü çikolata, çilek, muz, toz antep fıstığı, toz fındık, renkli pirinç patlağı.', price: '240,00' },
    { id: '4', name: 'Barbie Waffle', description: 'Frambuazlı çikolata, çilek, toz fındık, frambuazlı pirinç patlağı.', price: '240,00' },
    { id: '5', name: 'Amazon Waffle', description: 'Beyaz bitter ve muzlu çikolata, çilek, muz, kivi, toz fındık, hindistan cevizi, bitter pasta süsü, sarı kiraz, yeşil kiraz, kırmızı kiraz.', price: '240,00' },
    { id: '6', name: 'Çikolata Şöleni Waffle', description: 'Sütlü ve bitter çikolata, çilek, muz, kivi, toz fındık, toz antep fıstığı, sütlü ve bitter pirinç patlağı, bitter pasta süsü.', price: '240,00' },
    { id: '7', name: 'Oreolum Waffle', description: 'Sütlü ve beyaz çikolata, muz, toz oreo, toz antep fıstığı, pirinç fındık.', price: '240,00' },
    { id: '8', name: 'Sen Nasıl İstersen Waffle', description: 'Çikolata çeşidini, meyveni ve süslemelerini sen seç. En fazla 3 çeşit çikolata, en fazla 3 çeşit meyve, en fazla 4 çeşit süsleme.', price: '260,00' },
    { id: '9', name: 'Erciyes Waffle', description: 'Beyaz ve sütlü çikolata, çilek, muz, ananas, toz rulokat, toz bebe bisküvisi.', price: '240,00' }
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