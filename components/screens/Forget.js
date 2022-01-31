import React from 'react';
import { View, Text, TextInput, Alert } from 'react-native'
import style from '../styles/style';
import Button from '../contents/Button';
import auth from '@react-native-firebase/auth'
import Loader from '../contents/Loader'



const Forget = (props) => {
    const [number5, onChangeNumber5] = React.useState(null);
    const [visible, setVisible]= React.useState(false)

    const forget = () =>{
        if(!number5){
            return;
        }
        setVisible(true)
        auth().sendPasswordResetEmail(number5).then(() => {
            Alert.alert('Successful','Please check your email first then try again');
            setVisible(false);
        }).catch(err => {
            Alert.error(err.code, err.message)
            setVisible(false)
        })
    }

    return (
        <View style={style.viewsignup}>
            <View style={style.marginTop}>
                <Text style={{
                    color: 'black',
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>Reset Password</Text>
            </View>
            <View style={style.marginTop}>
                <Text style={{
                    color: 'black',
                    fontSize: 20,
                }}>Enter the mail you used to {'\n'}open your account.
                </Text>
            </View>

            <TextInput

                style={[style.input, { marginBottom: 50 }]}
                onChangeText={onChangeNumber5}
                value={number5}
                placeholder="Enter Email"
                placeholderTextColor={'black'}
            />

            <Button text='Reset' onPress={()=>{
                forget()
            }}/>
            <Loader visible={visible} text='Loading...' />
        </View>
    );
};

export default Forget;