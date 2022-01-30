import { StyleSheet, Dimensions } from "react-native";
const window = Dimensions.get("window")

const tabStyle = StyleSheet.create({
tabButton: {
    width: 110,
    height: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems:'center'
},
text: {
    fontSize: 16,
    fontWeight: '200',
    color: 'white',
},


})

export default tabStyle