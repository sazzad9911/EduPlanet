import React from 'react';
import { View, ScrollView, Text, Dimensions, TouchableOpacity, Alert, DevSettings } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import Loader from '../contents/Loader'
import DashCart from '../cart/DashCart'
import app from '@react-native-firebase/app'

const SearchList = (props) => {
    const search = props.route.params.search
    const user = props.route.params.user
    const uid = props.route.params.uid
    const [data, setData] = React.useState(null)
    const [visible, setVisible] = React.useState(false)
    const [Category, setCategory] = React.useState(false);
    const window = Dimensions.get('window')

    React.useEffect(() => {
        //DevSettings.reload()
        //setData(null)
        if (user && user.Category) {
            for (var i = 0; i < user.Category.length; i++) {
                if (user.Category[i] == search) {
                    setCategory(true)
                    break
                } else {
                    setCategory(false)
                }
            }
        }
        //console.log(uid)
        if (!search) {
            console.log('No search found!')
            return
        }
        //setVisible(true)
        firestore().collection('Videos').where('Category', '==', search)
            .get().then(doc => {
                if (doc) {
                    let arr = []
                    doc.forEach(data => {
                        arr.push(data.data())
                    })
                    setData(arr)
                    // setVisible(false)
                } else {
                    setData([])
                    // setVisible(false)
                }
            })
    }, [search])
    const list = () => {
        setVisible(true)
        const arr = app.firestore.FieldValue.arrayUnion(search)
        firestore().collection('UserInformation').doc(uid)
            .update({
                Category: arr
            }).then(() => {
                setVisible(false)
                Alert.alert('Success', 'Course added successfully')
            }).catch((err) => {
                Alert.alert(err.code, err.message)
                setVisible(false)
            })
    }
    return (
        <ScrollView>
            <View style={{ alignItems: 'center' }}>
                {
                    Category || user.Category.length > 3 ? (
                        <View style={{flexDirection: 'row'}}>
                        <Text style={{
                                fontSize: 15,
                                margin: 5,
                                color: 'red',
                                textAlign: 'center'
                            }}>Warning:</Text>
                            <Text style={{
                                fontSize: 15,
                                margin: 5,
                                textAlign: 'center',
                            }}>{Category?'This category is already exists':'Your Course is full'}</Text>
                        </View>
                    ) : (
                        <TouchableOpacity onPress={list} style={{
                            backgroundColor: '#6C3483',
                            width: 150,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 30,
                            margin: 10
                        }}>
                            <Text style={{ color: 'white', fontSize: 18 }}>Add Course</Text>
                        </TouchableOpacity>
                    )
                }
            </View>
            {
                data ? (
                    data.length > 0 ? (
                        Category ? (
                            data.map((d) => (
                                <DashCart i={1} key={d.Id} data={d} dIcon='play'></DashCart>
                            ))

                        ) : (
                            <View>
                                <Text style={{
                                    fontSize: 20,
                                    margin: 10,
                                    textAlign: 'center',
                                }}>{Category?'':'*Add the course to get more videos'}</Text>
                                <DashCart i={1} key={data[0].Id} data={data[0]} dIcon='play'></DashCart>
                            </View>
                        )
                    ) : (
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: window.width - 20
                        }}>
                            <Text style={{
                                fontSize: 20,
                            }}>Empty!</Text>
                        </View>
                    )
                ) : (
                    <Loader text='Loading..' visible={true} />
                )
            }
            <Loader text='Loading..' visible={visible} />
        </ScrollView>
    );
};

export default SearchList;