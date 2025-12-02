import {NavigationContainer} from '@react-navigation/native';
import  BottomTabNavigator from './src/./navigation/./TabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default App;

