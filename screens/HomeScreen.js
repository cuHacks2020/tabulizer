import React from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    marginBottom: 40,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  appName: {
    fontSize: 55,
    fontWeight: '700',
    color: '#5f27cd'
  },
  description: {
    paddingHorizontal: 48,
    textAlign: 'center',
    marginBottom: 48,
    color: '#341f97'
  },
  button: {
    backgroundColor: '#341f97',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: "white",
  }
})

export const HomeScreen = (props) => 
{
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Tabulizerr</Text>
      <Text style={styles.description}>Select a song:</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Guitar')}>
        <Text style={styles.buttonText}>Get started</Text>
      </TouchableOpacity>
    </View>
  );
}

HomeScreen.navigationOptions = () => {
  return {
    headerShown: false,
  }
}