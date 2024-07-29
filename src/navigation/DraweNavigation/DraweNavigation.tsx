import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feed from '../../screens/Feed';
import Article from '../../screens/Article';
import TabNavigator from '../TabNavigation';
import CustomDrawerContent from './CustomDrawerContent';

const Drawer = createDrawerNavigator();



const DraweNavigation: React.FC = (): React.JSX.Element => {
  return (
    <Drawer.Navigator
      initialRouteName="Tab"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Tab" component={TabNavigator} />
      <Drawer.Screen
        name="Feed"
        component={Feed}
        options={{drawerLabel: 'Homes'}}
      />
      <Drawer.Screen
        name="Notifications"
        component={Article}
        options={{drawerLabel: 'Updates'}}
      />
    </Drawer.Navigator>
  );
};

export default DraweNavigation;
