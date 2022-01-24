
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native'
import style from '../styles/style';
const Button = (props) => {
    return (
        <TouchableOpacity style={[style.signUpButton, {
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


