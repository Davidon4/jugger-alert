## Jugger Alert - React Native Package

Jugger Alert is a customizable and reusable modal component for React Native Expo applications. It provides an easy way to display alerts and confirmation dialogs with various customization options.

---
### Project Demo Video

<video width="320" height="240" controls>
    <source src="assets/juggerVideo.mov" type="video/quicktime">
    Your browser does not support the video tag.
</video>


---
<!-- TABLE OF CONTENTS -->
<details>
   <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#key-features">Key Features</a></li>
        <li><a href="#props">Props</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#improvement">Improvement</a></li>
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

## Key Features

- **Modularity:** Jugger Alert provides a standalone and reusable modal component, enabling you to effortlessly incorporate alerts throughout your application.

- **Customization:** Customize the appearance and behavior of the modal to match your app's design and user experience requirements.

- **Icon Variety:** Choose from different icon options including a question mark, checkmark, thumbs-up, and a "sorry" symbol to suit the context of the alert.

- **Responsive Design:** Jugger Alert is designed to work seamlessly on various screen sizes and orientations.

- **User Interaction:** Users can confirm or cancel actions with the provided buttons, helping prevent accidental actions.

- **Easy Integration:** Integrate Jugger Alert into your app's flow by simply toggling the modal's visibility and handling the continue action.


---

## Props
| Property          | Type     | Description                            | Default Value       |
|-------------------|----------|----------------------------------------|---------------------|
| `alertVisible`    | boolean  | Determines if the modal is visible.    | `false`             |
| `setAlertVisible` | function | Control the visibility of the modal.   |                     |
| `onContinue`      | function | Callback when "Continue" is pressed.   |                     |
| `title`           | string   | The title of the modal.                |    |
| `message`         | string   | The message displayed in the modal.    |                     |
| `juggerColor`     | string   | Background color of the modal.         | `"blue"`            |
| `firstButton`     | string   | Label for the first button.            | `"Cancel"`          |
| `secondButton`    | string   | Label for the second button.           | `"Continue"`        |


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
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',     
  },
  buttonContainer: {
    flex: 1,                  
    justifyContent: 'center', 
    alignItems: 'center',     
  },
  button: {
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'blue',
    height: height / 18,
    width: width / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
  },
});
   ```

---

## Improvement
If you're interested in enhancing the library by creating additional features, feel free to create an issue and outline the specific improvements you have in mind.

---
## License

Licensed under the [MIT](https://github.com/Davidon4/jugger-alert/blob/main/LICENSE).

---

## Author Info

[![Readme style](https://img.shields.io/badge/Author-Juggernaut.dev-blueviolet)](https://github.com/Davidon4)
