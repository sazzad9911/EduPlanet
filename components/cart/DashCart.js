import React from "react";
import { StyleSheet, Dimensions, View, Text, Image, TouchableOpacity,} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import style from "../styles/style";
import DropShadow from "react-native-drop-shadow";



const window = Dimensions.get('window')

const DashCart = (props) => {
    return (
        <View style={{width:280}}>
            <Image
                        style={{ height: 150, width: 250, borderRadius: 10,margin:15 }}
                        source={require('../cart/CartImage/mobileDesign.jpg')}
                    />
            <TouchableOpacity style={{flexDirection:'row',width:280,}}>
            <Icon name={props.dIcon} size={50} color="#EE4DE8" style={{ marginTop: 10,marginLeft:10 }} />
            <Text style={{ fontSize: 25,marginLeft:5,color:'black',flex:2 }}>{props.dtext}</Text>
            </TouchableOpacity>
        </View>

    )
}
export default DashCart