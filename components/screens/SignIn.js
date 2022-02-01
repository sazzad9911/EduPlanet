import React from 'react'
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, Alert, Dimensions } from 'react-native'
import SignInStyle from '../styles/SignInStyle'
import style from '../styles/style'
import Button from '../contents/Button'
import Loader from '../contents/Loader'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

const SignIn = (props) => {
    const navigation = props.navigation
    const [Email, onChangeEmail] = React.useState(null);
    const [Password, onChangePassword] = React.useState(null);
    const [visible, setVisible] = React.useState(false)
    const window = Dimensions.get('window')

    const signIn = () => {
        setVisible(true);
        auth().signInWithEmailAndPassword(Email, Password).then(() => {
            auth().onAuthStateChanged(user => {
                firestore().collection('UserInformation').doc(user.uid).get().then((doc) => {
                    navigation.navigate('Home', { email: user.email, uid: user.uid, title: doc.get('Title') })
                }).then(() => {
                    setVisible(false);
                })
            })
            Alert.alert('Successful', 'Sign In Successful')
        }).catch(err => {
            setVisible(false);
            Alert.alert(err.code, err.message)
        })
    }
    return (
        <ScrollView>
            <View style={{
                backgroundColor: 'white',
                height: window.height,
                width: window.width
            }}>
                <View style={style.topDesign}>

                </View>
                <View style={{
                    width: window.width,
                    height: window.height - 300
                }}>

                </View>
                <View style={SignInStyle.bottomSignIn}>

                </View>
            </View>
            <View style={{
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                top: 0,
                left: 0,
                height:window.height,
                width:window.width
            }}>
                <View>
                    <Image
                        style={{ height: 160, width: 158, borderRadius: 10 }}
                        source={require('../Logo/knowledge.png')}
                    />
                </View>
                <Text style={style.headLine}>Edu Planet</Text>
                <TextInput
                    style={[style.input,{

                    }]}
                    textAlign={'center'}
                    onChangeText={onChangeEmail}
                    value={Email}
                    placeholder="Email"
                    placeholderTextColor={"black"}
                />
                <TextInput
                    style={style.input}
                    textAlign={'center'}
                    onChangeText={onChangePassword}
                    value={Password}
                    placeholder="Password"
                    placeholderTextColor={"black"}
                />
                <Button style={{
                    margin:30
                }} text="Log In" onPress={() => {
                    signIn();
                }} />
                <TouchableOpacity onPress={() => navigation.navigate('Forget')} style={SignInStyle.underLogin}>
                    <Text>Forgot password?</Text>
                </TouchableOpacity>
                <Button text="Sign Up Now" onPress={() => navigation.navigate('Categories')} />
            </View>
            <Loader text='Checking Auth..' visible={visible} />
        </ScrollView>
    );
};

export default SignIn;