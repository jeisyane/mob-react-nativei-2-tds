import { StatusBar } from 'expo-status-bar';
import React from 'react-native';
import {StyleSheet, Text, View} from  'react-native';

import Cesta from './scr/telas/cesta';
 
export default function App() {
  return (
    <View style={styles.container}>
      <Cesta />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
