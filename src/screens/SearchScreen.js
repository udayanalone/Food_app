import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet,ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from '../hooks/useResults';
import ResultList from "../components/ResultList";
// import yelp from "../api/yelp";

const SearchScreen = () => {
  const [text, setText] = useState("");
  const [searchAPi,result,errmsg]=useResults();

  const filterByCost=(price)=>{
    return result.filter(result=>{
      return result.price===price;
    })
  }

  return (
    <View>
      <SearchBar
        searchTerm={text}
        onSearchChange={(val) => setText(val)}
        onEndTester={() => searchAPi(text)}
      />
      {errmsg ? <Text>{errmsg}</Text> : null}
      <ScrollView>
      <Text>No of result {result.length}</Text>
      <ResultList result={filterByCost('$')} title="Cost Efficetive" />
      <ResultList result={filterByCost('$$')} title="Bit Expensive" />
      <ResultList result={filterByCost('$$$')} title="Money Spender" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
