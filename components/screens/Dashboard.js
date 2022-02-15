import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions, Modal, StyleSheet } from 'react-native'
import style from '../styles/style'
import DashCart from '../cart/DashCart';
import firestore from '@react-native-firebase/firestore'
import Loader from '../contents/Loader'
import DropShadow from 'react-native-drop-shadow';

const Dashboard = (props) => {
    const navigation = props.navigation
    const uid = props.route.params.uid
    const title = props.route.params.title
    const [data, setData] = React.useState(null)
    const [data2, setData2] = React.useState(null)
    const window = Dimensions.get('window')
    const [UserInformation, setUserInformation] = React.useState(null)
    const [Visible, setVisible] = React.useState(false)

    React.useEffect(() => {
        firestore().collection('UserInformation').doc(uid).onSnapshot(doc => {
            if (doc) {
                setUserInformation(doc.data())
                //console.log(doc.data())
            }
        })
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
                        <TouchableOpacity onPress={() => setVisible(!Visible)} style={{ height: 25, width: 130, backgroundColor: 'white', marginTop: 110, marginLeft: 240, borderRadius: 15 }}>
                            <Text style={{ color: 'black', fontSize: 18, marginLeft: 10, textAlign: 'center' }}>Start Quiz</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            {
                UserInformation && UserInformation.Category ? (
                    UserInformation.Category.map((doc, i) => (
                        i > 3 ? (
                            <View key={i}></View>
                        ) : (
                            <View key={i}>
                                <Text style={{
                                    fontSize: 18,
                                    textAlign: 'center',
                                    fontWeight: '700',
                                    color: '#6C3483'
                                }}>{doc}</Text>
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: '100',
                                    margin: 5,
                                    marginLeft: 10,
                                }}>Recent: </Text>
                                <ScrollView horizontal={true}>
                                    {
                                        data ? (
                                            data.length > 0 ? (
                                                data.map((d) => (
                                                    d.Category == doc ? (
                                                        <DashCart key={d.Id} data={d} dIcon='play'></DashCart>
                                                    ) : (
                                                        <View key={d.Id}></View>
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
                                    margin: 5,
                                    marginLeft: 10,
                                }}>Older: </Text>
                                <ScrollView horizontal={true}>
                                    {
                                        data ? (
                                            data.length > 0 ? (
                                                data.map((d) => (
                                                    d.Category == doc ? (
                                                        <DashCart key={d.Id} data={d} dIcon='play'></DashCart>
                                                    ) : (
                                                        <View key={d.Id}></View>
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
                            </View>
                        )
                    ))
                ) : (
                    <View>
                    </View>
                )
            }
            <Text style={{
                fontSize: 18,
                textAlign: 'center',
                fontWeight: '700',
                color: '#6C3483'
            }}>{title}</Text>
            <Text style={{
                fontSize: 20,
                fontWeight: '100',
                margin: 5,
                marginLeft: 10,
            }}>Recent: </Text>
            <ScrollView horizontal={true}>
                {
                    data ? (
                        data.length > 0 ? (
                            data.map((d) => (
                                d.Category == title ? (
                                    <DashCart key={d.Id} data={d} dIcon='play'></DashCart>
                                ) : (
                                    <View key={d.Id}></View>
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
                margin: 5,
                marginLeft: 10,
            }}>Older: </Text>
            <ScrollView horizontal={true}>
                {
                    data ? (
                        data.length > 0 ? (
                            data.map((d) => (
                                d.Category == title ? (
                                    <DashCart key={d.Id} data={d} dIcon='play'></DashCart>
                                ) : (
                                    <View key={d.Id}></View>
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
            <Modal animationType='fade' visible={Visible}
                onRequestClose={() => setVisible(!Visible)} animated={true}
                transparent={true}>
                <View style={styles.view}>
                    <View style={styles.view2}>
                        <Text style={styles.headLine}>Select Topic</Text>
                        {
                            UserInformation && UserInformation.Category ?
                                (
                                    UserInformation.Category.map((doc, i) => (
                                        i > 3 ?
                                            (
                                                <View key={i}></View>
                                            ) : (
                                                <TouchableOpacity key={i} onPress={()=>{
                                                    setVisible(!Visible)
                                                    navigation.navigate('Quiz',{subject: doc})
                                                }} style={styles.button}>
                                                    <Text key={i+2} style={styles.buttonText}>{doc}</Text>
                                                </TouchableOpacity>
                                            )
                                    ))
                                ) : (
                                    <Text style={{ textAlign: 'center', margin: 10 }}>No Course Available</Text>
                                )
                        }
                    </View>
                    <TouchableOpacity onPress={()=>setVisible(false)} style={[styles.button,{ 
                        marginTop:20,
                        width:350
                    }]}>
                        <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </ScrollView>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: '100%',
        backgroundColor: '#00000093',
        justifyContent: 'center',
        alignItems: 'center'
    },
    view2: {
        width: 350,
        minHeight: 250,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    headLine: {
        fontSize: 20,
        textAlign: 'center',
        margin: 5
    },
    button: {
        width: 300,
        height: 45,
        backgroundColor: '#6C3483',
        borderRadius: 10,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: '#FFFFFF',
    }
})