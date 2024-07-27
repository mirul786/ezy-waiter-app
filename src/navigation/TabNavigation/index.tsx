import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Feed from '../../screens/Feed';
import Article from '../../screens/Article';
// import DraweNavigation from "../DraweNavigation";
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../../screens/HomeScreen';

const Tab = createBottomTabNavigator();

function TabNavigator(): React.JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings-sharp' : 'settings-outline';
          } else {
            iconName = '';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Settings"
        component={Article}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
