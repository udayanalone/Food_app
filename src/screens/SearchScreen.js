import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet,ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from '../hooks/useResults';
import ResultList from "../components/ResultList";


const SearchScreen = ({navigation}) => {
  const [text, setText] = useState("");
  const [searchAPi,result,errmsg]=useResults();

  const filterByCost=(price)=>{
    return result.filter(result=>{
      return result.price===price;
    })
  }

  return (
    <>
      <SearchBar
        searchTerm={text}
        onSearchChange={(val) => setText(val)}
        onEndTester={() => searchAPi(text)}
      />
      {errmsg ? <Text>{errmsg}</Text> : null}
      <ScrollView>
      
      <ResultList result={filterByCost('$')} title="Cost Efficetive" />
      <ResultList result={filterByCost('$$')} title="Bit Expensive" />
      <ResultList result={filterByCost('$$$')} title="Money Spender" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
