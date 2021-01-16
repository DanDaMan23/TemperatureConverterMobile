import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

import Header from "./components/Header";
import Card from "./components/Card";

const App = () => {
  const [currentTemperature, setCurrentTemperature] = useState('0');
  const [convertedTemperature, setConvertedTemperature] = useState('___');
  const [isFtoC, setIsFtoC] = useState(true);
  const [nullError, setNullError] = useState("");

  const F_TO_C = "Fahrenheit to Celsius";
  const C_TO_F = "Celsius to Fahrenheit";

  const switchConversion = () => {
    setIsFtoC(prevIsFtoC => !prevIsFtoC);
    setConvertedTemperature('___');
    setCurrentTemperature('0');
    setNullError("");
    console.log(isFtoC);
  }

  const fahrenheitToCelsius = (temperature) => {
    if (!temperature) {
      setNullError("*Enter a number");
      console.log("Ewroe");
      return;
    }

    let convertedTemp = ((parseFloat(temperature) - 32) * (5/9) ).toFixed(2);
    setConvertedTemperature(convertedTemp.toString() );
    setNullError("");
    console.log(convertedTemp)
  }

  const celsiusToFahrenheit = (temperature) => {
    if (!temperature) {
      setNullError("*Enter a number");
      console.log("Ewroe");
      return;
    }


    let convertedTemp = ((parseFloat(temperature) * (9/5) ) + 32 ).toFixed(2);
    setConvertedTemperature(convertedTemp.toString() );
    setNullError("");
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
          <Text>{convertedTemperature}&deg;</Text>
        </View>

        <View style={styles.errorTextContainer}>
          <Text style={styles.errorText}>{nullError}</Text>
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
  errorTextContainer: {
    alignSelf: 'center',
  },
  errorText: {
    color: 'red'
  }

});

export default App;