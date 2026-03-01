import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder="Search for parts or services..." 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { 
    borderWidth: 1, 
    borderColor: '#ddd', 
    padding: 12, 
    borderRadius: 10,
    backgroundColor: '#fff'
  }
});