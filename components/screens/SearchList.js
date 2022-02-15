import React from 'react';
import { View, ScrollView, Text, Dimensions, TouchableOpacity,Alert } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import Loader from '../contents/Loader'
import DashCart from '../cart/DashCart'
import app from '@react-native-firebase/app'

const SearchList = (props) => {
    const search = props.route.params.search
    const uid=props.route.params.uid
    const [data, setData] = React.useState(null)
    const [visible, setVisible] = React.useState(false)
    const window = Dimensions.get('window')

    React.useEffect(() => {
        //console.log(uid)
        if (!search) {
            return
        }
        //setVisible(true)
        firestore().collection('Videos').orderBy('NewDate', 'desc').get().then(doc => {
            if (doc) {
                let arr = []
                doc.forEach(data => {
                    if (data.get('Category') == search) {
                        arr.push(data.data())
                    }
                })
                setData(arr)
               // setVisible(false)
            } else {
                setData([])
               // setVisible(false)
            }
        })
    }, [])

    return (
        <ScrollView>
            <View style={{ alignItems:'center' }}>
                <TouchableOpacity onPress={()=>{
                    setVisible(true)
                    const arr=app.firestore.FieldValue.arrayUnion(search)
                    firestore().collection('UserInformation').doc(uid)
                    .update({
                        Category:arr
                    }).then(() => {
                        setVisible(false)
                        Alert.alert('Success','Course added successfully')
                    }).catch((err) => {
                        Alert.alert(err.code, err.message)
                        setVisible(false)
                    })
                }} style={{
                    backgroundColor: '#6C3483',
                    width: 150,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius:30,
                    margin:10
                }}>
                    <Text style={{ color: 'white', fontSize: 18 }}>Add Course</Text>
                </TouchableOpacity>
            </View>
            {
                data ? (
                    data.length > 0 ? (
                        data.map((d) => (
                            <DashCart i={1} key={d.Id} data={d} dIcon='play'></DashCart>
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
                    <Loader text='Loading..' visible={true} />
                )
            }
            <Loader text='Loading..' visible={visible} />
        </ScrollView>
    );
};

export default SearchList;