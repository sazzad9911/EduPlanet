import React from "react";
import { StyleSheet, Dimensions, View, Text, Image, TouchableOpacity, Modal } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import style from "../styles/style";
import DropShadow from "react-native-drop-shadow";
import VideoPlayer from 'react-native-video-controls';
import Loader from './../contents/Loader';



const window = Dimensions.get('window')

const DashCart = (props) => {
    const [ModalVisibility, setModalVisibility] = React.useState(false);
    const data = props.data;
    return (
        <DropShadow style={{
            shadowColor: "#000",
            shadowOffset:{
                width:0,
                height:0
            },
            shadowOpacity:.2,
            shadowRadius:3
        }}>
            <View style={{ width: props.i==1? window.width-30:280, margin: 5,backgroundColor:'white',borderRadius: 10,padding:5}}>
                <Image
                    style={{ height: 150, width: props.i==1? window.width-60:150, borderRadius: 10, margin: 10}}
                    source={{ uri: data.Banner }}
                />
                <TouchableOpacity onPress={() => setModalVisibility(!ModalVisibility)} style={{ flexDirection: 'row', width: 280, }}>
                    <Icon name={props.dIcon} size={50} color="#EE4DE8" style={{ marginTop: 10, marginLeft: 10 }} />
                    <Text style={{ fontSize: 23, marginLeft: 5, color: 'black', flex: 2 }}>{data.Name}</Text>
                </TouchableOpacity>
                <Modal animationType="fade"
                    visible={ModalVisibility}
                    onRequestClose={() => setModalVisibility(!ModalVisibility)} style={{

                    }}>
                    <View style={{
                        padding: 5,
                        width: window.width,
                        height: window.height,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <VideoPlayer onBack={() => {
                            setModalVisibility(!ModalVisibility)
                        }} controls={true} toggleResizeModeOnFullscreen={true} source={{ uri: data.Video }} />
                    </View>
                </Modal>
            </View>

        </DropShadow>
    )
}
export default DashCart