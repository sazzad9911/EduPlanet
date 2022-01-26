import React from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './components/screens/SignIn'
import SignUp from './components/screens/SignUp'
import Home from './components/screens/Home'
import Explore from './components/screens/Explore'
import Categories from './components/screens/Categories'
import Forget from './components/screens/Forget'
import Notification from './components/screens/Notification'

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Explore' component={Explore} options={{ headerShown: false }} />
        <Stack.Screen name="Categories" component={Categories} options={{ headerShown: true }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Forget" component={Forget} options={{ headerShown: true }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;