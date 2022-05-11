import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import AppButton from "../components/Button";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.tagline}> Sell What You Want</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          onPress={() => navigation.navigate("Login")}
        ></AppButton>
        <AppButton
          color="secondary"
          title="Register"
          onPress={() => navigation.navigate("Register")}
        ></AppButton>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
