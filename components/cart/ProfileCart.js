import React from 'react';
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import style from "../styles/style";
const ProfileCart = (props) => {
    return (
        <View style={style.profileCart}>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Icon name={props.pIcon} size={45} color="black" style={{ marginTop: 10 }} />
                </View>
                <View>
                    <Text style={{ fontSize: 18,marginLeft:5, }}>{props.ptext}</Text>
                    <Text style={{ fontSize: 25, color: 'black',marginLeft:5 }}>{props.ptextA}</Text>
                </View>

            </View>
            <View style={{height:2,width:350,backgroundColor:'black',marginTop:5,marginLeft:10}}>
            </View>
        </View>
    );
};

export default ProfileCart;