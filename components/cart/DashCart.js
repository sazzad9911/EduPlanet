import React from "react";
import { StyleSheet, Dimensions, View, Text, Image, TouchableOpacity,} from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import style from "../styles/style";
import DropShadow from "react-native-drop-shadow";



const window = Dimensions.get('window')

const DashCart = (props) => {
    return (
        <View>
            <Image
                        style={{ height: 150, width: 250, borderRadius: 10,margin:15 }}
                        source={require('../cart/CartImage/mobileDesign.jpg')}
                    />
            <View style={{flexDirection:'row'}}>
            <Icon name={props.dIcon} size={30} color="black" style={{ marginTop: 10 }} />
            <Text style={{ fontSize: 18,marginLeft:5, }}>{props.dtext}</Text>
            </View>
        </View>

    )
}
export default DashCart