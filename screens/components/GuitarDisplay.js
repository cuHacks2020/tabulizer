import React from "react";
import { View, StyleSheet, Text } from "react-native";

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
    },
    highlightedFret: {
        width: 35,
        height: 50,
        backgroundColor: "#fff",
        marginBottom: 1,
        borderBottomColor: "#E3E3E3",
        borderBottomWidth: 3
        // justifyContent: "center"
    }
});

export function GuitarDisplay({ song, tabIndex }) {
    let frets = [];
    let strings = [];
    let numStrings = song.length;
    let numFrets = 14;

    strings.push(<View key="spacing" style={{ width: 15 }}></View>); //15 FOR DEEN'S iPHONE, 20 FOR VINH'S BRICK FONE
    for (let i = 0; i < numStrings; i++) {
        frets = [];
        
        for (let j = 0; j < numFrets; j++) {
            // for (let k = 0; k < song[i].line.length; j++) {
            //     let regExpression = (song[i].line)
            // }
            const cellValue = song[i].line[tabIndex];
            const highlight = /\d/.test(cellValue) && (j+1 === parseInt(cellValue) || cellValue === '0')
            frets.push(<View key={`${i}${j}`} style={highlight ?  styles.highlightedFret : styles.fret}></View>);
        }
        strings.push(<View key={`${song[i].note}${i}`}style={styles.string}><Text style={{ fontWeight: "bold", color: "white" }}> {song[i].note} </Text>{frets}</View >);
    }
    strings.push(<View key="bottom" style={{ width: 15 }}></View>);
    return <View style={styles.guitarDisplay}>{strings}</View>;
    // return <View></View>;
}