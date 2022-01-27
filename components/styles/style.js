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
        color: 'white',
    },
    tabButton: {
        width: 110,
        height: 80,
        backgroundColor: '#9932cc',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        justifyContent: 'center',
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

        viwe: {
            height: window.height,
            width: window.width,
            backgroundColor: 'white',
        },
        viwe1: {
            height: 130,
            width: window.width,
            backgroundColor: 'white',
            flexDirection: 'row',
        },
        viwe2: {
            height: 100,
            width: 100,
            backgroundColor: 'red',
            flexDirection: 'column',
        },
        viwe3: {
            height: 40,
            width: 300,
            marginTop: 70,
            marginLeft: 45,
            borderRadius: 20,
            backgroundColor: '#F0C2BF',
            //justifyContent:'center',
            //alignContent:'center',
        },
        cartButton: {
            height: 112,
            width: 112,
            marginTop: 10,
            marginLeft: 20,
            borderRadius: 10,
            backgroundColor: '#FCF3DF',
            alignItems: 'center',
            justifyContent: 'center',
        },
        categoriesText: {
            fontSize: 30,
            color: 'black',
            marginLeft: 90,
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
        marginTop: {
            marginTop: 50,
        },

      
    categoriesText1: {
        fontSize: 19,
        color: 'black',
        alignItems: 'center',
    },


    topDesign: {
        height: window.height - 550,
        width: window.width,
        backgroundColor: '#b0c4de',
        borderBottomRightRadius: 400,
        justifyContent: 'center',
        alignItems: 'center'
    },

    logoDesign: {
        height: window.height - 660,
        width: window.width - 275,
        backgroundColor: 'white',
        borderRadius: 400,
        marginTop: 55,
        marginLeft: 0,
        marginBottom: -25
    },

    logoImage: {
        height: window.height - 660,
        width: window.width - 275,
        backgroundColor: 'white',
        borderRadius: 400,
        marginTop: 55,
        marginLeft: 0,
        marginBottom: -25
    },

    profileviwe: {
        height: window.height,
        width: window.width,
        backgroundColor: 'white',
        alignItems: 'center',
        //justifyContent:'center',
    },
    profileviwea: {
        height: 220,
        width: 380,
        marginTop: 15,
        backgroundColor: '#FEE0DE',
        borderRadius: 15,
    },
    profileviweC: {
        height: 170,
        width: 380,
        borderRadius: 15,
        backgroundColor: '#FEE0DE',
        flexDirection: 'row',
    },
    profiletext: {
        fontSize: 26,
        color: 'black',
    },
    profiletextA: {
        fontSize: 18,
        color: 'black',
    },
    profiletextC: {
        fontSize: 20,
        color: 'black',
    },
    profiletextD: {
        fontSize: 20,
        color: 'black',
        marginLeft: 100,
    },
    profiletextE: {
        fontSize: 25,
        color: 'blue',
        marginLeft: 15,
    },
    profileviweB: {
        height: 75,
        width: 75,
    },
    profileviweD: {
        height: 170,
        width: 80,
        borderRadius: 25,
        //marginLeft:10,
        marginTop: 5,
        backgroundColor: '#FEE0DE'
    },
    profileviweE: {
        height: 170,
        width: 295,
        borderRadius: 15,
        marginLeft: 5,
        backgroundColor: '#FEE0DE'
    },
    profileviweF: {
        height: 15,
        width: 290,
        marginTop: 10,
        borderRadius: 15,
        borderColor: 'black',
        backgroundColor: 'white'
    },
    profileviweG: {
        height: 15,
        width: 200,
        borderRadius: 15,
        backgroundColor: 'blue'
    },
    profileviweH: {
        height: 40,
        width: 250,
        marginLeft: 60,
        borderRadius: 23,
        backgroundColor: 'white'
    },
    profileviweI: {
        height: 330,
        width: 380,
        marginTop: 15,
        backgroundColor: '#FEE0DE',
        borderRadius: 15,
    },
    profileCart: {
        height: 90,
        width: 380,
        backgroundColor: '#FEE0DE',
        borderRadius: 15,
    },
    dashbord: {
        height: 50,
        width: 50,
        backgroundColor: 'red',
        margin: 30,
    },


})

export default style