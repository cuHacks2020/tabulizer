import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";

const styles = StyleSheet.create({
  bar: {
    flex: 1,
    top: Dimensions.get("window").height / 3,
    width: "100%",
    height: 20,
    opacity: 0.5,
    backgroundColor: "#ffffff",
    zIndex: 1,
    position: "absolute"
  }
});

export function Bar(props) {
  return <View style={styles.bar}></View>;
}
