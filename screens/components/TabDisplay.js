import React from "react";
import { View, StyleSheet } from "react-native";
import {TabColumn} from './TabColumn';

const styles = StyleSheet.create({
    tabDisplay:
    {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: "#5352ed",
    }
});

export function TabDisplay({song}) {
    return <View style={styles.tabDisplay}>
        {song.map((string) => (
            <TabColumn letter={string.note} data={string.line}></TabColumn>
        ))}
    </View>;
}