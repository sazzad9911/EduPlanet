import React from "react";
import { SafeAreaView, StyleSheet, TextInput,View,Text } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import style from "../styles/style";

const EditText = (props) => {

  return (
    <View style={style.profileCart}>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Icon name={props.pIcon} size={40} color="black" style={{ margin:25,}} />
                </View>
                <View>
                    <Text style={{ fontSize: 18, marginLeft:10,marginTop:15 }}>{props.ptext}</Text>
                    <SafeAreaView>
                        <TextInput
                            style={{fontSize:20,marginLeft:10}}
                            onChangeText={props.onChangeText}
                            value={props.text}
                            label='Name'
                        />

                    </SafeAreaView>
                </View>

            </View>
            
        </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default EditText;