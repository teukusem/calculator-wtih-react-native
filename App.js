import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './JS/Home';

export default function App() {
  return (
    <View >
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

