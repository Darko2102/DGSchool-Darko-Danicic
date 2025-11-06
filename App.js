import {NavigationContainer} from '@react-navigation/native';
import  MainStackNavigator from './src/navigation/MainStackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator />
    </NavigationContainer>
  );
}


