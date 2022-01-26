import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Button } from 'react-native'
import style from '../styles/style'
import DashCart from '../cart/DashCart';
const Dashboard = () => {
    return (
        <View>
            <View>
                <View style={{ height: 250, width: window.width, margin: 10 }}>
                    <Image
                        style={{ height: 250, width: window.width, borderRadius: 10 }}
                        source={require('../cart/CartImage/aaa.jpg')}
                    />
                    <View style={{ position: 'absolute' }}>
                        <Text style={{ fontSize: 30, marginTop: 15, marginLeft: 15, color: 'white' }}>HOW TO</Text>
                        <Text style={{ fontSize: 18, marginLeft: 15, color: 'white' }}>Make your brand more visible {"\n"}with your checklist</Text>
                        <TouchableOpacity style={{ height: 25, width: 130, backgroundColor: 'white', marginTop: 110, marginLeft: 240, borderRadius: 15 }}>
                            <Text style={{ color: 'black', fontSize: 18, marginLeft: 10 }}>Start Learning</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            <ScrollView horizontal={true}>
                <DashCart dtext='Name' dIcon='user'></DashCart>
                <View style={style.dashbord}></View>
                <View style={style.dashbord}></View>
                <View style={style.dashbord}></View>
                <View style={style.dashbord}></View>

            </ScrollView>
        </View>
    );
};

export default Dashboard;