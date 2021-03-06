import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import CheckBox from '@react-native-community/checkbox';

const QuizCart = (props) => {
    const [Check, setCheck] = React.useState(false)
    const [A1, setA1] = React.useState(false)
    const [A2, setA2] = React.useState(false)
    const [A3, setA3] = React.useState(false)
    const [A4, setA4] = React.useState(false)
    const data = props.data
    const [M1, setM1] = React.useState(null)
    const [M2, setM2] = React.useState(null)
    const [M3, setM3] = React.useState(null)
    const [M4, setM4] = React.useState(null)
    const [sub,setSub] = React.useState(false)
    const [Answer,setAnswer]= React.useState(false)
    const answers= props.answers

    React.useEffect(() => {
        if(answers){
            if(data.Answer==1){
                setA1(true)
            }else if(data.Answer==2){
                setA2(true)
            }else if(data.Answer==3){
                setA3(true)
            }else if(data.Answer==4){
                setA4(true)
            }
        }
    },[])
    const checkAnswer = (data, index) => {
        if(sub){
            return
        }
        setSub(true)
        if(data.Answer==index+1) {
            setAnswer(true)
            props.setQuizMark(props.QuizMark+1)
        }else{
            setAnswer(false)
        }
    }
    return (
        <View style={[styles.view]}>
            <Text style={styles.text}>{props.index+1+' . '+data.Question}</Text>
            <View style={styles.view2}>
                <View style={styles.view3}>
                    <CheckBox disabled={answers} value={A1} onValueChange={(val)=>{
                        checkAnswer(data,0)
                        setA1(val)
                    }} />
                    <Text style={[styles.text,{
                        color:M1?M1:'black',
                    }]}>{data.Options[0]}</Text>
                </View>
                <View style={styles.view3}>
                    <CheckBox disabled={answers} value={A2} onValueChange={(val)=>{
                        checkAnswer(data,1)
                        setA2(val)
                    }} />
                    <Text style={[styles.text,{
                        color:M2?M2:'black',
                    }]}>{data.Options[1]}</Text>
                </View>
            </View>
            <View style={styles.view2}>
                <View style={styles.view3}>
                    <CheckBox disabled={answers} value={A3} onValueChange={(val)=>{
                        checkAnswer(data,2)
                        setA3(val)
                        
                    }} />
                    <Text style={[styles.text,{
                        color:M3?M3:'black',
                    }]}>{data.Options[2]}</Text>
                </View>
                <View style={styles.view3}>
                    <CheckBox disabled={answers} value={A4} onValueChange={(val)=>{
                        checkAnswer(data,3)
                        setA4(val)
                        
                    }} />
                    <Text style={[styles.text,{
                        color:M4?M4:'black',
                    }]}>{data.Options[3]}</Text>
                </View>
            </View>
        </View>
    );
};

export default QuizCart;
const styles = StyleSheet.create({
    view: {
        margin:10,
        backgroundColor:'#fff',
        borderRadius:5,
        padding:5
    },
    view2: {
        flexDirection: 'row',
        flex: 1
    },
    view3: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 2
    },
    text:{
        fontSize: 16,
    }
})