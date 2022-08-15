import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={[styles.largeText, styles.textStyle]}
      >San Francisco</Text>
      <Text
        style={[styles.smallText, styles.textStyle]}
      >Light Cloud</Text>
      <Text
        style={[styles.largeText, styles.textStyle]}
      >24°</Text>
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
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
  },
  largeText: {
    fontSize: 44,
    color: 'red',
  },
  smallText: {
    fontSize: 18,
  }
});
