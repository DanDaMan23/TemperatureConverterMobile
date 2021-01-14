import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Header from './components/Header';
import Card from './components/Card';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Temperature Converter" />

      <Card style={styles.temperatureConverter}>
        <Text>Hello</Text>
        <Button title="Button" />
      </Card>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#7e8385'
  },
  temperatureConverter: {
  }
});
