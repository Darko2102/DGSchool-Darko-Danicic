import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MainStackNavigator, AboutStackNavigator, ProfileStackNavigator} from './StackNavigator'
import {MaterialCommunityicons} from '@expo/vector-icons'


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#1f4997ff',
                tabBarInactiveTintColor: 'lightgray',
            
                tabBarStyle: {
                    backgroundColor: '#384053',
            },
                tabBarLabelStyle: {
                    fontSize: 12,
            },
            headerShown: false,
        }}
>


            
                <Tab.Screen 
                    name="Home"
                    component={MainStackNavigator}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityicons 
                                name='home' size={26} color={color}
                            />
                            
                        )
                    }}
                />
                <Tab.Screen 
                    name="About"
                    component={AboutStackNavigator}
                    options={{
                        tabBarLabel: 'About',
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityicons 
                                name='video-stabilization' size={26} color={color}
                            />
                            
                        )
                    }}
                />

                <Tab.Screen 
                    name="Profile"
                    component={ProfileStackNavigator}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityicons 
                                name='user' size={26} color={color}
                            />
                            
                        )
                    }}
                />
        </Tab.Navigator>
    )
}

export default TabNavigator;