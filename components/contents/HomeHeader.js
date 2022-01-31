import React from 'react';
import { View, TouchableOpacity, Text} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

const HomeHeader = (props) => {
    const [Today,setDate] =React.useState(null);
    const user=props.user;

    React.useEffect(() => {
        const date=new Date();
        const arr=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        setDate(date.getDate()+' '+arr[date.getMonth()]+' '+date.getFullYear())
    },[])
    return (
        <View style={{
            flexDirection:'row',
            padding:10,
            alignItems: 'center',
            backgroundColor:'#FFFFFF',
        }}>
            <Icon name="arrowleft" size={30} color="black" onPress={()=>props.navigation.navigate('SignIn')}/>
            <View>
                <Text style={{
                    fontSize:22,
                    marginLeft:20,
                }}>Hi {user?user.Name:'.'} !</Text>
                <Text style={{
                    marginLeft:20,
                }}>{Today}</Text>
            </View>
        </View>
    );
};

export default HomeHeader;