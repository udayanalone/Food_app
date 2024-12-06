import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import ResultDetails from "./ResultDetails";
const ResultList = ({ title, result }) => {
  return (
    <View style={{marginBottom:10}}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result}
        keyExtractor={result=>result.id}
        renderItem={({item})=>{
            return <ResultDetails result={item}/>
        }
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom:5,
    marginLeft:10
  },
});

export default ResultList;
