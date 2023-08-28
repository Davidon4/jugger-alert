# Jugger Alert - React Native Expo Package

Jugger Alert is a customizable and reusable modal component for React Native Expo applications. It provides an easy way to display alerts and confirmation dialogs with various customization options.

## Installation

You can install Jugger Alert using npm or yarn:

```bash
npm install jugger-alert

# or

yarn add jugger-alert

Usage

Import JuggerAlert in your component and use it within your app:

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import JuggerAlert from 'jugger-alert';

const { width, height } = Dimensions.get('window');

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleContinue = () => {
    console.log("Continue button pressed");
  };

  return (
    <View style={styles.container}>
      <JuggerAlert
        alertVisible={modalVisible}
        setAlertVisible={setModalVisible} 
        onContinue={handleContinue}
        question
        title="Are you sure?"
        message="You are about to book a ride, please confirm your choice."
        juggerColor="blue"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'blue',
    height: height / 18,
    width: width / 3,
    justifyContent: "center",
    alignItems: "center"
  },
});

Props

    alertVisible: (boolean) - Determines if the modal is visible.
    setAlertVisible: (function) - A function to control the visibility of the modal.
    onContinue: (function) - A function to be called when the "Continue" button is pressed.
    question, checkmark, sorry: (boolean) - Set these to true to change the modal icon.
    title: (string) - The title of the modal.
    message: (string) - The message displayed in the modal.
    juggerColor: (string) - The background color of the modal.
    firstButton, secondButton: (string) - Custom labels for the buttons.

License

This package is open-source and available under the MIT License.

Feel free to contribute, report issues, or suggest improvements!
