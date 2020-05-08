import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {

    const [term, setTerm] = useState('');

    return(
        <View>
            <SearchBar
                term = {term}
                onSetTerm = {(newTerm) => setTerm(newTerm) } 
                onTermSubmit = {() => console.log('Term submitter')}
            />
            <Text>Search Term: {term}</Text>
        </View>
    );
} ;

const styles = StyleSheet.create({});

export default SearchScreen;