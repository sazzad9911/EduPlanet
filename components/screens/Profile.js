import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native'
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
                    <View style={style.profileviweH}>
                        <Text style={style.profiletextE}>+ Become Member</Text>
                    </View>
                </View>
                <View style={style.profileviweI}>
                    
                    <EditText ptext='Name' pIcon='user'></EditText>
                    <EditText ptext='Email' pIcon='mail'></EditText>
                    <EditText ptext='Password' pIcon='lock'></EditText>
                    <EditText ptext='Contact Number' pIcon='phone'></EditText>
                </View>
            </View>
        </ScrollView>
    );
};

export default Profile;