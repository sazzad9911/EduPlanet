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
                shadowOpacity: 0.3,
                shadowRadius: 5,
            }}>
            <TouchableOpacity style={[style.cartButton,props.style]} onPress={() =>{
                if(props.onPress){
                    props.onPress()
                }
            }}>

                <Image
                    style={{ height: 45, width: 45, marginTop:5}}
                    source={props.image}
                />
                <Text style={style.categoriesText1}>{props.data}</Text>
            </TouchableOpacity>

        </DropShadow>

    )
}
export default Cart1