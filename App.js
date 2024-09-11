/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import StackNavigator from './src/navigators/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Store from './src/redux/Store';
import FlashMessage from "react-native-flash-message";

const App = () => {
  return (
    <Provider store={Store}>
  <NavigationContainer>
  <FlashMessage position="top" />
  <StackNavigator></StackNavigator>
  </NavigationContainer>
  </Provider>
  )
  ;
};

export default App;
