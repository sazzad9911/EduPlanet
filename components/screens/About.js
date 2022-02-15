import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native'
import Button from '../contents/Button'

const About = (props) => {
    const navigation = props.navigation
    return (
        <ScrollView>
            <Text style={styles.title}>Edu Planet</Text>
            
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
        margin:5
    }
})