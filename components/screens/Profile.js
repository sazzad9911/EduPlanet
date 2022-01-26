import React from 'react';
import { View, Text, Image } from 'react-native'
import style from '../styles/style';
import ProfileCart from '../cart/ProfileCart';
import Icon from 'react-native-vector-icons/EvilIcons';

const Profile = () => {
    return (
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
                        <View style={{flexDirection:'row'}}>
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
            <ProfileCart ptext='Name' pIcon='user' ptextA='MD Shahrear'></ProfileCart>
            <ProfileCart ptext='Email' pIcon='mail' ptextA='eduplanrt@gmail.com'></ProfileCart>
            <ProfileCart ptext='Password' pIcon='lock' ptextA='*********'></ProfileCart>
            <ProfileCart ptext='Contact Number' pIcon='phone' ptextA='01711111111'></ProfileCart>
            </View>
        </View>
    );
};

export default Profile;