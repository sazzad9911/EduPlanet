import React from 'react';
import { View, Text, TextInput, ScrollView,Alert } from 'react-native'
import style from '../styles/style';
import Button from '../contents/Button';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import Loader from '../contents/Loader'


const Stack = createNativeStackNavigator();

const SignUp = (props) => {

    const [Name, onChangeName] = React.useState(null);
    const [Email, onChangeEmail] = React.useState(null);
    const [Institution, onChangeInstitution] = React.useState(null);
    const [Password, onChangePassword] = React.useState(null);
    const [RePassword, onChangeRePassword] = React.useState(null);
    const [loader,setLoader]= React.useState(false);
    const params=props.route.params;
    const navigation=props.navigation

    return (
        <ScrollView >

            <View style={style.viewsignup}>
                <Text style={style.headLine}>SignUp</Text>

                <TextInput
                    style={style.input}
                    onChangeText={onChangeName}
                    value={Name}
                    placeholder="Name"
                    placeholderTextColor={'black'}

                />
                <TextInput
                    style={style.input}
                    onChangeText={onChangeEmail}
                    value={Email}
                    placeholder="Email"
                    placeholderTextColor={'black'}
                />
                <TextInput
                    style={style.input}
                    onChangeText={onChangeInstitution}
                    value={Institution}
                    placeholder="Institution"
                    placeholderTextColor={'black'}
                />
                <TextInput
                    style={style.input}
                    onChangeText={onChangePassword}
                    value={Password}
                    placeholder="Password"
                    placeholderTextColor={'black'}
                    secureTextEntry={true}
                />
                <TextInput
                    style={style.input}
                    onChangeText={onChangeRePassword}
                    value={RePassword}
                    placeholder="Retype Password"
                    placeholderTextColor={'black'}
                    secureTextEntry={true}
                />

                <View style={{
                    marginTop: 100
                }}>
                    <Button text='Sign Up' onPress={()=>{
                        if(Password!=RePassword){
                            Alert.alert('Opps!','Password are not matched')
                            return;
                        }if(!Name || !Institution){
                            Alert.alert('Opps!','Name and Institution name is required')
                            return;
                        }
                        setLoader(true)
                        auth().createUserWithEmailAndPassword(Email, Password)
                        .then(()=>{
                            auth().onAuthStateChanged(user=>{
                                firestore().collection('UserInformation').doc(user.uid).set({
                                    Image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyc_wMXS_hHkfJynXufjZ3DSgNu7B8Ob0A8wWROuHTPzM2o6Q8Z1PPnqBSDNRk64AqNkc&usqp=CAU',
                                    Name:Name,
                                    Email:Email.toLowerCase(),
                                    Uid:user.uid,
                                    Institution:Institution,
                                    Admin:false,
                                    Progress:0
                                }).then(()=>{
                                    navigation.navigate('Home',{email:user.email,uid:user.uid})
                                    setLoader(false)
                                }).catch(err=>{
                                    Alert.alert(err.code,err.message)
                                    setLoader(false)
                                })
                            })
                        }).catch(err=>{
                            Alert.alert(err.code,err.message)
                            setLoader(false)
                        })
                    }}/>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 30 }}>
                    <Text style={[style.text, {
                        marginRight: 5,
                        color: 'black'
                    }]}>Already Have an Account?
                    </Text>
                    <Text style={{ color: 'blue',fontWeight: 'bold' }} onPress={() => props.navigation.navigate('SignIn')}>
                        Sign In
                    </Text>
                </View>
                <Loader visible={loader} text="Loading..."/>
            </View>

        </ScrollView>
    );
};

export default SignUp;