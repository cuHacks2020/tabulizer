import React from "react";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    borderColor: "white",
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderTopWidth: 1
  },
  header: {
    color: "white"
  },
  headerContainer: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    width: "100%",
    height: 20,
    alignItems: "center",
    bottom: 0
  },
  noteContainer: {
    width: "100%",
    height: 20,
    alignItems: "center"
  }
});

export function TabColumn({ letter, data }) {
  return (
    <View style={styles.column}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{letter}</Text>
      </View>
      {data.map(item => (
        <View key={item.note} style={styles.noteContainer}>
          <Text style={styles.header}>{item}</Text>
        </View>
      ))}
    </View>
  );
}
