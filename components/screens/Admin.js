import React from 'react';
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddVideos from './AddVideos'
import AddQuestion from './AddQuestion'
import Ionicons from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();
const Admin = (props) => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Add Video') {
                    iconName = focused
                        ? 'plus'
                        : 'plus-circle';
                } else if (route.name === 'Add Question') {
                    iconName = focused ? 'plus-square' : 'plus-square-o';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
        })}>
            <Tab.Screen name="Add Video" component={AddVideos} />
            <Tab.Screen name="Add Question" component={AddQuestion} />
        </Tab.Navigator>
    );
};

export default Admin;