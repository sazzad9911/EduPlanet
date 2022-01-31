import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native'
import style from '../styles/style'
import DashCart from '../cart/DashCart';
import firestore from '@react-native-firebase/firestore'
import Loader from '../contents/Loader'

const Dashboard = (props) => {
    const navigation = props.navigation
    const user = props.route.params.user
    const title = props.route.params.title
    const [data, setData] = React.useState(null)
    const [data2,setData2] = React.useState(null)
    const window = Dimensions.get('window')

    React.useEffect(() => {
        firestore().collection('Videos').orderBy('NewDate', 'desc').get().then(doc => {
            if (doc) {
                let arr = []
                doc.forEach(data => {
                    arr.push(data.data())
                })
                setData(arr)
                arr.reverse()
                setData2(arr)
            } else {
                setData([])
            }
        })
    }, [])

    return (
        <ScrollView>
            <View>
                <View style={{ height: 250, width: window.width, margin: 10 }}>
                    <Image
                        style={{ height: 250, width: window.width - 20, borderRadius: 10 }}
                        source={require('../cart/CartImage/aaa.jpg')}
                    />
                    <View style={{ position: 'absolute' }}>
                        <Text style={{ fontSize: 30, marginTop: 15, marginLeft: 15, color: 'white' }}>HOW TO</Text>
                        <Text style={{ fontSize: 18, marginLeft: 15, color: 'white' }}>Make your brand more visible {"\n"}with your checklist</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Search')} style={{ height: 25, width: 130, backgroundColor: 'white', marginTop: 110, marginLeft: 240, borderRadius: 15 }}>
                            <Text style={{ color: 'black', fontSize: 18, marginLeft: 10 }}>Start Learning</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            <Text style={{
                fontSize: 20,
                fontWeight: '100',
                margin:5,
                marginLeft: 10,
            }}>Recent: </Text>
            <ScrollView horizontal={true}>
                {
                    data ? (
                        data.length > 0 ? (
                            data.map((d) => (
                                d.Title ==title?(
                                    <DashCart key={d.Id} data={d} dIcon='play'></DashCart>
                                ):(
                                    <View></View>
                                )
                            ))
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
                        <Loader text='Loading Home..' visible={true} />
                    )
                }
            </ScrollView>
            <Text style={{
                fontSize: 20,
                fontWeight: '100',
                margin:5,
                marginLeft: 10,
            }}>Older: </Text>
            <ScrollView horizontal={true}>
                {
                    data ? (
                        data.length > 0 ? (
                            data.map((d) => (
                                d.Title ==title?(
                                    <DashCart key={d.Id} data={d} dIcon='play'></DashCart>
                                ):(
                                    <View></View>
                                )
                            ))
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
                        <Loader text='Loading Home..' visible={true} />
                    )
                }
            </ScrollView>
        </ScrollView>
    );
};

export default Dashboard;