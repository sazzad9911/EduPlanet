import React from 'react';
import { View, TouchableOpacity, Text, Dimensions } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile'
import Dashboard from './Dashboard'
import Search from './Search'
import style from '../styles/style'

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
                backgroundColor:'#F49A14',
                flexDirection:'row',
                borderRadius:10,
                padding:10,
                marginBottom:10,
                alignItems: 'center'
            }}>
                <TouchableOpacity style={style.tabButton} onPress={()=>{
                    navigation.navigate('Dashboard')
                }}>
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.tabButton} onPress={()=>{
                    navigation.navigate('Search')
                }}>
                    <Text>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.tabButton} onPress={()=>{
                    navigation.navigate('Profile')
                }}>
                    <Text>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}