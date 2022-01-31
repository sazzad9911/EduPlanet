import React from 'react';
import { TouchableOpacity, Text, Image, Dimensions,View } from 'react-native';

const Cart = (props) => {
    const window = Dimensions.get('window')
    return (
        <TouchableOpacity onPress={() =>props.onPress()} style={{
            width: window.width / 2 - 20,
            height: 150,
            backgroundColor: '#ffff',
            borderRadius: 10,
            margin: 5,
        }}>
            <Image style={{
                width: window.width / 2 - 20,
                height: 150,
                borderRadius: 10,
            }} source={props.image} />
            <View style={{
                position: 'absolute',
            }}>
                <Text style={[
                    {
                        fontSize: 22,
                        fontWeight: '700',
                        marginTop: 20,
                        marginLeft: props.margin,
                    }
                ]}>{props.title}</Text>
                <Text style={[
                    {
                        margin:5,
                        fontSize: 22,
                        fontWeight: '700',
                        marginLeft: props.marginSecond ? props.marginSecond : 10,
                    }
                ]}>{props.secondTitle ? props.secondTitle : ' '}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Cart;