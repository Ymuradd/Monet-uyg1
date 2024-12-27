import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TargetScreen({ route }) {
  const { categoryId } = route.params; // Parametreyi alıyoruz

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Kategori ID: {categoryId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});
