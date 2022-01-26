import { StyleSheet, Dimensions } from "react-native";
const window = Dimensions.get("window")

const style = StyleSheet.create({
    headLine: {
        fontSize: 30,
        fontWeight: '800',
        color: 'black'
    },

    headLine1: {
        fontSize: 30,
        fontWeight: '800',
        color: 'black',
        marginLeft: 0
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
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5
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
        height: 180,
        width: 350,
        backgroundColor: 'white',
        marginTop: 50,
        borderRadius: 12
    },

    dotView: {
        height: 17,
        width: 17,
        borderRadius: 80,
        backgroundColor: 'black',
        marginLeft: 12,
        marginTop: 28
    },

    dotView1: {
        height: 13,
        width: 13,
        borderRadius: 80,
        backgroundColor: 'white',
        marginLeft: 2,
        marginTop: 2
    },

    bottom: {
        height: 150,
        width: 400,
        backgroundColor: 'white',
        marginTop: 70,
        flexDirection: 'row'
    },

    bottomButton: {
        height: 55,
        width: 140,
        backgroundColor: '#dda0dd',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        marginLeft: 81,
        marginTop: 48
    },

    bottomButtonText: {
        fontSize: 28,
        color: 'black',
        justifyContent: 'center',
        marginLeft: 48,
        marginTop: 6,
        fontWeight: '400'
    },

    bottomView: {
        height: 70,
        width: 150,
        backgroundColor: 'white',
        marginTop: 40,
        marginLeft: 15,
        flexDirection: 'row'
    },

    bottomView1: {
        height: 70,
        width: 150,
        backgroundColor: 'red',
        marginTop: 100,
        marginLeft: 15,
        flexDirection: 'row'
    },

    headLine: {
        fontSize: 25,
        fontWeight: '700',
        textAlign: 'center',
        color: 'black',
        marginBottom: 35,
        marginTop: 30
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
    viewsignup: {
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signUpButton: {
        height: 40,
        width: 300,
        borderWidth: 0.5,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#dda0dd'
    },
    input: {
        height: 40,
        width: 300,
        marginTop: 30,
        borderWidth: 0.5,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#ffe4e1'
    },

})

export default style