import React from "react";
import { StyleSheet, Dimensions, View, Text, Image, TouchableOpacity,Modal} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import style from "../styles/style";
import DropShadow from "react-native-drop-shadow";
import Video from 'react-native-video';



const window = Dimensions.get('window')

const DashCart = (props) => {
    const [ModalVisibility, setModalVisibility] =React.useState(true);
    return (
        <View style={{width:280}}>
            <Image
                        style={{ height: 150, width: 250, borderRadius: 10,margin:15 }}
                        source={require('../cart/CartImage/mobileDesign.jpg')}
                    />
            <TouchableOpacity style={{flexDirection:'row',width:280,}}>
            <Icon name={props.dIcon} size={50} color="#EE4DE8" style={{ marginTop: 10,marginLeft:10 }} />
            <Text style={{ fontSize: 25,marginLeft:5,color:'black',flex:2 }}>{props.dtext}</Text>
            </TouchableOpacity>
            <Modal visible={ModalVisibility} onRequestClose={()=>setModalVisibility(!ModalVisibility)} style={{

            }}>
            <View>
                <Video style={{
                    width:window.width-10,
                    height:300,
                    margin:5,
                }} fullscreen={true} minLoadRetryCount={5} posterResizeMode='cover' source={require('../file/Atif_Aslam__Tera_Hua_Video___Loveratri___Aayush_Sharma___Warina_Hussain___Tanish.mp4')}/>
            </View>
            </Modal>
        </View>

    )
}
export default DashCart