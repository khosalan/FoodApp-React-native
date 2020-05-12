import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");

  const filterByPrice = (price) =>
    results.filter((result) => result.price === price);

  const [searchApi, results, errorMessage] = useResults();

  return (
    <View>
      <SearchBar
        term={term}
        onSetTerm={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultList title="Cost Effective" results={filterByPrice("$")} />
      <ResultList title="Bit Pricer" results={filterByPrice("$$")} />
      <ResultList title="Big spender" results={filterByPrice("$$$")} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
