import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";

import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null); //null as the it is a empty object
  const [error, setError] = useState("");

  const id = navigation.getParam("id");

  const getResults = async (id) => {
    try {
      const response = await yelp.get(`${id}`);
      setResult(response.data);
    } catch (err) {
      setError("Something went wrong");
    }
  };

  useEffect(() => {
    getResults(id);
  }, []);

  if (!result) return null;
  return (
    <View>
      {error ? <Text>error</Text> : null}
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: 300,
    margin: 10,
    borderRadius: 5,
  },
});

export default ResultsShowScreen;
