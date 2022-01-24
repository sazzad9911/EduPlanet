import React from "react";
import { StyleSheet, Dimensions, View, Text, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import style from "../styles/style";
import DropShadow from "react-native-drop-shadow";
const window = Dimensions.get('window')

const Cart1 = (props) => {
    return (
        <DropShadow
            style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 0,
                },
                shadowOpacity: 1,
                shadowRadius: 5,
            }}>
            <TouchableOpacity style={style.cartButton} onPress={() => props.onPress()}>

                <Image
                    style={{ height: 40, width: 40 }}
                    source={{
                        uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
                    }}
                />
            </TouchableOpacity>

        </DropShadow>

    )
}
export default Cart1