import React from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import { TabColumn } from "./TabColumn";

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    backgroundColor: "#5352ed"
  },
  tabDisplay: {
    flex: 1,
    flexDirection: "row",
    top: Dimensions.get("window").height / 3 - 20,
    justifyContent: "center",
    backgroundColor: "#5352ed"
  }
});

export function TabDisplay({ song }) {
  return (
    <View style={styles.tabContainer}>
      <View style={styles.tabDisplay}>
        {song.map(string => (
          <TabColumn letter={string.note} data={string.line}></TabColumn>
        ))}
      </View>
    </View>
  );
}
