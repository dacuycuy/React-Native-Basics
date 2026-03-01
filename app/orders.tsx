import React from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert } from 'react-native';

export default function OrdersScreen() {
  const parts = [
    { id: '1', name: 'Racing Exhaust Pipe' },
    { id: '2', name: 'Michelin Tires (Pair)' },
    { id: '3', name: 'LED Headlight Bulb' },
  ];

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Your Selected Parts</Text>
      
      <FlatList
        data={parts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
        )}
      />

      <View style={{ paddingVertical: 20 }}>
        <Button 
          title="PLACE ORDER" 
          color="#e63946" 
          onPress={() => Alert.alert("MotoVibe", "Processing your order...")} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: { flex: 1, padding: 20, backgroundColor: 'white' },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 20 },
  itemCard: { 
    padding: 25, 
    backgroundColor: '#f8f8f8', 
    borderRadius: 15, 
    marginBottom: 10 
  },
  itemName: { fontSize: 16, color: '#333' }
});