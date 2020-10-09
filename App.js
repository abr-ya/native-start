import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import NewScreen from "./src/screens/NewScreen";
import ListScreen from "./src/screens/ListScreen";
import CardScreen from "./src/screens/CardScreen";
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    New: NewScreen,
    List: ListScreen,
    Card: CardScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "First React Native App"
    }
  }
);

export default createAppContainer(navigator);
