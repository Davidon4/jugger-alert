import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import * as Font from "expo-font";

import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import icoMoonConfig from "../selection.json";
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

const { width, height } = Dimensions.get('window');

export default function AlertStyle (props) {
    const {checkmark, question, sorry,  title, message, buttonSection1, buttonSection2} = props;
    const [fontLoaded, setFontLoaded] = useState(false);

    const iconName = checkmark ? "checkmark" : question ? "question" : sorry ? "sorry" : "thumbs-o-up";

    // const AlertStyle = {
    //     name: iconName,
    // }

    useEffect(() => {
        const loadFonts = async () => {
          try {
            await Font.loadAsync({
              'icomoon': require("../assets/fonts/icomoon.ttf"),
            });
            setFontLoaded(true);
          } catch (error) {
            console.log("Error loading fonts: ", error);
          }
        };
        loadFonts();
      }, []);
      if (!fontLoaded) {
        console.log("Fonts are still loading...");
        return null;
      }
  return (
    <View style={styles.container}>
        <View style={styles.iconContainer}>
      <Icon name={iconName} size={60} color="white" />
      </View>
      <View style={styles.textSection}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.messageContainer}>
        <Text style={styles.message}>{message}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[styles.button, {borderBottomLeftRadius:30, backgroundColor: '#fff' }]}
        onPress={() => console.log('Cancel Button pressed')}
      >
        <Text style={[styles.buttonText, {color: 'black'}]}>{buttonSection1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={[styles.button, {borderBottomRightRadius:30}]}
        onPress={() => console.log('Continue Button pressed')}
      >
        <Text style={styles.buttonText}>{buttonSection2}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    height: height / 3.3,
    width: width / 1.5,
    position: 'relative',
    borderRadius: 30,
    paddingVertical: 20,
    shadowOpacity: 0.5
  },
  iconContainer:{
    backgroundColor: 'blue',
    borderRadius: 100,
    height: height / 11,
    width: width / 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textSection:{
    alignItems: 'center',
    marginTop: 5
  },
  title:{
    fontWeight: 'bold',
    fontSize: 20
  },
  message:{
    padding: 2,
    textAlign: 'center'
  },
  messageContainer:{
    paddingHorizontal: 30
    },
    buttonContainer:{
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    button:{
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'blue',
        height: height / 18,
        width: width / 3,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText:{
        color: '#fff',
        fontWeight: '800',
        fontSize: 15
    }
});