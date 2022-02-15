import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import Button from '../contents/Button'

const About = (props) => {
    const navigation = props.navigation
    return (
        <ScrollView>
            <Text style={styles.title}>Edu Planet</Text>
            <Text style={styles.text}>Online learning involves courses
                offered by primary institutions that
                are 100% virtual. Online learning, or
                virtual classes offered over the internet,
                is contrasted with traditional courses
                taken in a brick-and-mortar school building</Text>
            <View style={{
                alignItems: 'center'
            }}>
                <Image source={require('../file/Online-education-laptop-and-old-books.png')}
                    style={styles.image} />
            </View>
            <Text style={styles.text}>The quantity of distance
                learning and online degrees in most disciplines is
                large and increasing rapidly. Schools and institutions
                that offer online learning are also increasing in number.
                Students pursuing degrees via the online approach must be
                selective to ensure that their coursework is done through a
                respected and credentialed institution.
            </Text>
            <Text style={styles.text}>
            @Developed-by Edu Planet{'\n'}
            Email: shahrearahmedshuvon003@gmail.com
            </Text>
            <View style={{
                alignItems: 'center',
                margin: 10
            }}>
                <Button text='Next' onPress={() => {
                    navigation.navigate('SignIn')
                }} />
            </View>
        </ScrollView>
    );
};

export default About;
const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 5,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 18,
        margin: 10,
        fontWeight: '100',
        textAlign: 'justify',
        fontFamily: 'AppleSDGothicNeo-Thin'
    },
    image: {
        height: 250,
        width: 350,
        borderRadius: 10
    }
})