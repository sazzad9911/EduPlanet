import { StyleSheet, Dimensions, Text } from "react-native";
const window = Dimensions.get("window")

const SignInStyle = StyleSheet.create({
    textInput: {
        height: window.height - 650,
        width: window.width,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },

    underLogin: {
        height: window.height - 750,
        width: window.width,
        justifyContent: 'center',
        alignItems: 'center',
        margin:20
    },

    underDotview: {
        height: 17,
        width: 17,
        borderRadius: 4,
        backgroundColor: 'black',
        marginLeft: -320,
        marginTop: 5
    },

    underDotview1: {
        height: 13,
        width: 13,
        borderRadius: 4,
        backgroundColor: 'white',
        marginLeft: 1,
        marginTop: 1
    },

    bottomSignIn: {
        height: 150,
        width: window.width,
        backgroundColor: '#b0c4de',
        borderTopLeftRadius: 400,
        justifyContent: 'center',
        alignItems: 'center'
    },

})

export default SignInStyle