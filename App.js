import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import NewScreen from "./src/screens/NewScreen";
import ListScreen from "./src/screens/ListScreen";
import CardScreen from "./src/screens/CardScreen";
import CounterScreen from './src/screens/CounterScreen';
import CounterScreenReducer from './src/screens/CounterScreenReducer';
import ColorScreen from './src/screens/ColorScreen';
import ColorScreen2 from './src/screens/ColorScreen2';
import ColorScreen3 from './src/screens/ColorScreen3';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    New: NewScreen,
    List: ListScreen,
    Card: CardScreen,
    Counter: CounterScreen,
    CounterR: CounterScreenReducer,
    Color: ColorScreen,
    Color2: ColorScreen2,
    Color3: ColorScreen3,
    Txt: TextScreen,
    Box: BoxScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Слабоумие и отвага!"
    }
  }
);

export default createAppContainer(navigator);
