import React from 'react';
import { View, Text, TextInput } from 'react-native'
import style from '../styles/style';
import Button from '../contents/Button';



const Forget = (props) => 
{
    const [number5, onChangeNumber5] = React.useState(null);
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
            
                    style={[style.input,{marginBottom:50}]}
                    onChangeText={onChangeNumber5}
                    value={number5}
                    placeholder="000000"
                    placeholderTextColor={'black'}
                />

                <Button text='Reset'/>

        </View>
    );
};

export default Forget;