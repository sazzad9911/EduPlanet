import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from 'react-native'
import style from '../styles/style';
import ProfileCart from '../cart/ProfileCart';
import EditText from '../cart/EditText';
import Icon from 'react-native-vector-icons/EvilIcons';
import Button from '../contents/Button';
import Loader from '../contents/Loader'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import {launchImageLibrary} from 'react-native-image-picker'

const Profile = (props) => {
    const user = props.route.params.user;
    const [Name, setName] = React.useState(null)
    const [Email, setEmail] = React.useState(null)
    const [Phone, setPhone] = React.useState(null)
    const [Visible, setVisible] = React.useState(false)
    const [text,setText] = React.useState('Saving...')
    const [image, setImage]= React.useState(null)

    React.useEffect(() => {
        if(user){
            setImage(user.Image)
            setEmail(user.Email)
            setPhone(user.Phone)
            setName(user.Name)
        }
    },[user])

    const uploadPhoto = ()=>{
        if(!user){
            return;
        }
        launchImageLibrary({
            mediaType:'photo',
            quality:.5
        }, response=>{
            if(response.assets){
                setVisible(true)
                let assets = response.assets[0]
               const task= storage().ref('Images/'+assets.fileName).putFile(assets.uri);
                task.on('state_changed',snapshot=>{
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    //console.log();
                    setText('Upload is ' + progress.toFixed(2) + '% done')
                }, err=>{
                    Alert.error(err.code,err.message)
                    setVisible(false)
                },()=>{
                    task.snapshot.ref.getDownloadURL().then(url=>{
                        setImage(url)
                        firestore().collection('UserInformation').doc(user.Uid).update({
                            Image: url
                        }).then(()=>{
                            setVisible(false)
                        }).catch(err=>{
                            setVisible(false)
                        })
                        setVisible(false)
                    })
                })
            }
        })
    }

    return (
        <ScrollView>
            <View style={style.profileviwe}>
                <View style={style.profileviwea}>
                    <View style={style.profileviweC}>
                        <View style={style.profileviweD}>
                            <TouchableOpacity onPress={uploadPhoto}>
                            <Image
                                    style={style.profileviweB}
                                    source={{ uri: image?image: 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={style.profileviweE}>
                            <Text style={[style.profiletext, { marginTop: 10 }]}>{user ? user.Name : '.'}</Text>
                            <Text style={style.profiletextA}>{user ? user.Title : '.'}</Text>
                            <View style={style.profileviweF}>
                                <View style={[style.profileviweG, {
                                    width: user ? user.Progress * 29 : 1
                                }]}></View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={style.profiletextC}>Overall Progress</Text>
                                <Text style={style.profiletextD}>{user ? user.Progress * 10 : '0'}%</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={style.profileviweH} onPress={() => {

                        Alert.alert('Send Application', 'Send Application Successful')
                    }}>
                        <Text style={style.profiletextE}>+ Become Member</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.profileviweI}>

                    <EditText text={Name} onChangeText={setName} ptext='Name' pIcon='user'></EditText>
                    <View style={{ height: 1, width: 400, backgroundColor: 'black', marginTop: 5, marginLeft: 10 }}></View>
                    <EditText text={Email} onChangeText={setEmail} ptext='Email' pIcon='mail'></EditText>
                    <View style={{ height: 1, width: 400, backgroundColor: 'black', marginTop: 5, marginLeft: 10 }}></View>
                    <EditText text={Phone} onChangeText={setPhone} ptext='Contact Number' pIcon='phone'></EditText>
                    <View style={{ height: 1, width: 400, backgroundColor: 'black', marginTop: 5, marginLeft: 10 }}></View>
                    <View style={{ marginTop: 10 }}></View>
                    <Button style={{
                        marginVertical: 40,

                    }} text='SAVE' onPress={() => {
                        if (!user) {
                            return;
                        }
                        if (!Name || !Phone || !Email) {
                            return;
                        }
                        setVisible(true)
                        firestore().collection('UserInformation').doc(user.Uid).update({
                            Name: Name,
                            Email: Email,
                            Phone: Phone,
                        }).then(() => {
                            setVisible(false)
                        }).catch((err) => {
                            setVisible(false)
                        })
                        setVisible(false)
                    }} />
                </View>
                <Loader text={text} visible={Visible} />
            </View>
        </ScrollView>
    );
};

export default Profile;