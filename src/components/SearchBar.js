import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
const SearchBar = ({ text, onSearchChange,onEndTester }) => {
  return (
    <View style={styles.searchBackground}>
      <FontAwesome
        name="search"
        size={25}
        color="black"
        style={styles.iconStyle}
      />
      <TextInput
        style={{ flex: 1, fontSize: 18 }}
        placeholder="Search"
        value={text}
        onChangeText={onSearchChange}
        onEndEditing={onEndTester}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBackground: {
    height: 50,
    backgroundColor: "rgb(169,168,168)",
    borderRadius: 20,
    marginHorizontal: 10,
    marginTop: 10,
    flexDirection: "row",
    marginTop: 15,
  },
  iconStyle: {
    alignSelf: "center",
    fontSize: 35,
    paddingHorizontal: 15,
  },
});

export default SearchBar;
