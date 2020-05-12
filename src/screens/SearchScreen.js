import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");

  const filterByPrice = (price) =>
    results.filter((result) => result.price === price);

  const [searchApi, results, errorMessage] = useResults();

  return (
    //placeholder synatx, when we want return multiple elements or grouping of elements. when use view some will get cutoff. can use flex: 1 in view to solve.
    //Best to use placeholder
    <>
      <SearchBar
        term={term}
        onSetTerm={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultList title="Cost Effective" results={filterByPrice("$")} />
        <ResultList title="Bit Pricer" results={filterByPrice("$$")} />
        <ResultList title="Big spender" results={filterByPrice("$$$")} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
