import React from 'react';
import { View, Text } from 'react-native'
import AnimatedLoader from 'react-native-animated-loader';

const Loader = (props) => {
    return (
        <AnimatedLoader
            visible={props.visible}
            overlayColor="rgba(255, 255, 255, 0.767)"
            source={require("../file/35667-parallaxdesk.json")}
            animationStyle={{ 
                height:100,
                width:100
            }}
            speed={1}
        >
            <Text style={{
                fontSize:18,
                fontWeight: '100'
            }}>{props.text}</Text>
        </AnimatedLoader>
    );
};

export default Loader;