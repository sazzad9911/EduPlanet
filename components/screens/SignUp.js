import React from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native'
import style from '../styles/style';
import Button from '../contents/Button';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const SignUp = (props) => {

    const [number, onChangeNumber] = React.useState(null);
    const [number1, onChangeNumber1] = React.useState(null);
    const [number2, onChangeNumber2] = React.useState(null);
    const [number3, onChangeNumber3] = React.useState(null);
    const [number4, onChangeNumber4] = React.useState(null);

    return (
        <ScrollView >

            <View style={style.viewsignup}>
                <Text style={style.headLine}>SignUp</Text>

                <TextInput
                    style={style.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Name"
                    placeholderTextColor={'black'}

                />
                <TextInput
                    style={style.input}
                    onChangeText={onChangeNumber1}
                    value={number1}
                    placeholder="Email"
                    placeholderTextColor={'black'}
                />
                <TextInput
                    style={style.input}
                    onChangeText={onChangeNumber2}
                    value={number2}
                    placeholder="Institution"
                    placeholderTextColor={'black'}
                />
                <TextInput
                    style={style.input}
                    onChangeText={onChangeNumber3}
                    value={number3}
                    placeholder="Password"
                    placeholderTextColor={'black'}
                />
                <TextInput
                    style={style.input}
                    onChangeText={onChangeNumber4}
                    value={number4}
                    placeholder="Retype Password"
                    placeholderTextColor={'black'}
                />

                <View style={{
                    marginTop: 100
                }}>
                    <Button text='Sign Up' />
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
            </View>

        </ScrollView>
    );
};

export default SignUp;