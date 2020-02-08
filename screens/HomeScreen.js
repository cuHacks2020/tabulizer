import React, {useEffect, useState} from "react";
import {StyleSheet, View, Text, TextInput, TouchableOpacity, ActivityIndicator} from "react-native";
// import {getSongs} from "../utilities";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  appName: {
    fontSize: 55,
    fontWeight: '700',
    color: '#5f27cd'
  },
  description: {
    paddingHorizontal: 48,
    textAlign: 'center',
    marginBottom: 20,
    color: '#341f97'
  },
  button: {
    marginTop: 20,
    backgroundColor: '#341f97',
    paddingHorizontal: 30,
    paddingVertical: 16,
    borderRadius: 4,
    minWidth: 350,
    fontSize: 50
  },
  buttonText: {
    color: "white",
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    fontSize: 17,
    borderColor: 'gray', 
    borderWidth: 1,
    minWidth: 350
  }
})

export const HomeScreen = (props) => 
{
  const {navigation} = props;
  const [songs, setSongs] = useState(null);
  const [url, setUrl] = useState('');
  // useEffect(() => {
  //   setSongs(getSongs())
  // }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity key={item.key} style={styles.button} onPress={() => navigation.navigate('Guitar')}>
      <Text style={styles.buttonText}>{item.key}</Text>
    </TouchableOpacity>
  )
  
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Tabulizerr</Text>
      <Text style={styles.description}>Enter a song URL</Text>

      <TextInput 
      style={styles.input}
      onChangeText={text => setUrl(text)}
      value={url}
      />
      <TouchableOpacity disabled style={styles.button} onPress={() => navigation.navigate('Guitar')}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      {/* {songs ?
        <FlatList
            data={songs}
            renderItem={renderItem} 
        /> : <ActivityIndicator size="large" color="#0000ff" />} */}
      
    </View>
  );
}

HomeScreen.navigationOptions = () => {
  return {
    headerShown: false,
  }
}