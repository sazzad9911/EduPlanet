import React from 'react';
import { ScrollView, Text, View, Alert, Modal } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import QuizCart from '../cart/QuizCart'
import Loader from '../contents/Loader'
import Button from '../contents/Button'
import uuid from 'react-native-uuid'

const Quiz = (props) => {
    const subject = props.route.params.subject
    const [Data, setData] = React.useState(null)
    const [QuizMark, setQuizMark] = React.useState(0)
    const [Answer, setAnswer] = React.useState(false)
    const uid = props.route.params.uid
    const [Visible, setVisible] = React.useState(false)
    const [totalQuestion, setTotalQuestion] = React.useState(0)
    const [Modals, setModal] = React.useState(false)

    React.useEffect(() => {
        //console.log(subject)
        firestore().collection('Quiz').get().then(doc => {
            if (doc) {
                let arr = [];
                let total = 0;
                doc.forEach(data => {
                    if (data.get('Category') == subject) {
                        total=total+1;
                    }
                    arr.push(data.data())
                    
                })
                setTotalQuestion(total);
                setData(arr)
            } else {
                setData([])
            }
        })
    }, [subject])

    const submit = () => {
        const correct = (QuizMark * 100) / totalQuestion;
        console.log('Quiz Mark:'+QuizMark)
        console.log('Total Question:'+totalQuestion)
        console.log(correct/10)
        setVisible(true)
        firestore().collection('UserInformation')
            .doc(uid).collection('Marks').doc(subject).set({
                Date: new Date(),
                Mark: correct / 10,
                Subject: subject
            }).then(() => {
                setVisible(false)
                Alert.alert('Success', 'Quiz is submitted successfully got to your profile to get marks.')
                setModal(!Modals)
            }).catch(err => {
                setVisible(false)
                Alert.alert(err.code, err.message)
            })
    }

    return (
        <ScrollView>
            {
                Data ? (
                    Data.length > 0 ? (
                        Data.map((doc, i) => (
                            doc.Category == subject ?
                                (
                                    <QuizCart answers={Answer} QuizMark={QuizMark} setQuizMark={setQuizMark} key={i} index={i} data={doc} />
                                ) : (
                                    <View key={i}></View>
                                )
                        ))
                    ) : (
                        <Text style={{ textAlign: 'center', fontSize: 18, margin: 10 }}>Empty!</Text>
                    )
                ) : (
                    <Loader text='Loading..' visible={true} />
                )
            }
            <View style={{ alignItems: 'center' }}>
                <Button text='Finish' onPress={submit} />
            </View>
            <Modal animationType='slide' visible={Modals} onRequestClose={() => {
                setModal(!Modals)
            }}>
                <ScrollView>
                    <Text style={{
                        textAlign: 'center',
                        margin: 10,
                        fontSize: 20
                    }}>Answers Script</Text>
                    {
                        Data ? (
                            Data.length > 0 ? (
                                Data.map((doc, i) => (
                                    doc.Category == subject ?
                                        (
                                            <QuizCart answers={true} QuizMark={QuizMark} setQuizMark={setQuizMark} key={i} index={i} data={doc} />
                                        ) : (
                                            <View key={i}></View>
                                        )
                                ))
                            ) : (
                                <Text style={{ textAlign: 'center', fontSize: 18, margin: 10 }}>Empty!</Text>
                            )
                        ) : (
                            <Loader text='Loading..' visible={true} />
                        )
                    }
                    <View style={{ alignItems: 'center' }}>
                        <Button text='Close' onPress={()=>{setModal(!Modals)}} />
                    </View>
                </ScrollView>
            </Modal>
            <Loader text='Finishing..' visible={Visible} />
        </ScrollView>
    );
};

export default Quiz;
