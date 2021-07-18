import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen';

export default function App() {
  return (
    <View>
      <StatusBar />
      <ProductScreen />
    </View>
  );
}

const styles = StyleSheet.create({});
