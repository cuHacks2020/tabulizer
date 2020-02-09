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
    zIndex: 0
    // bottom: 0,
    // position: "absolute"
  }
});

export function TabDisplay({ song }) {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [size, setSize] = useState(0);

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: -Dimensions.get("window").height * 5,
      duration: 10000
    }).start(() => {
      //If you remove above line then it will stop the animation at toValue point
    });
  };

  const transformStyle = {
    transform: [
      {
        translateY: animation
      }
    ]
  };

  const layoutSize = event => {
    setSize(event.nativeEvent.layout.height);
  };

  startAnimation();

  return (
    <Animated.View
      style={[styles.tabDisplay, transformStyle]}
      onLayout={layoutSize}
    >
      {song.map(string => (
        <TabColumn letter={string.note} data={string.line}></TabColumn>
      ))}
    </Animated.View>
  );
}
