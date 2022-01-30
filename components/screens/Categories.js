import React from 'react';
import { View, Text, TouchableOpacity, ScrollView ,Alert} from 'react-native'
import Cart1 from '../cart/Cart1';
import Button from '../contents/Button';
import style from '../styles/style'
import a from '../cart/CartImage/a.png'
import b from '../cart/CartImage/b.png'
import c from '../cart/CartImage/c.png'
import d from '../cart/CartImage/d.png'
import e from '../cart/CartImage/e.png'
import f from '../cart/CartImage/f.png'
import g from '../cart/CartImage/g.png'
import h from '../cart/CartImage/h.png'
import i from '../cart/CartImage/i.png'
import j from '../cart/CartImage/j.png'
import k from '../cart/CartImage/k.png'
import l from '../cart/CartImage/l.png'
const Categories = (props) => {
    const navigation = props.navigation
    const [SelectedCategory,setSelectedCategory] =React.useState(null);
    return (
        <ScrollView style={style.viwe}>
            <View style={style.viwe1}>
                <Cart1 style={{
                    backgroundColor:SelectedCategory=='Mobile Design'?'#D2B4DE':'#FCF3DF'
                }} data='Mobile Design' image={a} onPress={() =>{
                    setSelectedCategory('Mobile Design')
                }}></Cart1>
                <Cart1 style={{
                    backgroundColor:SelectedCategory=='3D modeling'?'#D2B4DE':'#FCF3DF'
                }} data='3D modeling' image={b} onPress={() =>{
                    setSelectedCategory('3D modeling')
                }}></Cart1>
                <Cart1 style={{
                    backgroundColor:SelectedCategory=='Web Designing'?'#D2B4DE':'#FCF3DF'
                }} data='Web Designing' image={c} onPress={() =>{
                    setSelectedCategory('Web Designing')
                }}></Cart1>
            </View>
            <View style={style.viwe1}>
                <Cart1 style={{
                    backgroundColor:SelectedCategory=='Illustrations'?'#D2B4DE':'#FCF3DF'
                }} data='Illustrations' image={d} onPress={() =>{
                    setSelectedCategory('Illustrations')
                }}></Cart1>
                <Cart1 style={{
                    backgroundColor:SelectedCategory=='Drawing'?'#D2B4DE':'#FCF3DF'
                }} data='Drawing' image={e} onPress={() =>{
                    setSelectedCategory('Drawing')
                }}></Cart1>
                <Cart1 style={{
                    backgroundColor:SelectedCategory=='Animation'?'#D2B4DE':'#FCF3DF'
                }} data='Animation' image={f} onPress={() =>{
                    setSelectedCategory('Animation')
                }}></Cart1>
            </View>
            <View style={style.viwe1}>
                <Cart1 style={{
                    backgroundColor:SelectedCategory=='Education'?'#D2B4DE':'#FCF3DF'
                }} data='Education' image={g} onPress={() => {
                    setSelectedCategory('Education')
                }}></Cart1>
                <Cart1 style={{
                    backgroundColor:SelectedCategory=='Networking'?'#D2B4DE':'#FCF3DF'
                }} data='Networking' image={h} onPress={() => {
                    setSelectedCategory('Networking')
                }}></Cart1>
                <Cart1 style={{
                    backgroundColor:SelectedCategory=='Coding'?'#D2B4DE':'#FCF3DF'
                }} data='Coding' image={i} onPress={() => {
                    setSelectedCategory('Coding')
                }}></Cart1>
            </View>
            <View style={style.viwe1}>
                <Cart1 style={{
                    backgroundColor:SelectedCategory=='Digital Marketing'?'#D2B4DE':'#FCF3DF'
                }} data='Digital Marketing' image={j} onPress={() => {
                    setSelectedCategory('Digital Marketing')
                }}></Cart1>
                <Cart1 style={{
                    backgroundColor:SelectedCategory=='Graphic Design'?'#D2B4DE':'#FCF3DF'
                }} data='Graphic Design' image={k} onPress={() => {
                    setSelectedCategory('Graphic Design')
                }}></Cart1>
                <Cart1 style={{
                    backgroundColor:SelectedCategory=='Photography'?'#D2B4DE':'#FCF3DF'
                }} data='Photography' image={l} onPress={() => {
                    setSelectedCategory('Photography')
                }}></Cart1>
            </View>
            <View style={{
                justifyContent: 'center', 
                alignItems: 'center',
                marginTop: 50
            }}>
                <Button text='Continue' onPress={() => {
                    if(SelectedCategory){
                        navigation.navigate('SignUp',{category: SelectedCategory})
                    }else{
                        Alert.alert('Opps!','Please select a category first.')
                    }
                }} />
            </View>
        </ScrollView>
    );
};

export default Categories;