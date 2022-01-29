import React from "react";
import { SafeAreaView, StyleSheet, TextInput,View,Text } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import style from "../styles/style";

const EditText = (props) => {
  const [text, onChangeText] = React.useState("Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={style.profileCart}>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Icon name={props.pIcon} size={45} color="black" style={{ marginTop: 20 }} />
                </View>
                <View>
                    <Text style={{ fontSize: 18, marginLeft:10,marginTop:15 }}>{props.ptext}</Text>
                    <SafeAreaView>
                        <TextInput
                            style={{ fontSize:30,marginLeft:10}}
                            onChangeText={onChangeText}
                            value={text}
                            label='Name'
                        />

                    </SafeAreaView>
                </View>

            </View>
            <View style={{ height: 2, width: 350, backgroundColor: 'black', marginTop: 5, marginLeft: 10 }}>
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