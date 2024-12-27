import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ImageBackground,ScrollView } from 'react-native';
import Firsatlar from './Firsatlar';

export default function AnaSayfa({ navigation }) {
  const dummyData = [
    { id: '0', title:'Fırsatlar',  screenName:'Firsatlar' },
    { id: '1', title: ' Muhallebi' ,  screenName:'Muhallebi'},
    { id: '2', title: 'Waffle' ,  screenName:'Waffle'},
    { id: '3', title: 'Pankek',  screenName:'Pankek' },
    { id: '4', title: 'Limonata' ,  screenName:'Limonata'},
    { id: '5', title: 'BubbleTea' ,  screenName:'BubbleTea'},
    { id: '6', title: 'Smoothies' ,  screenName:'Smoothies'},
    { id: '7', title: 'Cocktails' ,  screenName:'Cocktails'},
    { id: '8', title: 'MilkShake' ,  screenName:'MilkShake'},
    { id: '9', title: 'EspressoCold' ,  screenName:'EspressoCold'},
    { id: '10', title: 'EspressoHot' ,  screenName:'EspressoHot'},
    { id: '11', title: 'HotDrinks' ,  screenName:'HotDrinks'},
    { id: '12', title: 'Meşrubatlar' ,  screenName:'Meşrubatlar'},
    { id: '13', title: 'Çaylar' ,  screenName:'Çaylar'},
    { id: '14', title: 'Extralar' ,  screenName:'Extralar'},
    { id: '15', title: 'Türk Kahveleri' ,  screenName:'TurkishCoffes'},
    { id: '16', title: 'Special İçecekler',  screenName:'SpecialDrinks' },
    { id: '17', title: 'Geleneksel İçecekler' ,  screenName:'TraditionalDrinks'},
  ];

  // FlatList'teki her bir öğeyi nasıl göstereceğimizi tanımlıyoruz
  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate(item.screenName)} // Hedef ekran
      >
        <Text style={styles.menuButtonText}>{item.title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    
    <ImageBackground
      source={require('../../assets/anasayfa.jpg')} // Arka plan resmi
      style={styles.background}
      imageStyle={{ opacity: 0.4 }} // Arka plan opaklığı
    >
      
        
        
           
            
              <View style={styles.header}>
          <Text style={styles.greeting}>Merhaba İclal Nur!</Text>
          <View style={styles.headerButtons}>
            <TouchableOpacity style={[styles.iconButton, styles.qrButton]} onPress={() => navigation.navigate('QRScreen')}>
            <Image source={require('../../assets/qr-Photoroom.png')}
             style={[styles.settingsIcon, { width: 40, height: 40 }]}/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.iconButton, styles.settingsButton]} onPress={() => navigation.navigate('SettingsScreen')}>
            <Image source={require('../../assets/ayarlar-Photoroom.png')}
             style={[styles.settingsIcon, { width: 40, height: 40 }]}/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.iconButton, styles.SepetButton]} onPress={() => navigation.navigate('Sepet')}>
            <Image source={require('../../assets/sepet-Photoroom.png')}
             style={[styles.settingsIcon, { width: 40, height: 40 }]}/>
            </TouchableOpacity>
            
            
          </View>
         
        </View>
         <ImageBackground 
                source={require('../../assets/zeminsiz-düzenlenmiş.png')} // Kendi resim yolunuzu buraya ekleyin
                style={styles.logo}
              ></ImageBackground>

       
        {/* Puan ve hediye kısmı */}
        <View style={styles.pointsContainer}>
          <View style={styles.pointBox}>
            <Text style={styles.pointText}>15</Text>
            <Text style={styles.pointLabel}>Çikolata</Text>
          </View>
          <View style={styles.pointBox}>
            <Text style={styles.pointText}>2</Text>
            <Text style={styles.pointLabel}>Hediye</Text>
          </View>
        </View>

        {/* Lotus simgeleri */}
        <View style={styles.lotusContainer}>
          {Array.from({ length: 4 }).map((_, index) => (
            <Image key={index} style={styles.lotusFilled} source={require('../../assets/lotus-Photoroom.png')} /> 
          ))}
        </View>

        {/* Menü listesi */}
        <FlatList data={dummyData}
  keyExtractor={(item) => item.id}
  renderItem={renderItem}
  style={{ flex: 1 }}
  keyboardShouldPersistTaps="handled"
  pointerEvents="auto" />
      
    </ImageBackground>
  );
  
   

}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    padding: 10,
  },
  background: {
    flex: 1,
  },
  screen: {
    flex: 1,
    padding: 10,
  },
  header: {
 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  greeting: {
    fontSize: 18,
    color: '#386063',
    top:10,
  },
  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingsIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  iconButton: {
    backgroundColor: '#386063',
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
    
  },
  qrButton: {
    position: 'absolute',
    top: 1,
    right: 90,
  },
  SepetButton: {
    position: 'absolute',
    top: 1,
    right: 170,
  },
  settingsButton: {
    position: 'absolute',
    top: 1,
    right: 7,
    //padding:0,
  },
  settingsIcon: {
    resizeMode: 'contain',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  
  logo: {
    width: 400,
    height: 250,
    resizeMode: 'contain',
  },
  pointsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  pointBox: {
    alignItems: 'center',
    backgroundColor: '#386063',
    padding: 15,
    borderRadius: 50,
  },
  pointText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  pointLabel: {
    fontSize: 14,
    color: '#fff',
  },
  lotusContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  lotusFilled: {
    width: 80,
    height: 80,
  },
  menuList: {
    flexGrow: 0,
  },
  menuButton: {
    backgroundColor: '#386063',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  menuButtonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});