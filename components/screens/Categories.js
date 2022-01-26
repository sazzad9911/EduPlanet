import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native'
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
const Categories = () => {
    return (
        <View style={style.viwe}>
            <View style={style.viwe1}>
                   <Cart1 data='Mobile Design' image={a} onPress={() => console.log('akash')}></Cart1>
                   <Cart1 data='3D modeling' image={b}  onPress={() => console.log('akash')}></Cart1>
                   <Cart1 data='Web Desiginig' image={c} onPress={() => console.log('akash')}></Cart1>
            </View>
            <View style={style.viwe1}>
                   <Cart1 data='Illustrstions' image={d} onPress={() => console.log('akash')}></Cart1>
                   <Cart1 data='Drawing' image={e} onPress={() => console.log('akash')}></Cart1>
                   <Cart1 data='Animation' image={f} onPress={() => console.log('akash')}></Cart1>
            </View>
            <View style={style.viwe1}>
                   <Cart1 data='Education' image={g} onPress={() => console.log('akash')}></Cart1>
                   <Cart1 data='Networking' image={h} onPress={() => console.log('akash')}></Cart1>
                   <Cart1 data='Coding' image={i} onPress={() => console.log('akash')}></Cart1>
            </View>
            <View style={style.viwe1}>
                   <Cart1 data='Digital Marketing' image={j} onPress={() => console.log('akash')}></Cart1>
                   <Cart1 data='Graphic Design' image={k} onPress={() => console.log('akash')}></Cart1>
                   <Cart1 data='Photography' image={l} onPress={() => console.log('akash')}></Cart1>
            </View>
            <TouchableOpacity style={style.viwe3}>
                <Text style={style.categoriesText}>Continue</Text>
            </TouchableOpacity>


        </View>
    );
};

export default Categories;