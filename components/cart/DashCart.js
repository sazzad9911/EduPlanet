import React from "react";
import { StyleSheet, Dimensions, View, Text, Image, TouchableOpacity,Modal} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import style from "../styles/style";
import DropShadow from "react-native-drop-shadow";
import VideoPlayer from 'react-native-video-controls';
import Loader from './../contents/Loader';



const window = Dimensions.get('window')

const DashCart = (props) => {
    const [ModalVisibility, setModalVisibility] =React.useState(false);
    return (
        <View style={{width:280}}>
            <Image
                        style={{ height: 150, width: 250, borderRadius: 10,margin:15 }}
                        source={require('../cart/CartImage/mobileDesign.jpg')}
                    />
            <TouchableOpacity onPress={()=>setModalVisibility(!ModalVisibility)} style={{flexDirection:'row',width:280,}}>
            <Icon name={props.dIcon} size={50} color="#EE4DE8" style={{ marginTop: 10,marginLeft:10 }} />
            <Text style={{ fontSize: 25,marginLeft:5,color:'black',flex:2 }}>{props.dtext}</Text>
            </TouchableOpacity>
            <Modal animationType="fade"
             visible={ModalVisibility} 
             onRequestClose={()=>setModalVisibility(!ModalVisibility)} style={{

            }}>
            <View style={{
                padding:5,
                width: window.width,
                height:window.height,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <VideoPlayer onBack={()=>{
                    setModalVisibility(!ModalVisibility)
                }} controls={true} toggleResizeModeOnFullscreen={true} source={require('../file/Atif_Aslam__Tera_Hua_Video___Loveratri___Aayush_Sharma___Warina_Hussain___Tanish.mp4')} />
            </View>
            </Modal>
        </View>

    )
}
export default DashCart