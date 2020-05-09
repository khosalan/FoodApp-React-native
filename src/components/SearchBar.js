import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'
 
const SearchBar = ({ term, onSetTerm, onTermSubmit }) => {
    return(
        <View style = {styles.backgroundStyle}>
            <Feather name = 'search' style = {styles.iconStyle} />
            <TextInput 
                autoCapitalize = 'none'
                autoCorrect = {false}
                style = {styles.textInputStyle} 
                placeholder = 'Serach'
                value = {term}
                onChangeText = {onSetTerm}
                onEndEditing = {onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        marginHorizontal: 15,
        marginTop: 10,
        borderRadius: 5,
        flexDirection: 'row'
    },

    textInputStyle: {        
        flex:1,
        fontSize: 18
    },

    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10        
    }
});

export default SearchBar;