import React from 'react';
import { View, Text, TextInput, Alert, Modal, StyleSheet, ScrollView } from 'react-native'
import style from '../styles/style';
import { Picker } from '@react-native-picker/picker';
import SearchButton from '../contents/SearchButton';
import Button from '../contents/Button';
import Loader from '../contents/Loader'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import uuid from 'react-native-uuid'

const AddQuestion = () => {
    const [number9, onChangeNumber9] = React.useState(null);
    const [selectedLanguage, setSelectedLanguage] = React.useState(null);
    const [Video, setVideo] = React.useState(null);
    const [Banner, setBanner] = React.useState(null);
    const [visible, setVisible] = React.useState(false);
    const [text, setText] = React.useState(' ');
    const [Modals, setModals] = React.useState({ name: 'AddOption', visible: false });

    const ModalCart = (props) => {
        const [Op1, setOp1] = React.useState(null)
        const [Op2, setOp2] = React.useState(null)
        const [Op3, setOp3] = React.useState(null)
        const [Op4, setOp4] = React.useState(null)

        return (
            <ScrollView>
                <Text style={{
                    fontSize: 20,
                    textAlign: 'center',
                    margin: 10
                }}>{Modals.name}</Text>
                {
                    Modals.name == 'AddOption' ?
                        (
                            <View style={{
                                margin: 10,
                                alignItems: 'center',
                            }}>
                                <Text style={styles.text}>Option No. 1</Text>
                                <TextInput onChangeText={(val) => setOp1(val)} style={style.input} placeholder="Enter Option" />
                                <Text style={styles.text}>Option No. 2</Text>
                                <TextInput onChangeText={(val) => setOp2(val)} style={style.input} placeholder="Enter Option" />
                                <Text style={styles.text}>Option No. 3</Text>
                                <TextInput onChangeText={(val) => setOp3(val)} style={style.input} placeholder="Enter Option" />
                                <Text style={styles.text}>Option No. 4</Text>
                                <TextInput onChangeText={(val) => setOp4(val)} style={style.input} placeholder="Enter Option" />
                                <Button style={{
                                    margin: 40
                                }} text='Save' onPress={() => {
                                    if (!Op1 || !Op2 || !Op3 || !Op4) {
                                        Alert.alert('Invalid!', 'Please insert all values')
                                        return
                                    }
                                    setVideo([Op1, Op2, Op3, Op4])
                                    setModals({ visible: false })
                                }} />
                            </View>
                        ) : (
                            <View style={{
                                margin: 10,
                                alignItems: 'center',
                            }}>
                                <View style={{
                                    height: 40,
                                    width: 300,
                                    paddingBottom: 50,
                                    marginTop: 30,
                                    borderWidth: 0.5,
                                    borderRadius: 20,
                                    backgroundColor: '#ffe4e1'

                                }}>
                                    <Picker
                                        selectedValue={Banner}
                                        onValueChange={(itemValue, itemIndex) =>
                                            setBanner(itemValue)
                                        }>
                                        <Picker.Item label="Select Index" value="" />
                                        <Picker.Item label="Option 1" value="1" />
                                        <Picker.Item label="Option 2" value="2" />
                                        <Picker.Item label="Option 3" value="3" />
                                        <Picker.Item label="Option 4" value="4" />
                                    </Picker>
                                </View>

                                <Button style={{
                                    margin: 40
                                }} text='Save' onPress={() => {
                                    setModals({ visible: false })
                                }} />
                            </View>
                        )
                }
            </ScrollView>
        )
    }

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 100
        }}>
            <View style={{
                height: 40,
                width: 300,
                paddingBottom: 50,
                marginTop: 30,
                borderWidth: 0.5,
                borderRadius: 20,
                backgroundColor: '#ffe4e1'

            }}>

                <Picker
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="Category" value="" />
                    <Picker.Item label="Mobile Design" value="Mobile Design" />
                    <Picker.Item label="3D Modeling" value="3D Modeling" />
                    <Picker.Item label="Web Designing" value="Web Designing" />
                    <Picker.Item label="Illustrations" value="Illustrations" />
                    <Picker.Item label="Drawing" value="Drawing" />
                    <Picker.Item label="Animation" value="Animation" />
                    <Picker.Item label="Education" value="Education" />
                    <Picker.Item label="Networking" value="Networking" />
                    <Picker.Item label="Coding" value="Coding" />
                    <Picker.Item label="Digital Marketing" value="Digital Marketing" />
                    <Picker.Item label="Graphic Design" value="Graphic Design" />
                    <Picker.Item label="Photography" value="Photography" />
                </Picker>
            </View>

            <TextInput
                style={style.input}
                onChangeText={onChangeNumber9}
                value={number9}
                placeholder="Enter Question"
                placeholderTextColor={'black'}

            />
            <View style={{ flexDirection: 'row' }}>
                <SearchButton disabled={Video ? true : false} text='Add Option' onPress={() => {
                    setModals({ name: 'AddOption', visible: true })
                    
                }} />
                <SearchButton disabled={Banner ? true : false} text='Add Answer' onPress={() => {
                    setModals({ name: 'AddQuestion', visible: true })
                
                }} />
            </View>

            <View style={{ marginTop: 100 }}>
                <Button text='Submit' onPress={() => {
                    //console.log(Video)
                    //console.log(Banner)
                    if(!number9){
                        Alert.alert('Invalid!','Please enter valid question')
                        return
                    }
                    if(!Video || !Banner || !selectedLanguage) {
                        Alert.alert('Invalid!','Please enter valid Options and Answer or select category')
                        return
                    }
                    const id=uuid.v4();
                    setVisible(true)
                    firestore().collection('Quiz').doc(id).set({
                        Id:id,
                        Options:Video,
                        Answer:parseInt(Banner),
                        Category: selectedLanguage,
                        Question:number9
                    }).then(() => {
                        setVisible(false)
                        Alert.alert('Success','Question is added successful')
                        setVideo(null)
                        setBanner(null)
                        setSelectedLanguage("")
                        onChangeNumber9(null)
                    }).catch((err) => {
                        setVisible(false)
                        Alert.alert(err.code, err.message)
                    })
                }} />
            </View>
            <Loader visible={visible} text={text} />
            <Modal visible={Modals.visible} onRequestClose={() => setModals({ visible: false })}>
                <ModalCart />
            </Modal>
        </View>
    );
};

export default AddQuestion;
const styles = StyleSheet.create({
    text: {
        fontSize: 22,
    }
})
