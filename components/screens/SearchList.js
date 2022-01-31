import React from 'react';
import { View, ScrollView, Text,Dimensions } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import Loader from '../contents/Loader'
import DashCart from '../cart/DashCart'

const SearchList = (props) => {
    const search = props.route.params.search
    const [data, setData] = React.useState(null)
    const [visible, setVisible] = React.useState(false)
    const window= Dimensions.get('window')

    React.useEffect(() => {
        if (!search) {
            return
        }
        setVisible(true)
        firestore().collection('Videos').orderBy('NewDate', 'desc').get().then(doc => {
            if (doc) {
                let arr = []
                doc.forEach(data => {
                    if (data.get('Category') == search) {
                        arr.push(data.data())
                    }
                })
                setData(arr)
                setVisible(false)
            } else {
                setData([])
                setVisible(false)
            }
        })
    }, [])

    return (
        <ScrollView>
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
        </ScrollView>
    );
};

export default SearchList;