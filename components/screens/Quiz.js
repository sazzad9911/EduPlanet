import React from 'react';
import { ScrollView, Text, View,Alert } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import QuizCart from '../cart/QuizCart'
import Loader from '../contents/Loader'
import Button from '../contents/Button'
import uuid from 'react-native-uuid'

const Quiz = (props) => {
    const subject = props.route.params.subject
    const [Data, setData] = React.useState(null)
    const [QuizMark, setQuizMark] = React.useState(0)
    const [Answer, setAnswer] = React.useState([])
    const uid=props.route.params.uid
    const [Visible, setVisible]= React.useState(false)

    React.useEffect(() => {
        firestore().collection('Quiz').get().then(doc => {
            if (doc) {
                let arr = [];
                doc.forEach(data => {
                    arr.push(data.data())
                })
                setData(arr)
            } else {
                setData([])
            }
        })
    }, [])
    const checkAnswer = (props, index) => {
        let assets = ''
        let anime = ''
        let arr = Answer;
        Answer.forEach(data => {
            if (data == props.Id) {
                anime = 'red'
            }
        })
        if (anime == 'red') {
            return;
        }
        arr.push(props.Id)
        setAnswer(arr)

        Data.forEach(data => {
            if ((data.Id == props.Id) && (data.Answer == index)) {
                setQuizMark(QuizMark + 1)
                assets = 'green'
            } else {
                assets = 'red'
            }
        })
        return assets
    }
    return (
        <ScrollView>
            {
                Data ? (
                    Data.length > 0 ? (
                        Data.map((doc, i) => (
                            doc.Category == subject ?
                                (
                                    <QuizCart checkAnswer={checkAnswer} key={i} index={i} data={doc} />
                                ) : (
                                    <View></View>
                                )
                        ))
                    ) : (
                        <Text style={{ textAlign: 'center', fontSize: 18, margin: 10 }}>Empty!</Text>
                    )
                ) : (
                    <Loader text='Loading..' visible={true} />
                )
            }
            <View style={{alignItems:'center'}}>
                <Button text='Finish' onPress={()=>{
                    setVisible(true)
                    firestore().collection('UserInformation')
                    .doc(uid).collection('Marks').doc(subject).set({
                        Date: new Date(),
                        Mark: QuizMark,
                        Subject: subject
                    }).then(()=>{
                        setVisible(false)
                        Alert.alert('Success','Quiz is submitted successfully')
                    }).catch(err=>{
                        setVisible(false)
                        Alert.alert(err.code, err.message)
                    })
                }}/>
            </View>
            <Loader text='Finishing..' visible={Visible} />
        </ScrollView>
    );
};

export default Quiz;