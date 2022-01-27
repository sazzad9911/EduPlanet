
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native'
import style from '../styles/style';
import searchStyle from '../styles/searchStyle';

const SearchButton = (props) => {
    return (
        <TouchableOpacity style={[searchStyle.signUpButton, {
            justifyContent: 'center',
            alignItems: 'center'
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
