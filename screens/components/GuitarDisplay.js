import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    guitarDisplay: {
        flexDirection: "row"
        // backgroundColor: "black"
    },
    guitar: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
        // justifyContent: "center"
    },
    string: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#A24A4A"
        // justifyContent: "center"
    },
    fret: {
        width: 35,
        height: 50,
        backgroundColor: "#3E3E3E",
        marginBottom: 1,
        borderBottomColor: "#E3E3E3",
        borderBottomWidth: 3
        // justifyContent: "center"
    }
});

export function GuitarDisplay(props) {
    let frets = [];
    let strings = [];
    let numStrings = 6;
    let numFrets = 14;
    strings.push(<View style={{ width: 20 }}></View>);
    for (let i = 0; i < numStrings; i++) {
        frets = [];
        for (let j = 0; j < numFrets; j++) {
            frets.push(<View style={styles.fret}></View>);
        }
        strings.push(<View style={styles.string}>{frets}</View>);
    }
    strings.push(<View style={{ width: 20 }}></View>);
    return <View style={styles.guitarDisplay}>{strings}</View>;
}
