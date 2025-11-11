import React from "react";
import {createStackNavigator} from "@react-navigation/stack"
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import Profile from '../screens/Profile';


const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle:{
        backgroundColor: "red",
    },
    headerTintColor: "white",
};

const MainStackNavigator = ({navigation}) => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
            <Stack.Screen name="About" component={About}></Stack.Screen>
            <Stack.Screen name="Contact" component={Contact}></Stack.Screen>
        </Stack.Navigator>
    )
}

const AboutStackNavigator = ({navigation}) => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="About" component={About}></Stack.Screen>
            
        </Stack.Navigator>
    )
}

const ProfileStackNavigator = ({navigation}) => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
            
        </Stack.Navigator>
    )
}

export {MainStackNavigator, AboutStackNavigator, ProfileStackNavigator};