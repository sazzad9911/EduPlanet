import React from 'react'
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native'
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

    const signIn = () => {
        setVisible(true);
        auth().signInWithEmailAndPassword(Email, Password).then(() => {
            auth().onAuthStateChanged(user => {
                firestore().collection('UserInformation').doc(user.uid).then((doc) => {
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
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View style={style.topDesign}>
                    <View style={style.logoDesign}>
                        <Image
                            style={{ height: 160, width: 158, borderRadius: 10, marginTop: -2 }}
                            source={require('../Logo/knowledge.png')}
                        />
                    </View>
                    <Text style={style.headLine}>Edu Planet</Text>
                </View>
                <View style={SignInStyle.textInput}>
                    <View>
                        <TextInput
                            style={style.input}
                            textAlign={'center'}
                            onChangeText={onChangeEmail}
                            value={Email}
                            placeholder="Email"
                            placeholderTextColor={"black"}
                        />
                    </View>
                    <View>
                        <TextInput
                            style={style.input}
                            textAlign={'center'}
                            onChangeText={onChangePassword}
                            value={Password}
                            placeholder="Password"
                            placeholderTextColor={"black"}
                        />
                    </View>
                </View>
                <View style={{
                    marginTop: 10
                }}>
                    <Button text="Log In" onPress={() => {
                        signIn();
                    }} />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Forget')} style={SignInStyle.underLogin}>
                    <Text>Forgot password?</Text>
                </TouchableOpacity>
                <View style={SignInStyle.bottomSignIn}>
                    <Button text="Sign Up Now" onPress={() => navigation.navigate('Categories')} />
                </View>
            </View>
            <Loader text='Checking Auth..' visible={visible} />
        </ScrollView>
    );
};

export default SignIn;