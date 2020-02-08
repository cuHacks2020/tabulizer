import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    guitarDisplay:
    {
        backgroundColor: "black",
    }
});

export function GuitarDisplay(props) {
    return <View style={styles.guitarDisplay}></View>;
}