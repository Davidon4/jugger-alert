## Jugger Alert - React Native Expo Package

Jugger Alert is a customizable and reusable modal component for React Native Expo applications. It provides an easy way to display alerts and confirmation dialogs with various customization options.

---
<!-- TABLE OF CONTENTS -->
<details>
   <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#props">Props</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contribution</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Author Info</a></li>
  </ol>
</details>

---

## Getting Started

To use this library, You can install Jugger Alert using npm or yarn:

 ```sh
npm install jugger-alert
   ```
# or
  ```sh
yarn add jugger-alert
   ```

---

### Prerequisites

    Modularity: Jugger Alert provides a standalone and reusable modal component, enabling you to effortlessly incorporate alerts throughout your application.

    Customization: Customize the appearance and behavior of the modal to match your app's design and user experience requirements.

    Icon Variety: Choose from different icon options including a question mark, checkmark, thumbs-up, and a "sorry" symbol to suit the context of the alert.

    Responsive Design: Jugger Alert is designed to work seamlessly on various screen sizes and orientations.

    User Interaction: Users can confirm or cancel actions with the provided buttons, helping prevent accidental actions.

    Easy Integration: Integrate Jugger Alert into your app's flow by simply toggling the modal's visibility and handling the continue action.

---

## Props
| Property          | Type     | Description                            |
|-------------------|----------|----------------------------------------|
| `alertVisible`    | boolean  | Determines if the modal is visible.    |
| `setAlertVisible` | function | Control the visibility of the modal.   |
| `onContinue`      | function | Callback when "Continue" is pressed.   |
| `title`           | string   | The title of the modal.                |
| `message`         | string   | The message displayed in the modal.    |
| `juggerColor`     | string   | Background color of the modal.         |
| `firstButton`     | string   | Label for the first button.            |
| `secondButton`    | string   | Label for the second button.           |

---

## Usage

Import JuggerAlert in your component and use it within your app:
   ```sh
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
   ```

---

## Contribution
If you would like to create a contribution section on your project, check out the README.md file for an example on how to contribute. Provide information on how to contribute to your project in this section 

---
## License

---

## Author Info

[![Readme style](https://img.shields.io/badge/Author-github_username-color_of_your_choice)](https://github.com/github_username)
