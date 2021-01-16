import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

import Header from "./components/Header";
import Card from "./components/Card";

const App = () => {
  const [currentTemperature, setCurrentTemperature] = useState('0');
  const [convertedTemperature, setConvertedTemperature] = useState('');
  const [isFtoC, setIsFtoC] = useState(true);

  const F_TO_C = "Fahrenheit to Celsius";
  const C_TO_F = "Celsius to Fahrenheit";

  const switchConversion = () => {
    setIsFtoC(prevIsFtoC => !prevIsFtoC);
    setConvertedTemperature('');
    setCurrentTemperature('0');
    console.log(isFtoC);
  }

  const fahrenheitToCelsius = (temperature) => {
    let convertedTemp = ((parseFloat(temperature) - 32) * (5/9) ).toFixed(2);
    setConvertedTemperature(convertedTemp.toString() );
    console.log(convertedTemp)
  }

  const celsiusToFahrenheit = (temperature) => {
    let convertedTemp = ((parseFloat(temperature) * (5/9) ) + 32 ).toFixed(2);
    setConvertedTemperature(convertedTemp.toString() );
    console.log(convertedTemp)
  }

  let inputLabel = isFtoC ? <Text style={styles.userInputTitle}>Fahrenheit: </Text> : <Text style={styles.userInputTitle}>Celsius: </Text>;
  let resultLabel = isFtoC ? <Text style={styles.userInputTitle}>Celsius: </Text> : <Text style={styles.userInputTitle}>Fahrenheit: </Text>;

  let currentConversion = isFtoC ? fahrenheitToCelsius : celsiusToFahrenheit;

  return (
    <View style={styles.screen}>
      <Header title="Temperature Converter" />

      <View style={styles.conversionSwitchButton}>
        <Button title={isFtoC ? F_TO_C : C_TO_F} onPress={switchConversion} />
      </View>

      <Card>
        <View style={styles.container}>
          {inputLabel}
          <TextInput
            style={styles.userInput}
            keyboardType="number-pad"
            onChangeText={setCurrentTemperature}
            value={currentTemperature}
          />
        </View>

        <View style={styles.container}>
          {resultLabel}
          <Text>{convertedTemperature}</Text>
        </View>

        <View style={styles.convertButton}>
          <Button title="Convert" onPress={currentConversion.bind(this, currentTemperature)} />
        </View>


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
    alignSelf: 'flex-end'
  },
  conversionSwitchButton: {
    width: '50%',
    marginVertical: 30,
    alignSelf: 'center'
  },

});

export default App;