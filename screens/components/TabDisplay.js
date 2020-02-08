import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    tabDisplay:
    {
        backgroundColor: "green",
    }
});

export function TabDisplay(props) {
    return <View style={styles.tabDisplay}></View>;
}