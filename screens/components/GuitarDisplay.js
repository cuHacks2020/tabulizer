import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    guitarDisplay:
    {
        flex: 1,
        backgroundColor: "#70a1ff",
    }
});

export function GuitarDisplay(props) {
    return <View style={styles.guitarDisplay}></View>;
}