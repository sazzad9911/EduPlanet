import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import style from '../styles/style'
const Explore = () => {
    return (
        <View style={style.allOver}>
            <View style={style.textView}>
                <Text style={style.headLine1}>Explore Online{"\n"}Courses{"\n"}</Text>
                <Text style={style.text1}>All types of educational & {"\n"}professional courses are{"\n"}available in online.</Text>
                <View>
                    <Image
                        style={style.image}
                        source={{
                            uri: 'https://ysseglobal.org/blog/wp-content/uploads/2019/09/YSSE-BLOG-2003-1.jpg'
                        }}
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
                    <TouchableOpacity>
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