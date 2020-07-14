import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from './src/context/JokeContext';
import IndexScreen from "./src/screens/IndexScreen";
import CustomJokeScreen from './src/screens/CustomJokeScreen';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    CustomJoke: CustomJokeScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Chuck Norris Truths'
    }
  }
)

const App = createAppContainer(navigator)

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}
