import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

import ResultDetails from "../components/ResultDetails";

const ResultList = ({ title, results }) => {
  return (
    <View style={styles.constainer}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultDetails result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    marginBottom: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
});

export default ResultList;
