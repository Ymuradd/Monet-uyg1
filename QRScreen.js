import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ImageBackground } from 'react-native';

export default function QrScanner() {
  return (
    <ImageBackground
      source={require('../../assets/japonKoprusu.jpg')} // Arka plan resmi yolu
      style={styles.background}
      imageStyle={{ opacity: 0.8 }} // Saydamlaştırma
    >
      <View style={styles.container}>
        <Text style={styles.title}>Karekod Okut</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>İndirim</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Hediye Kahve</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>QR</Text>
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
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#fff', // Başlık rengini beyaz yapalım ki arka plan ile uyumlu olsun
  },
  button: {
    backgroundColor: '#386063',
    padding: 12,
    borderRadius: 5,
    marginBottom: 20,
    width: '80%',
    justifyContent: 'center', // Yatayda ortalar
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
/*import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function QrScanner() {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [scanned, setScanned] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`QR Kodu okundu! Tip: ${type}, Veri: ${data}`);
  };

  if (hasPermission === null) {
    return <Text>QR Kod Okuma İzni Bekleniyor...</Text>;
  }
  if (hasPermission === false) {
    return <Text>QR Kod Okuma İzni Yok!</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'QR Kodunu Yeniden Oku'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
*/