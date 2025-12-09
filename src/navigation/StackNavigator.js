import React from "react";
import {createStackNavigator} from "@react-navigation/stack"
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import Profile from '../screens/Profile';


const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle:{
         backgroundColor: '#384053',
    },
    headerTintColor: "white",
};

const MainStackNavigator = ({navigation}) => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
            <Stack.Screen name="About" component={About}></Stack.Screen>
            <Stack.Screen name="Contact" component={Contact}></Stack.Screen>
            <Stack.Screen name='android' comonent={Android} />
            <Stack.Screen name='Ios' comonent={Ios} />
            <Stack.Screen name='Single' comonent={Single} />
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

const ContactStackNavigator = ({navigation}) => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Contact" component={Contact}></Stack.Screen>
            
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





export {MainStackNavigator, AboutStackNavigator, ProfileStackNavigator,  ContactStackNavigator};