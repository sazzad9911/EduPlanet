import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native'
import Cart1 from '../cart/Cart1';
import Button from '../contents/Button';
import style from '../styles/style';

const Categories = () => {
    return (
        <View style={style.viwe}>
            <View style={style.viwe1}>
                   <Cart1 onPress={() => console.log('akash')}></Cart1>
                   <Cart1 onPress={() => console.log('akash')}></Cart1>
                   <Cart1 onPress={() => console.log('akash')}></Cart1>
            </View>
            <View style={style.viwe1}>
                   <Cart1 onPress={() => console.log('akash')}></Cart1>
                   <Cart1 onPress={() => console.log('akash')}></Cart1>
                   <Cart1 onPress={() => console.log('akash')}></Cart1>
            </View>
            <View style={style.viwe1}>
                   <Cart1 onPress={() => console.log('akash')}></Cart1>
                   <Cart1 onPress={() => console.log('akash')}></Cart1>
                   <Cart1 onPress={() => console.log('akash')}></Cart1>
            </View>
            <View style={style.viwe1}>
                   <Cart1 onPress={() => console.log('akash')}></Cart1>
                   <Cart1 onPress={() => console.log('akash')}></Cart1>
                   <Cart1 onPress={() => console.log('akash')}></Cart1>
            </View>
            <TouchableOpacity style={style.viwe3}>
                <Text style={style.categoriesText}>Continue</Text>
            </TouchableOpacity>


        </View>
    );
};

export default Categories;