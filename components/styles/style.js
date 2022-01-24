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
    }
})

export default style