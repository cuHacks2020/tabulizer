import React from 'react';
import { HomeScreen } from './screens/HomeScreen';
import { GuitarScreen } from './screens/GuitarScreen';
import { TabDisplay } from './screens/components/TabDisplay';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Guitar: GuitarScreen
}); //, {headerMode: 'none'});

export default createAppContainer(AppNavigator);