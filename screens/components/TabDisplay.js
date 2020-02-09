import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  View,
  StyleSheet,
  ScrollView
} from "react-native";
import { TabColumn } from "./TabColumn";

const styles = StyleSheet.create({
  tabDisplay: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#5352ed",
    zIndex: 0,
    top: 0
  }
});

export function TabDisplay({ letters }) {
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: Dimensions.get("window").height,
      duration: 10000
    }).start(() => {
      //   setAnimation(new Animated.Value(0));
      //If you remove above line then it will stop the animation at toValue point
    });
  };
  startAnimation();

  const transformStyle = {
    transform: [
      {
        translateY: animation
      }
    ]
  };

  return (
    // <ScrollView ref={scrollRef} style={styles.scrollView}>
    <Animated.View style={[styles.tabDisplay, transformStyle]}>
      <View style={styles.tabDisplay}>
        {song.map(string => (
          <TabColumn letter={string.note} data={string.line}></TabColumn>
        ))}
      </View>
    </Animated.View>
    // </ScrollView>
  );
}
