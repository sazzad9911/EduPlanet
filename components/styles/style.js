import { StyleSheet, Dimensions} from "react-native";
const window=Dimensions.get("window")

const style = StyleSheet.create({
    headLine:{
        fontSize:25,
        fontWeight:'700',
        textAlign:'center',
        color:'black',
        marginBottom:35,
        marginTop:30
    },
    text:{
        fontSize:16,
        fontWeight:'200',
        color:'green',
    },
    tabButton:{
        width:100,
        height:40,
        backgroundColor:'white',
        margin:10,
        justifyContent:'center',
        alignItems: 'center',
    },

    viwe:{
        height:window.height,
        width:window.width,
        backgroundColor: 'white',
    },
    viwe1:{
        height:130,
        width:window.width,
        backgroundColor:'white',
        flexDirection:'row',
    },
    viwe2:{
        height:100,
        width:100,
        backgroundColor:'red',
        flexDirection:'column',
    },
    viwe3:{
        height:40,
        width:300,
        marginTop:70,
        marginLeft:45,
        borderRadius:20,
        backgroundColor:'#F0C2BF',
        //justifyContent:'center',
        //alignContent:'center',
    },
    cartButton:{
        height:112,
        width:112,
        marginTop:10,
        marginLeft:20,
        borderRadius:10,
        backgroundColor:'#FCF3DF',
        alignItems:'center',
        justifyContent:'center',
    },
    categoriesText:{
        fontSize:30,
        color:'black',
        marginLeft:90,
    },

    viewsignup:{
        
        borderRadius: 40,
        justifyContent:'center',
        alignItems:'center'
    },
    signUpButton:{
        height: 40,
        width:300,
        
        borderWidth: 0.5,
        padding: 10,
        borderRadius:20,
        backgroundColor:'#dda0dd'
    },
    input: {
        height: 40,
        width:300,
        marginTop:30,
        borderWidth: 0.5,
        padding: 10,
        borderRadius:20,
        backgroundColor:'#ffe4e1'
    },
    categoriesText1:{
        fontSize:19,
        color:'black',
        alignItems:'center',
    },
    profileviwe:{
        height:window.height,
        width:window.width,
        backgroundColor: 'white',
        alignItems:'center',
        //justifyContent:'center',
    },
    profileviwea:{
        height:220,
        width:380,
        marginTop:15,
        backgroundColor: '#FEE0DE',
        borderRadius:15,
    },
    profileviweC:{
        height:170,
        width:380,
        borderRadius:15,
        backgroundColor:'#FEE0DE',
        flexDirection: 'row',
    },
    profiletext:{
        fontSize:26,
        color:'black',
    },
    profiletextA:{
        fontSize:18,
        color:'black',
    },
    profiletextC:{
        fontSize:20,
        color:'black',
    },
    profiletextD:{
        fontSize:20,
        color:'black',
        marginLeft:100,
    },
    profiletextE:{
        fontSize:25,
        color:'blue',
        marginLeft:15,
    },
    profileviweB:{
        height:75,
        width:75,
    },
    profileviweD:{
        height:170,
        width:80,
        borderRadius:25,
        //marginLeft:10,
        marginTop:5,
        backgroundColor:'#FEE0DE'
    },
    profileviweE:{
        height:170,
        width:295,
        borderRadius:15,
        marginLeft:5,
        backgroundColor:'#FEE0DE'
    },
    profileviweF:{
        height:15,
        width:290,
        marginTop:10,
        borderRadius:15,
        borderColor:'black',
        backgroundColor:'white'
    },
    profileviweG:{
        height:15,
        width:200,
        borderRadius:15,
        backgroundColor:'blue'
    },
    profileviweH:{
        height:40,
        width:250,
        marginLeft:60,
        borderRadius:23,
        backgroundColor:'white'
    },
    profileviweI:{
        height:330,
        width:380,
        marginTop:15,
        backgroundColor: '#FEE0DE',
        borderRadius:15,
    },
    profileCart:{
        height:90,
        width:380,
        backgroundColor: '#FEE0DE',
        borderRadius:15,
    },


})

export default style