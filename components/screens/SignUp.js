import React from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native'
import style from '../styles/style';
import Button from '../contents/Button';


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
                    marginTop: 200
                }}>
                    <Button text='Sign Up' />
                </View>
            </View>
            <Text style={style.text}>Already Have an Account?</Text>
        </ScrollView>
    );
};

export default SignUp;