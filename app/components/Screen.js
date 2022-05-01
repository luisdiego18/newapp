import React from "react";
import { SafeAreaView } from "react-native-web";

function Screen({ children }) {
  return <SafeAreaView style={styles.Screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;
