import {NavigationContainer} from '@react-navigation/native';
import  BottomTabNavigator from './src/./navigation/./TabNavigator';
import { MainStackNavigator } from './src/navigation/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}

export default App;

