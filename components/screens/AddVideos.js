import React from 'react';
import { View, Text, TextInput, Alert } from 'react-native'
import style from '../styles/style';
import { Picker } from '@react-native-picker/picker';
import SearchButton from '../contents/SearchButton';
import Button from '../contents/Button';
import Loader from '../contents/Loader'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import uuid from 'react-native-uuid'
import { launchImageLibrary } from 'react-native-image-picker'

const AddVideos = () => {
    const [number9, onChangeNumber9] = React.useState(null);
    const [selectedLanguage, setSelectedLanguage] = React.useState(null);
    const [Video, setVideo] = React.useState(null);
    const [Banner, setBanner] = React.useState(null);
    const [visible, setVisible] = React.useState(false);
    const [text, setText] = React.useState(' ');

    const uploadVideo = () => {
        launchImageLibrary({
            mediaType: 'video',
            videoQuality: 'medium',
        }, response => {
            if (response.assets) {
                setVisible(true)
                let assets = response.assets[0]
                const uploadTask = storage().ref('Videos/' + assets.fileName).putFile(assets.uri);
                uploadTask.on('state_changed', (snapshot) => {
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    //console.log();
                    setText('Upload is ' + progress.toFixed(2) + '% done')
                }, err => {
                    Alert.alert(err.code, err.message);
                    setVisible(false)
                }, () => {
                    uploadTask.snapshot.ref.getDownloadURL().then((url) => {
                        setVideo(url);
                        setVisible(false)
                        console.log(url)
                    })
                })
            }
        })

    }
    const uploadBanner = () => {
        launchImageLibrary({
            mediaType: 'photo',
            quality:.5
        }, response => {
            if (response.assets) {
                setVisible(true)
                let assets = response.assets[0]
                const uploadTask = storage().ref('Images/' + assets.fileName).putFile(assets.uri);
                uploadTask.on('state_changed', (snapshot) => {
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    //console.log();
                    setText('Upload is ' + progress.toFixed(2) + '% done')
                }, err => {
                    Alert.alert(err.code, err.message);
                    setVisible(false)
                }, () => {
                    uploadTask.snapshot.ref.getDownloadURL().then((url) => {
                        setBanner(url);
                        console.log(url);
                        setVisible(false)
                    })
                })
            }
        })
    }
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 100
        }}>
            <View style={{
                height: 40,
                width: 300,
                paddingBottom: 50,
                marginTop: 30,
                borderWidth: 0.5,
                borderRadius: 20,
                backgroundColor: '#ffe4e1'

            }}>

                <Picker
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="Category" value="" />
                    <Picker.Item label="Mobile Design" value="Mobile Design" />
                    <Picker.Item label="3D Modeling" value="3D Modeling" />
                    <Picker.Item label="Web Designing" value="Web Designing" />
                    <Picker.Item label="Illustrations" value="Illustrations" />
                    <Picker.Item label="Drawing" value="Drawing" />
                    <Picker.Item label="Animation" value="Animation" />
                    <Picker.Item label="Education" value="Education" />
                    <Picker.Item label="Networking" value="Networking" />
                    <Picker.Item label="Coding" value="Coding" />
                    <Picker.Item label="Digital Marketing" value="Digital Marketing" />
                    <Picker.Item label="Graphic Design" value="Graphic Design" />
                    <Picker.Item label="Photography" value="Photography" />
                </Picker>
            </View>

            <TextInput
                style={style.input}
                onChangeText={onChangeNumber9}
                value={number9}
                placeholder="File Name"
                placeholderTextColor={'black'}

            />
            <View style={{ flexDirection: 'row' }}>
                <SearchButton disabled={Video?true:false} text='Upload Video' onPress={() => {
                    uploadVideo();
                }} />
                <SearchButton disabled={Banner?true:false} text='Banner Img' onPress={() => {
                    uploadBanner()
                }} />
            </View>

            <View style={{ marginTop: 100 }}>
                <Button text='Submit' onPress={() => {
                    if (!Video || !Banner) {
                        Alert.alert('Opps!', 'Upload a video and a banner first');
                        return;
                    } if (!number9) {
                        Alert.alert('Opps!', 'File name are not empty');
                        return;
                    } if (!selectedLanguage) {
                        Alert.alert('Opps!', 'Select a type');
                        return;
                    }
                    setVisible(true)
                    let id = uuid.v4();
                    firestore().collection('Videos').doc(id).set({
                        Video: Video,
                        Name: number9,
                        Category: selectedLanguage,
                        Banner: Banner,
                        NewDate: new Date(),
                        Id: id
                    }).then(() => {
                        Alert.alert('Successful', 'Video uploaded successful')
                        setVisible(false)
                        setBanner(null)
                        setVideo(null)
                        onChangeNumber9("")
                        setSelectedLanguage("")
                    }).catch((err) => {
                        Alert.alert(err.code, err.message)
                        setVisible(false)
                    })
                }} />
            </View>
            <Loader visible={visible} text={text} />
        </View>
    );
};

export default AddVideos;