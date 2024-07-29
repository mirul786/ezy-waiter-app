import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView, StyleSheet,
  Text, View
} from 'react-native';
import TabNavigator from './src/navigation/TabNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DraweNavigation from './src/navigation/DraweNavigation/DraweNavigation';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();



function App(): React.JSX.Element {



  return (
    <NavigationContainer>
      <GestureHandlerRootView>
        {/* <TabNavigator /> */}
        <DraweNavigation/>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
