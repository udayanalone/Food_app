import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const ResultDetails = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text >{result.rating} Rating , {result.reviews_count} Reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius:4
  },
  name:
  {
    fontWeight:'bold',
    fontSize:16,
    
  },
  container:
  {
    marginLeft:10
  }
});

export default ResultDetails;
