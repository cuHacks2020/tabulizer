import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import { TabDisplay } from "./components/TabDisplay";
import { GuitarDisplay } from "./components/GuitarDisplay";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  }
});

export function GuitarScreen(props) {
  // console.log(props.navigation.state.params);
  const song = props.navigation.state.params.song;

  console.log(song);
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <TabDisplay song={song} />
      </View>
      <View style={{ flex: 2, backgroundColor: "indianred" }}>
        <GuitarDisplay song={song} />
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   talkDetails: {
//     paddingVertical: 48,
//     paddingHorizontal: 24,
//     borderBottomWidth: StyleSheet.hairlineWidth,
//     borderBottomColor: "#ccc"
//   },
//   title: {
//     fontSize: 36,
//     fontWeight: "700"
//   },
//   time: {
//     fontWeight: "700",
//     marginTop: 16
//   },
//   description: {
//     marginTop: 8
//   },
//   speaker: {
//     padding: 16,
//     borderRadius: 8,
//     shadowOffset: { width: 0, height: 15 },
//     shadowOpacity: 0.25,
//     shadowRadius: 28,
//     elevation: 3,
//     shadowColor: "#000",
//     flexDirection: "row",
//     backgroundColor: "#fff",
//     marginTop: 24,
//     marginHorizontal: 24,
//     alignItems: "center"
//   },
//   avatar: {
//     height: 80,
//     width: 80,
//     borderRadius: 80,
//     marginRight: 16
//   },
//   speakerName: {
//     fontSize: 16,
//     fontWeight: "700",
//     marginBottom: 4
//   },
//   speakerRole: {
//     fontSize: 11
//   },
//   guitar: {
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center"
//   },
//   string: {
//     backgroundColor: "green"
//   },
//   fret: {
//     width: 40,
//     height: 60,
//     backgroundColor: "#795548",
//     borderBottomColor: "#AAAAAA",
//     borderBottomWidth: 2
//   }
// });

/*
  console.log(frets[0]);
return (
  <View style={styles.container}>
    <Text>HAHAH</Text>
    <View style={{ backgroundColor: "green" }}>
      <Text>NIcE guy</Text>
    </View>
  </View >


  GOOD STUFFD C:

  let strings = [];
let frets = [];
const numStrings = 6;
const numFrets = 12;
for (let i = 0; i < numStrings; i++) {
  frets = [];

  for (let j = 0; j < numFrets; j++) {
    frets.push(
      <View style={styles.fret}>

      </View>
    );
  }


  strings.push(
    <View style={styles.guitar}>
      {frets}
    </View>
  );
}
return <View style={styles.container}>{strings}<Text>HAHAH</Text>
</View>;
*/
//};
