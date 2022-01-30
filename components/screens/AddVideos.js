import React from 'react';
import { View, Text, TextInput } from 'react-native'
import style from '../styles/style';
import { Picker } from '@react-native-picker/picker';
import SearchButton from '../contents/SearchButton';
import Button from '../contents/Button';

const AddVideos = () => {
    const [number9, onChangeNumber9] = React.useState(null);
    const [selectedLanguage, setSelectedLanguage] = React.useState();
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:100
        }}>
            <View style={{
                height: 40,
                width: 300,
                paddingBottom:50,
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
                    <Picker.Item label="Categories1" value="Categories1" />
                    <Picker.Item label="Categories2" value="Categories2" />
                    <Picker.Item label="Categories3" value="Categories3" />
                    <Picker.Item label="Categories4" value="Categories4" />
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
                <SearchButton text='Upload Video' />
                <SearchButton text='Banner Img' />
            </View>

            <View style={{ marginTop: 100 }}>
                <Button text='Submit' />
            </View>







        </View>
    );
};

export default AddVideos;