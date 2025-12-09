import {createDrawerNavigator} from '@react-navigation/drawer';
import { AboutStackNavigator } from './StackNavigator';
import { ContactStackNavigator } from './StackNavigator';
import { AboutStackNavigator } from './StackNavigator';
import { ProfileStackNavigator } from './StackNavigator';
import BottomTabNavigator from "./TabNavigator"
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator screenOptions={{
            drawerActiveBackgroundColor: '#2e4d92ff',
            drawerActiveTintColor: 'white',
            drawerInactiveTintColor: 'black',
            drawerStyele: {
                width: 250,
            },
        }}> 
        
        
             
            <Drawer.Screen name="Home" component={BottomTabNavigator}

                options={{
                    title: "Home",
                    drawerIcon: ({focused, color, size}) => (
                        <MaterialCommunityIcons name={focused ? "home": "home-outline"} size={22} color={color}/>
                    )
                }}/>  
          
        
            <Drawer.Screen name="About" component={AboutStackNavigator}
                options={{
                    title: "Home",
                    drawerIcon: ({focused, color, size}) => (
                        <MaterialCommunityIcons name={focused ? "information": "information-outline"} size={22} color={color}/>
                    )
                }}
            />
        
            <Drawer.Screen name="Contact" component={ContactStackNavigator}
                options={{
                    title: "Contact",
                    drawerIcon: ({focused, color, size}) => (
                        <MaterialCommunityIcons name={focused ? "contact": "contact-outline"} size={22} color={color}/>
                 )
                }}
            />
        
            <Drawer.Screen name="Profile" component={ProfileStackNavigator}
                options={{
                    title: "Profile",
                    drawerIcon: ({focused, color, size}) => (
                        <MaterialCommunityIcons name={focused ? "profile": "profile-outline"} size={22} color={color}/>
                 )
                }}
            />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;