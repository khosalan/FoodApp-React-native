import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultDetails = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.text}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },

  text: {
    fontWeight: "bold",
    marginTop: 5,
  },

  image: {
    width: 250,
    height: 150,
    borderRadius: 5,
  },
});

export default ResultDetails;
