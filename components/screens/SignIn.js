import React from 'react'
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import SignInStyle from '../styles/SignInStyle'
import style from '../styles/style'
import Button from '../contents/Button'

const SignIn = (props) => {
    const [number, onChangeNumber] = React.useState(null);
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
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholder="Username"
                            placeholderTextColor={"black"}
                        />
                    </View>
                    <View>
                        <TextInput
                            style={style.input}
                            textAlign={'center'}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholder="Password"
                            placeholderTextColor={"black"}
                        />
                    </View>
                </View>
                <View style={{
                    marginTop: 10
                }}>
                    <Button text="Log In" />
                </View>
                <TouchableOpacity style={SignInStyle.underLogin}>
                    <Text>Remember me.</Text>
                    <Text>Forgot password?</Text>
                </TouchableOpacity>
                <View style={SignInStyle.bottomSignIn}>
                    <Button text="Sign Up Now" />
                </View>
            </View>
        </ScrollView>
    );
};

export default SignIn;