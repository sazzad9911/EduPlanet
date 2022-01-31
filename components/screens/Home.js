import React from 'react';
import { View, TouchableOpacity, Text, Dimensions } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRoute } from '@react-navigation/native';
import Profile from './Profile'
import Dashboard from './Dashboard'
import Search from './Search'
import style from '../styles/style'
import Icon from 'react-native-vector-icons/AntDesign'
import tabStyle from '../styles/tabStyle';
import HomeHeader from '../contents/HomeHeader'
import firestore from '@react-native-firebase/firestore'
import Loader from '../contents/Loader'

const Tab = createBottomTabNavigator();
const window = Dimensions.get('window')

const Home = (props) => {
    const [Admin, setAdmin] = React.useState(false)
    const [UserInformation, setUserInformation] = React.useState(null)
    const params = props.route.params
    const navigation = props.navigation
    const [loader, setLoader] = React.useState(true)

    React.useEffect(() => {
        firestore().collection('UserInformation').doc(params.uid).onSnapshot(doc => {
            if (doc) {
                setUserInformation(doc.data())
                setLoader(false)
                if(doc.get('Admin')){
                    navigation.navigate('Add Video')
                }
            } else {
                setLoader(false)
            }
        },[])
    })

    return (
        <Tab.Navigator tabBar={props => <TabBar {...props}></TabBar>}>
            <Tab.Screen name="Dashboard" component={Dashboard} initialParams={{user:UserInformation}} options={{ header: (props) => <HomeHeader {...props} user={UserInformation} /> }} />
            <Tab.Screen name="Search" component={Search} initialParams={{user:UserInformation}} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" initialParams={{user:UserInformation}} component={Profile} options={{
                header: () => <Text style={{
                    backgroundColor: 'white',
                    fontSize: 20,
                    textAlign: 'center',
                    padding: 10,
                }}>Profile</Text>
            }} />
        </Tab.Navigator>
    );
};
export default Home;
const TabBar = (props) => {
    const navigation = props.navigation;
    const state = props.state;
    //console.log();

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <View style={{
                backgroundColor: '#a9a9a9',
                flexDirection: 'row',
                borderRadius: 10,
                marginBottom: 10,
                alignItems: 'center',
                padding: 0,
            }}>
                <View>
                    <TouchableOpacity style={[tabStyle.tabButton, { backgroundColor: state.index == 0 ? '#6C3483' : '#a9a9a9' }]} onPress={() => {
                        navigation.navigate('Dashboard')

                    }}>
                        <Icon name="home" size={30} color="white" />
                        <Text style={tabStyle.text}>Home</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={[tabStyle.tabButton, { marginLeft: 10, marginRight: 10, backgroundColor: state.index == 1 ? '#6C3483' : '#a9a9a9' }]} onPress={() => {
                        navigation.navigate('Search')
                    }}>
                        <Icon name="search1" size={30} color="white" />
                        <Text style={tabStyle.text}>Search</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={[tabStyle.tabButton, { backgroundColor: state.index == 2 ? '#6C3483' : '#a9a9a9' }]} onPress={() => {
                        navigation.navigate('Profile')
                    }}>
                        <Icon name="user" size={30} color="white" />
                        <Text style={tabStyle.text}>Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )

}