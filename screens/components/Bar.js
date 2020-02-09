import React, { useState } from "react";
import { Animated, Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bar: {
    flex: 1,
    top: Dimensions.get("window").height / 3,
    width: "100%",
    height: 20,
    opacity: 0.8,
    backgroundColor: "#ffffff",
    zIndex: 1,
    position: "absolute"
  }
});

export function Bar(props) {
  return <Animated.View style={[styles.bar]}></Animated.View>;
}
