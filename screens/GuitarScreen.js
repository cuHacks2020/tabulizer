import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  talkDetails: {
    paddingVertical: 48,
    paddingHorizontal: 24,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#ccc"
  },
  title: {
    fontSize: 36,
    fontWeight: "700"
  },
  time: {
    fontWeight: "700",
    marginTop: 16
  },
  description: {
    marginTop: 8
  },
  speaker: {
    padding: 16,
    borderRadius: 8,
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.25,
    shadowRadius: 28,
    elevation: 3,
    shadowColor: "#000",
    flexDirection: "row",
    backgroundColor: "#fff",
    marginTop: 24,
    marginHorizontal: 24,
    alignItems: "center"
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 80,
    marginRight: 16
  },
  speakerName: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4
  },
  speakerRole: {
    fontSize: 11
  }
});

export const GuitarScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Guitar</Text>
    </View>
  );
};
