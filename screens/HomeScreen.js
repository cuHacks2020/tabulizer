import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { getSong } from "../src/WebParser";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  appName: {
    fontSize: 55,
    fontWeight: "700",
    color: "#5f27cd"
  },
  description: {
    paddingHorizontal: 48,
    textAlign: "center",
    marginBottom: 20,
    color: "#341f97"
  },
  button: {
    backgroundColor: "#341f97",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 4,
    width: 350,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 50
  },
  buttonText: {
    color: "white",
    fontSize: 17
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    width: 350,
    marginBottom: 20,
    paddingHorizontal: 10
  }
});

export const HomeScreen = props => {
  const { navigation } = props;
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(
    "https://www.azchords.com/c/cashjohnny-tabs-717/hurt-tabs-7752.html"
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      key={item.key}
      style={styles.button}
      onPress={() => navigation.navigate("Guitar")}
    >
      <Text style={styles.buttonText}>{item.key}</Text>
    </TouchableOpacity>
  );

  const onSearch = async () => {
    setLoading(true);
    let songObj;
    try {
      songObj = await getSong(url);
      setSong(songObj);
    } catch {
      setSong("bad");
      setLoading(false);
      return;
    }

    console.log(songObj);
    navigation.navigate("Guitar", { song: songObj });
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
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        song === "bad" && <Text>Failed to parse song</Text>
      )}
    </View>
  );
};

HomeScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};
