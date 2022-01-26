import React from 'react';
import { View, TouchableOpacity, Text, Dimensions } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile'
import Dashboard from './Dashboard'
import Search from './Search'
import style from '../styles/style'
import Icon from 'react-native-vector-icons/AntDesign'

const Tab = createBottomTabNavigator();
const window = Dimensions.get('window')

const Home = (props) => {
    return (
        <Tab.Navigator tabBar={props => <TabBar {...props}></TabBar>}>
            <Tab.Screen name="Dashboard" component={Dashboard} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};
export default Home;

const TabBar = (props) => {
    const navigation = props.navigation;

    return (
        <View style={{
            width: window.width,
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <View style={{
                backgroundColor: '#a9a9a9',
                flexDirection: 'row',
                borderRadius: 10,

                marginBottom: 10,
                alignItems: 'center'
            }}>
                <View>


                    <TouchableOpacity style={style.tabButton} onPress={() => {
                        navigation.navigate('Dashboard')

                    }}>
                        <Icon name="home" size={30} color="white" />
                        <Text style={style.text}>Home</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={style.tabButton} onPress={() => {
                        navigation.navigate('Search')
                    }}>
                        <Icon name="search1" size={30} color="white" />
                        <Text style={style.text}>Search</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={style.tabButton} onPress={() => {
                        navigation.navigate('Profile')
                    }}>
                        <Icon name="user" size={30} color="white" />
                        <Text style={style.text}>Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )

}