import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

import Header from "./components/Header";
import Card from "./components/Card";

export default function App() {
  const [currentTemperature, setCurrentTemperature] = useState('0');
  const [convertedTemperature, setConvertedTemperature] = useState('');

  const fahrenheitToCelsius = (temperature) => {
    let celsius = ((parseFloat(temperature) - 32) * (5/9) ).toFixed(2);
    setConvertedTemperature(celsius.toString() );
    console.log(celsius)
  }

  return (
    <View style={styles.screen}>
      <Header title="Temperature Converter" />

      <Card>
        <View style={styles.container}>
          <Text style={styles.userInputTitle}>Fahrenheit: </Text>
          <TextInput
            style={styles.userInput}
            keyboardType="number-pad"
            onChangeText={setCurrentTemperature}
            value={currentTemperature}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.userInputTitle}>Celsius: </Text>
          <Text>{convertedTemperature}</Text>
        </View>

        <Button title="Convert" style={styles.convertButton} onPress={fahrenheitToCelsius.bind(this, currentTemperature)} />
      </Card>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#7e8385",
  },
  container: {
    flexDirection: 'row',
    justifyContent: "space-around"
  },
  userInputTitle: {
    padding: 5,
    flex: 3
  },
  userInput: {
    backgroundColor: '#e6eef0',
    flex: 1,
    textAlign: "center"
  },
  convertButton: {
    width: '30%',
    backgroundColor: "red"
  }
});
