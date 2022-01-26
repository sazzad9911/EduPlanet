import React from 'react';
import { View, Text, Image } from 'react-native'
import style from '../styles/style'
const SignIn = () => {
    return (
        <View>
            <View style={style.topDesign}>
                <View style={style.logoDesign}>
                    <Image
                        style={style.logoImage}
                        source={{
                            uri: 'https://cdn5.vectorstock.com/i/1000x1000/47/39/e-letter-education-logo-icon-design-vector-22644739.jpg'
                        }}
                    />
                </View>
                <Text style={style.headLine}>Edu Planet</Text>
            </View>
        </View>
    );
};

export default SignIn;