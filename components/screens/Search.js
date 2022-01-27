import React from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native'
import style from '../styles/style';
import Icon from 'react-native-vector-icons/AntDesign';
import Button from '../contents/Button';
import searchStyle from '../styles/searchStyle';
import SearchButton from '../contents/SearchButton';

const Search = () => {

    const [number6, onChangeNumber6] = React.useState(null);
    return (
        <View >
            <View style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        style={style.input}
                        onChangeText={onChangeNumber6}
                        value={number6}
                        placeholder="Search Here..."
                        placeholderTextColor={"black"}
                    />
                    <View style={{
                        marginTop: 37,
                        margin: 5
                    }}>
                        <Icon name="search1" size={30} color="#900" />
                    </View>
                </View>
            </View>
            <View style={{ marginLeft: 40 }}>
                <Text style={{
                    color: 'black',
                    fontWeight: 'bold',
                    marginTop: 10,
                    fontSize: 30
                }}>Top Searches</Text>
                <View >
                    <ScrollView horizontal={true}>
                        <SearchButton text='Drawing' />
                        <SearchButton text='Graphic' />
                        <SearchButton text='Coding' />
                    </ScrollView>
                </View>
                <Text style={{
                    color: 'black',
                    fontWeight: 'bold',
                    marginTop: 10,
                    fontSize: 30
                }}>Browse Categories</Text>


            </View>
            <ScrollView>

                
            </ScrollView>

        </View>
    );
};

export default Search;