import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    tabDisplay:
    {
        flex: 1,
        backgroundColor: "green",
    }
});

export function TabDisplay(props) {
    return <View style={styles.tabDisplay}></View>;
}