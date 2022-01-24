import { StyleSheet, Dimensions } from "react-native";
const window = Dimensions.get("window")

const style = StyleSheet.create({
    headLine: {
        fontSize: 30,
        fontWeight: '800',
        color: 'black'
    },
    text: {
        fontSize: 16,
        fontWeight: '200',
        color: 'green',
    },
    tabButton: {
        width: 100,
        height: 40,
        backgroundColor: 'white',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    allOver: {
        height: 792,
        width: 432,
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },

    textView: {
        height: 300,
        width: 220,
        backgroundColor: 'white',
        marginTop: 100,
        marginLeft: 45,
    },

    text1: {
        fontSize: 20,
        color: 'black',
        fontWeight: '600',
        width: 400
    },

    image: {
        height: 200,
        width: 350,
        backgroundColor: 'red',
        marginTop: 50,
        borderRadius: 12
    },

    bottomView: {
        height: 10,
        width: 10,
        borderRadius: 100,
        backgroundColor: 'black'
    },

    dotView: {
        height: 70,
        width: 150,
        backgroundColor: 'red',
        marginTop: 100
    },
})

export default style