import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, Image, ScrollView, 
  TouchableOpacity, Modal, Button, Alert, KeyboardAvoidingView, Platform 
} from 'react-native';
import { useRouter } from 'expo-router';
import SearchBar from '../components/SearchBar';

export default function HomeScreen() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView style={styles.mainWrapper}>
        
        <View style={styles.navBar}>
          <View>
            <Text style={{ color: '#555' }}>Home Screen</Text>
            <Text style={styles.brandName}>MOTOVIBE HUB</Text>
          </View>
          
          <TouchableOpacity 
            style={styles.orderButton} 
            onPress={() => router.push('/orders')}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>ORDERS</Text>
          </TouchableOpacity>
        </View>

        <SearchBar />

        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=1000&auto=format&fit=crop' }} 
          style={styles.heroPic} 
        />

        <View style={styles.bodySection}>
          <Text style={styles.label}>Featured Parts</Text>
          
          <View style={styles.rowLayout}>
            <View style={styles.cardBox}>
              <Text style={styles.cardText}>Racing Pipe</Text>
            </View>
            <View style={styles.cardBox}>
              <Text style={styles.cardText}>Full Helmet</Text>
            </View>
          </View>
        </View>

        <View style={styles.modalArea}>
          <TouchableOpacity 
            style={styles.showModalBtn} 
            onPress={() => setOpen(true)}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>SHOW MODAL</Text>
          </TouchableOpacity>
        </View>

        <Modal visible={open} transparent={true} animationType="slide">
          <View style={styles.overlay}>
            <View style={styles.popup}>
              <Text style={{ fontSize: 18, marginBottom: 20 }}>This is a modal</Text>
              <Button 
                title="CLOSE MODAL" 
                color="#e53e3e"
                onPress={() => {
                  setOpen(false);
                  Alert.alert("MotoVibe", "Modal Closed!");
                }} 
              />
            </View>
          </View>
        </Modal>

        <View style={{ height: 50 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainWrapper: { 
    flex: 1, 
    backgroundColor: '#cbd5e0' 
  },
  navBar: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    padding: 25, 
    marginTop: 35,
    backgroundColor: 'white'
  },
  brandName: { fontSize: 24, fontWeight: 'bold' },
  orderButton: { backgroundColor: '#e53e3e', padding: 12, borderRadius: 10 },
  heroPic: { 
    width: '90%', 
    height: 300, 
    alignSelf: 'center', 
    borderRadius: 20, 
    marginTop: 20 
  },
  bodySection: { padding: 20 },
  label: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  rowLayout: { flexDirection: 'row', justifyContent: 'space-between' },
  cardBox: { 
    backgroundColor: 'white', 
    width: '48%', 
    padding: 25, 
    borderRadius: 20, 
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#a0aec0'
  },
  cardText: { fontWeight: 'bold' },
  modalArea: { alignItems: 'center', marginTop: 20 },
  showModalBtn: { 
    backgroundColor: '#1a202c', 
    padding: 15, 
    width: '80%', 
    alignItems: 'center', 
    borderRadius: 25 
  },
  overlay: { 
    flex: 1, 
    backgroundColor: 'rgba(0,0,0,0.6)', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  popup: { 
    backgroundColor: 'white', 
    padding: 40, 
    borderRadius: 20, 
    width: '80%', 
    alignItems: 'center' 
  }
});