import React from 'react';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
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
      <Drawer.Screen name="Menu" component={TabNavigator} />
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
