import React, { useState } from "react";
import {
  Animated,
  Dimensions,
  View,
  StyleSheet,
  TouchableOpacity
} from "react-native";

const styles = StyleSheet.create({
  bar: {
    flex: 1,
    top: Dimensions.get("window").height / 2,
    width: "100%",
    height: 20,
    opacity: 0.8,
    backgroundColor: "#ffffff",
    zIndex: 1,
    position: "absolute"
  }
});

export function Bar(props) {
  //   const [animation, setAnimation] = useState(new Animated.Value(0));

  //   const startAnimation = () => {
  //     Animated.timing(animation, {
  //       toValue: Dimensions.get("window").height,
  //       duration: 10000
  //     }).start(() => {
  //       //   setAnimation(new Animated.Value(0));
  //       //If you remove above line then it will stop the animation at toValue point
  //     });
  //   };
  //   startAnimation();

  //   const transformStyle = {
  //     transform: [
  //       {
  //         translateY: animation
  //       }
  //     ]
  //   };

  return <Animated.View style={[styles.bar]}></Animated.View>;
}
