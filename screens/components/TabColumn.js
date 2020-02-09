import React from "react";
import { Dimensions, View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  column: {
    bottom: 0,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    borderColor: "white",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    height: Dimensions.get("window").height
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
  }
});

export function TabColumn({ letter, data }) {
  return (
    <View style={styles.column}>
      <View style={{ flex: 1, height: Dimensions.get("window").height }} />
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{letter}</Text>
      </View>
      {data.map((item) => (
        <View key={item.note} style={styles.headerContainer}>
          <Text style={styles.header}>{item}</Text>
        </View>
      ))}
    </View>
  );
}
