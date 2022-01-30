import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import style from '../styles/style'
import auth from '@react-native-firebase/auth'

const Explore = (props) => {
    const navigation=props.navigation

    auth().onAuthStateChanged(user =>{
        if(user){
            navigation.navigate('Home',{user: user})
        }
    })
    return (
        <View style={style.allOver}>
            <View style={style.textView}>
                <Text style={style.headLine1}>Explore Online{"\n"}Courses{"\n"}</Text>
                <Text style={style.text1}>All types of educational & {"\n"}professional courses are{"\n"}available in online.</Text>
                <View>
                    <Image
                        style={style.image}
                        source={require('../file/YSSE-BLOG-2003-1.jpg')}
                    />
                </View>
                <View style={style.bottom}>
                    <View style={style.bottomView}>
                        <View style={style.dotView} />
                        <View style={style.dotView} >
                            <View style={style.dotView1} />
                        </View>
                        <View style={style.dotView} >
                            <View style={style.dotView1} />
                        </View>
                    </View>
                    <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
                        <View style={style.bottomButton}>
                            <Text style={style.bottomButtonText}>Next</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Explore;