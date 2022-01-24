import { StyleSheet, Dimensions} from "react-native";
const window=Dimensions.get("window")

const style = StyleSheet.create({
    headLine:{
        fontSize:25,
        fontWeight:'700',
        textAlign:'center',
        color:'black'
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
        height:100,
        width:100,
        marginTop:10,
        marginLeft:20,
        borderRadius:10,
        backgroundColor:'#FCF3DF',
    },
    categoriesText:{
        fontSize:30,
        color:'black',
        marginLeft:90,
    }
})

export default style