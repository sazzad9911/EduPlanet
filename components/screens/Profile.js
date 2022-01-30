import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import style from '../styles/style';
import ProfileCart from '../cart/ProfileCart';
import EditText from '../cart/EditText';
import Icon from 'react-native-vector-icons/EvilIcons';

const Profile = () => {
    return (
        <ScrollView>
            <View style={style.profileviwe}>
                <View style={style.profileviwea}>
                    <View style={style.profileviweC}>
                        <View style={style.profileviweD}>
                            <Image
                                style={style.profileviweB}
                                source={require('../cart/CartImage/profile.png')}
                            />
                        </View>
                        <View style={style.profileviweE}>
                            <Text style={style.profiletext}>MD Shahrear</Text>
                            <Text style={style.profiletextA}>Graphic Deginer</Text>
                            <View style={style.profileviweF}>
                                <View style={style.profileviweG}></View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={style.profiletextC}>Overall Progress</Text>
                                <Text style={style.profiletextD}> 72%</Text>
                            </View>

                        </View>

                    </View>
                    <TouchableOpacity style={style.profileviweH}>
                        <Text style={style.profiletextE}>+ Become Member</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.profileviweI}>

                    <EditText ptext='Name' pIcon='user'></EditText>
                    <View style={{ height: 2, width: 400, backgroundColor: 'black', marginTop: 5, marginLeft: 10 }}></View>
                    <EditText ptext='Email' pIcon='mail'></EditText>
                    <View style={{ height: 2, width: 400, backgroundColor: 'black', marginTop: 5, marginLeft: 10 }}></View>
                    <EditText ptext='Password' pIcon='lock'></EditText>
                    <View style={{ height: 2, width: 400, backgroundColor: 'black', marginTop: 5, marginLeft: 10 }}></View>
                    <EditText ptext='Contact Number' pIcon='phone'></EditText>
                    <View style={{ height: 2, width: 400, backgroundColor: 'black', marginTop: 5, marginLeft: 10 }}></View>
                    <View style={{marginTop:10}}></View>
                </View>
            </View>
        </ScrollView>
    );
};

export default Profile;