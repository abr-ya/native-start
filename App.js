import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import NewScreen from "./src/screens/NewScreen";
import ListScreen from "./src/screens/ListScreen";
import CardScreen from "./src/screens/CardScreen";
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import ColorScreen2 from './src/screens/ColorScreen2';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    New: NewScreen,
    List: ListScreen,
    Card: CardScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Color2: ColorScreen2,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Слабоумие и отвага!"
    }
  }
);

export default createAppContainer(navigator);
