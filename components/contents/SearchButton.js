
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native'
import style from '../styles/style';
import searchStyle from '../styles/searchStyle';

const SearchButton = (props) => {
    return (
        <TouchableOpacity disabled={props.disabled} style={[searchStyle.signUpButton, {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:props.disabled?'#D5D8DC':'#faebd7'
        }]} onPress={() => props.onPress()}>
            <Text style={{
                fontSize: 15,
                color: 'black',
            }} >
                {
                    props.text ? props.text : '.'
                }
            </Text>
            

        </TouchableOpacity>
    );
};

export default SearchButton
