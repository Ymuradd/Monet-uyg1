
/*import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity,FlatList } from 'react-native';

export default function EditPage({ navigation }) {
 

  const products = [
    { id: '1', name: 'Dubai Monet', description: 'Dubai çikolatası, Monet Muhallebisi, ve Gerçek Belçika çikolatası ve Antep fıstığı.', price: '290,00' },
    { id: '2', name: 'Dubai Brownie', description: 'Dubai Çikolatası, Briwnie, Monet Muhallebisi, Gerçek Belçika çikolatası ve Antep fıstığı.', price: '320,00' },
    { id: '3', name: 'Dubai Ice', description: 'Dubai Çikolatası, Kaymaklı dondurma, Gerçek Belçika çikolatası ve Antep Fıstığı', price: '300,00' },
    { id: '4', name: 'Monet Happy Box XL 4-6 Kişilik (Tanıtım Fiyatı)', description: 'Sütlü, Bitter, Beyaz, Ruby Belçika Çikolatası, Pankek, Waffle, Brownie, Red Velvet Kek, Mini Kruvasan, Muz,Çilek ve Ananas.', price: '900,00' },
    { id: '5', name: 'Monet Happy Box L 2-3 Kişilik (Tanıtım Fiyatı)', description: 'Sütlü ve Beyaz Belçika Çikolatası. Pankek, Waffle, Brownie, Çilek ve Muz', price: '600,00' },
    { id: '6', name: 'Monet Triffle', description: 'Beyaz Belçika çikolatalı Monet kreması, file badem, brownie parçaları ve çilek.', price: '200,00' },
    { id: '7', name: 'Piraye', description: 'Gerçek Belçika çikolatası, browni, Monet muhallebisi, Fransız bisküvisi, pirinç fındık, muz ve çilek. (Sütlü, beyaz ve bitter seçenekleri ile.)', price: '220,00' },
    { id: '8', name: 'Eftelya (2 kişilik) Şefin Tavsiyesi', description: 'Red Velvet kek katları, Monet kreması, çilek, muz, sütlü ve beyaz gerçek Belçika çikolatası.', price: '490,00' },
    { id: '9', name: 'Asuman L', description: '', price: '230,00' },
    { id: '10', name: 'Eftelya (1 kişilik)', description: '', price: '300,00' },
    { id: '11', name: 'Asuman XL', description: 'Monet muhallebisi, browni, sütlü ve bitter pirinç patlağı ve bol gerçek Belçika çikolatası.', price: '290,00' },
    { id: '12', name: 'Monet', description: 'Monet muhallebisi, bebe bisküvisi, fransız bisküvisi, çilek, muz ve pirinç fındık.', price: '190,00' },
    { id: '13', name: 'Monet Lotus', description: 'Monet muhallebisi, lotus bisküvi, karamel çikolata.', price: '190,00' },
    { id: '14', name: 'Monet Red Velvet', description: 'Monet red velvet kek, Monet muhallebisi, frambuazlı çikolata.', price: '190,00' },
    { id: '15', name: 'Monet Oreo', description: 'Monet muhallebisi, oreo ve sütlü çikolata (Sütlü, beyaz ve bitter seçenekleri ile.)', price: '190,00' },
    { id: '16', name: 'Leyla', description: 'Monet muhallebisi, çilek, muz ve bebe bisküvisi.', price: '170,00' },
    { id: '17', name: 'Botanik', description: 'Monet muhallebisi, bebek bisküvisi, muz, çilek, oreo ve sütlü çikolata. (Sütlü, Beyaz ve Bitter Çikolata seçenekleri ile.)', price: '190,00' },
    { id: '18', name: 'Müjgan', description: 'Monet muhallebisi, Fransız bisküvisi, sütlü çikolata. (Sütlü, Beyaz ve Bitter Çikolata seçenekleri ile.)', price: '210,00' },
    { id: '19', name: 'Afitap', description: 'Gerçek Belçika çikolatası, Fransız bisküvisi, çilek ve krem şanti.', price: '220,00' },
    { id: '20', name: 'Monet Cool Cake', description: 'Brownie, pirinç fındık, sütlü çikolata, kaymaklı dondurma. (Sütlü, beyaz ve bitter seçenekleri ile.)', price: '200,00' },
    { id: '21', name: 'Leman', description: 'Gerçek Belçika çikolatası, waffle hamuru, fransız bisküvisi, muz, fildişi çikolata ve toz antep fıstığı.', price: '220,00' },
    { id: '22', name: 'Mecnun', description: 'Sütlü çikolata, waffle hamuru, monet muhallebisi, muz, file fıstık ve toz antep fıstığı.', price: '200,00' },
    { id: '23', name: 'Fondü', description: 'Gerçek Belçika çikolatası, muz, çilek, ananas. (Sütlü, beyaz ve bitter seçenekleri ile.)', price: '240,00' },
    { id: '24', name: 'Bihter', description: 'Dondurma, brownie, pirinç fındık ve gerçek Belçika çikolatası.', price: '230,00' },
    { id: '25', name: 'Monet Sarma', description: 'Krep hamuru, gerçek Belçika çikolatası, fildişi çikolata, çilek, muz, monet muhallebisi, hindistan cevizi, file badem ve pirinç fındık.', price: '260,00' },
    { id: '26', name: 'Monet Sushi', description: 'Krep hamuru, çilek/muz, gerçek Belçika çikolatası, pirinç fındık.', price: '210,00' }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.menuItem}>
      <TouchableOpacity onPress={() => toggleAccordion(index)} style={styles.itemHeader}>
        <Text style={styles.itemTitle}>{item.name}</Text>
      </TouchableOpacity>
      {activeIndex === index && (
        <View style={styles.itemDetails}>
          <Text style={styles.itemDescription}>{item.description}</Text>
          <Text style={styles.itemPrice}>{item.price} TL</Text>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      
    </View>
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
      alignItems: 'center',
      padding: 16,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#ffffff',
    },
    menuItem: {
      width: '90%',
      marginBottom: 15,
      backgroundColor: '#fff',
      borderRadius: 10,
      overflow: 'hidden',
      elevation: 3,
    },
    itemHeader: {
      padding: 15,
      backgroundColor: '#386063',
      alignItems: 'center',
    },
    itemTitle: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    itemDetails: {
      padding: 15,
      backgroundColor: '#f1f1f1',
    },
    itemDescription: {
      fontSize: 14,
      marginBottom: 10,
    },
    itemPrice: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#386063',
    },
  });
  

*/
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, TextInput, Alert } from 'react-native';
import { useBasket } from './BasketContext';
export default function Muhallebi({ navigation }) {
    const { addToBasket } = useBasket();
  const initialProducts = [
    { id: '1', name: 'Dubai Monet', description: 'Dubai çikolatası, Monet Muhallebisi, ve Gerçek Belçika çikolatası ve Antep fıstığı.', price: '290,00' },
    { id: '2', name: 'Dubai Brownie', description: 'Dubai Çikolatası, Briwnie, Monet Muhallebisi, Gerçek Belçika çikolatası ve Antep fıstığı.', price: '320,00' },
    { id: '3', name: 'Dubai Ice', description: 'Dubai Çikolatası, Kaymaklı dondurma, Gerçek Belçika çikolatası ve Antep Fıstığı', price: '300,00' },
    { id: '4', name: 'Monet Happy Box XL 4-6 Kişilik (Tanıtım Fiyatı)', description: 'Sütlü, Bitter, Beyaz, Ruby Belçika Çikolatası, Pankek, Waffle, Brownie, Red Velvet Kek, Mini Kruvasan, Muz,Çilek ve Ananas.', price: '900,00' },
    { id: '5', name: 'Monet Happy Box L 2-3 Kişilik (Tanıtım Fiyatı)', description: 'Sütlü ve Beyaz Belçika Çikolatası. Pankek, Waffle, Brownie, Çilek ve Muz', price: '600,00' },
    { id: '6', name: 'Monet Triffle', description: 'Beyaz Belçika çikolatalı Monet kreması, file badem, brownie parçaları ve çilek.', price: '200,00' },
    { id: '7', name: 'Piraye', description: 'Gerçek Belçika çikolatası, browni, Monet muhallebisi, Fransız bisküvisi, pirinç fındık, muz ve çilek. (Sütlü, beyaz ve bitter seçenekleri ile.)', price: '220,00' },
    { id: '8', name: 'Eftelya (2 kişilik) Şefin Tavsiyesi', description: 'Red Velvet kek katları, Monet kreması, çilek, muz, sütlü ve beyaz gerçek Belçika çikolatası.', price: '490,00' },
    { id: '9', name: 'Asuman L', description: '', price: '230,00' },
    { id: '10', name: 'Eftelya (1 kişilik)', description: '', price: '300,00' },
    { id: '11', name: 'Asuman XL', description: 'Monet muhallebisi, browni, sütlü ve bitter pirinç patlağı ve bol gerçek Belçika çikolatası.', price: '290,00' },
    { id: '12', name: 'Monet', description: 'Monet muhallebisi, bebe bisküvisi, fransız bisküvisi, çilek, muz ve pirinç fındık.', price: '190,00' },
    { id: '13', name: 'Monet Lotus', description: 'Monet muhallebisi, lotus bisküvi, karamel çikolata.', price: '190,00' },
    { id: '14', name: 'Monet Red Velvet', description: 'Monet red velvet kek, Monet muhallebisi, frambuazlı çikolata.', price: '190,00' },
    { id: '15', name: 'Monet Oreo', description: 'Monet muhallebisi, oreo ve sütlü çikolata (Sütlü, beyaz ve bitter seçenekleri ile.)', price: '190,00' },
    { id: '16', name: 'Leyla', description: 'Monet muhallebisi, çilek, muz ve bebe bisküvisi.', price: '170,00' },
    { id: '17', name: 'Botanik', description: 'Monet muhallebisi, bebek bisküvisi, muz, çilek, oreo ve sütlü çikolata. (Sütlü, Beyaz ve Bitter Çikolata seçenekleri ile.)', price: '190,00' },
    { id: '18', name: 'Müjgan', description: 'Monet muhallebisi, Fransız bisküvisi, sütlü çikolata. (Sütlü, Beyaz ve Bitter Çikolata seçenekleri ile.)', price: '210,00' },
    { id: '19', name: 'Afitap', description: 'Gerçek Belçika çikolatası, Fransız bisküvisi, çilek ve krem şanti.', price: '220,00' },
    { id: '20', name: 'Monet Cool Cake', description: 'Brownie, pirinç fındık, sütlü çikolata, kaymaklı dondurma. (Sütlü, beyaz ve bitter seçenekleri ile.)', price: '200,00' },
    { id: '21', name: 'Leman', description: 'Gerçek Belçika çikolatası, waffle hamuru, fransız bisküvisi, muz, fildişi çikolata ve toz antep fıstığı.', price: '220,00' },
    { id: '22', name: 'Mecnun', description: 'Sütlü çikolata, waffle hamuru, monet muhallebisi, muz, file fıstık ve toz antep fıstığı.', price: '200,00' },
    { id: '23', name: 'Fondü', description: 'Gerçek Belçika çikolatası, muz, çilek, ananas. (Sütlü, beyaz ve bitter seçenekleri ile.)', price: '240,00' },
    { id: '24', name: 'Bihter', description: 'Dondurma, brownie, pirinç fındık ve gerçek Belçika çikolatası.', price: '230,00' },
    { id: '25', name: 'Monet Sarma', description: 'Krep hamuru, gerçek Belçika çikolatası, fildişi çikolata, çilek, muz, monet muhallebisi, hindistan cevizi, file badem ve pirinç fındık.', price: '260,00' },
    { id: '26', name: 'Monet Sushi', description: 'Krep hamuru, çilek/muz, gerçek Belçika çikolatası, pirinç fındık.', price: '210,00' }
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