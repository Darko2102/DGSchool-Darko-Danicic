import React from "react";
import {createStackNavigator} from "@react-navigation/stack"
import Home from '../screens/Home'
import About from '../screens/About'

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle:{
        backgroundColor: "red",
    },
    headerTintColor: "white",
}

const MainStackNavigator = ({navigation}) => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
            <Stack.Screen name="About" component={About}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default MainStackNavigator;