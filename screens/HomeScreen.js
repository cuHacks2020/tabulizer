import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { getSong } from "../src/WebParser";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  appName: {
    fontSize: 55,
    fontWeight: "700",
    color: "#5f27cd"
  },
  description: {
    paddingHorizontal: 48,
    textAlign: "center",
    marginBottom: 48,
    color: "#341f97"
  },
  button: {
    backgroundColor: "#341f97",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4
  },
  buttonText: {
    color: "white"
  }
});

export const HomeScreen = (props) => {
  const { navigation } = props;
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('https://www.azchords.com/a/adamsandler-tabs-113/odetomycar-tabs-205998.html');

  const renderItem = ({ item }) => (
    <TouchableOpacity key={item.key} style={styles.button} onPress={() => navigation.navigate('Guitar')}>
      <Text style={styles.buttonText}>{item.key}</Text>
    </TouchableOpacity>
  )

  const onSearch = async () => {
    setLoading(true);
    try {
      setSong(await getSong(url));
    } catch {
      setSong("bad");
      setLoading(false);
      return;
    }

    navigation.navigate('Guitar');
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Tabulizer</Text>
      <Text style={styles.description}>Enter a song URL</Text>

      <TextInput
        style={styles.input}
        onChangeText={text => setUrl(text)}
        value={url}
      />
      <TouchableOpacity style={styles.button} onPress={onSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      {loading ? <ActivityIndicator size="large" color="#0000ff" /> : song === "bad" && <Text>Failed to parse song</Text>}

    </View>
  );
};

HomeScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};
