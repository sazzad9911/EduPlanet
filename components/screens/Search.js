import React from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native'
import style from '../styles/style';
import Icon from 'react-native-vector-icons/AntDesign';
import Button from '../contents/Button';
import searchStyle from '../styles/searchStyle';
import SearchButton from '../contents/SearchButton';
import Cart from '../cart/Cart';
import firestore from '@react-native-firebase/firestore';

const Search = (props) => {

    const navigation = props.navigation
    const [number6, onChangeNumber6] = React.useState(null);
    const [data,setData]= React.useState(null)
    const [data2, setData2] = React.useState([
        {
            "Category": "Drawing",
            "Id":0
        },
        {
            "Category": "Graphic",
            "Id":1
        },
        {
            "Category": "Coding",
            "Id":2
        }
    ]);

    React.useEffect(() => {
        firestore().collection('Videos').orderBy('NewDate', 'desc').get().then(doc => {
            if (doc) {
                let arr = []
                doc.forEach(data => {
                    arr.push(data.data())
                })
                setData(arr)
            } else {
                setData([])
            }
        })
    }, [])

    const searchNow=(val) => {
        onChangeNumber6(val)
        if (!val) {
            setData2([
                {
                    "Category": "Drawing",
                    "Id":0
                },
                {
                    "Category": "Graphic",
                    "Id":1
                },
                {
                    "Category": "Coding",
                    "Id":2
                }
            ])
        }
        if (val && data) {
            const newData = data.filter(item => {
                const itemData = item.Category ? item.Category.toUpperCase() : ''.toUpperCase();
                const textData = val.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setData2(newData)
            //console.log(newData)
        }
    }

    return (
        <View >
            <View style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 5
                }}>
                    <TextInput
                        style={style.input}
                        onChangeText={searchNow}
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
                    fontSize: 25
                }}>Top Searches</Text>
                <View >
                    <ScrollView horizontal={true}>
                        {
                            data2 ? (
                                data2.map(doc => (
                                    <SearchButton key={doc.Id} text={doc.Category} onPress={()=>{
                                        navigation.navigate('Search List', { search: doc.Category })
                                    }} />
                                ))
                            ) : (
                                <View></View>
                            )
                        }
                    </ScrollView>
                </View>
                <Text style={{
                    color: 'black',
                    fontWeight: 'bold',
                    marginTop: 10,
                    fontSize: 25,
                    marginBottom: 10
                }}>Browse Categories</Text>
            </View>
            <ScrollView>
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: '100%',
                    justifyContent: 'center',
                    height: 910
                }}>
                    <Cart onPress={() => {
                        navigation.navigate('Search List', { search: 'Mobile Design' })
                    }} margin={50} title="Mobile" secondTitle='Design'
                        marginSecond={100} image={require('../cart/CartImage/mobile-design.jpg')} />
                    <Cart onPress={() => {
                        navigation.navigate('Search List', { search: '3D Modeling' })
                    }} margin={30} title="3D" secondTitle='Modeling'
                        marginSecond={60} image={require('../cart/CartImage/3d.jpg')} />
                    <Cart onPress={() => {
                        navigation.navigate('Search List', { search: 'Animation' })
                    }} margin={50} title="Animation" image={require('../cart/CartImage/animation.jpg')} />
                    <Cart onPress={() => {
                        navigation.navigate('Search List', { search: 'Drawing' })
                    }} margin={50} title="Drawing" image={require('../cart/CartImage/drawing.png')} />
                    <Cart onPress={() => {
                        navigation.navigate('Search List', { search: 'Illustration' })
                    }} margin={50} title="Illustration" image={require('../cart/CartImage/illustration.jpg')} />
                    <Cart onPress={() => {
                        navigation.navigate('Search List', { search: 'Graphic Design' })
                    }} margin={30} title="Graphic" secondTitle='Design'
                        marginSecond={70} image={require('../cart/CartImage/graphic-design.jpg')} />
                    <Cart onPress={() => {
                        navigation.navigate('Search List', { search: 'Digital Marketing' })
                    }} margin={40} title="Digital" secondTitle='Marketing'
                        marginSecond={60} image={require('../cart/CartImage/coding.jpg')} />
                    <Cart onPress={() => {
                        navigation.navigate('Search List', { search: 'Photography' })
                    }} margin={50} title="Photography" image={require('../cart/CartImage/photography.jpg')} />
                </View>
            </ScrollView>

        </View>
    );
};

export default Search;