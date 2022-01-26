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
        color:'white',
    },
    tabButton:{
        width:110,
        height:80,
        backgroundColor:'#9932cc',
        marginLeft:10,
        marginRight:10,
        borderRadius:10,
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
      marginTop:{
          marginTop:50,
      }

})

export default style