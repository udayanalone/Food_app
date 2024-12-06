import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";
import yelp from "../api/yelp";
import { TextInput } from "react-native-gesture-handler";
const ResultShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const fetchResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    fetchResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <>
      <Text style={styles.title}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return (
            <>
              <Image source={{ uri: item }} style={styles.image} />
            </>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: 300,
    alignSelf: "center",
    marginVertical: 8,
  },
  title: {
    //alignSelf: "center",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
    backgroundColor: "#d3d3d3",
    textAlign:'center',
    margin:10,
    height:35,textAlignVertical:'center',
    borderRadius:20
  },
});

export default ResultShowScreen;
