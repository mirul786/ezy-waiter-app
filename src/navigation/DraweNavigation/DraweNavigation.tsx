import React from 'react';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import Feed from '../../screens/Feed';
import Article from '../../screens/Article';
import TabNavigator from '../TabNavigation';
import CustomDrawerContent from './CustomDrawerContent';
import CustomerService from '../../screens/CustomerService';

const Drawer = createDrawerNavigator();



const DraweNavigation: React.FC = (): React.JSX.Element => {
  return (
    <Drawer.Navigator
      initialRouteName="Menu"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Menu" component={TabNavigator} />
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Notifications" component={Article} />
      <Drawer.Screen name="CustomerService" component={CustomerService} />
    </Drawer.Navigator>
  );
};

export default DraweNavigation;
