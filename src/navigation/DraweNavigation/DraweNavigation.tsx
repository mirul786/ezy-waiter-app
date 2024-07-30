// src/navigation/DraweNavigation/DraweNavigation.tsx
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Feed from '../../screens/Feed';
import Article from '../../screens/Article';
import TabNavigator from '../TabNavigation';
import CustomDrawerContent from './CustomDrawerContent';
import CustomerService from '../../screens/CustomerService';
import LoginScreen from '../../screens/LoginScreen';
import {LoginProps} from '../../model/AuthModel';

const Drawer = createDrawerNavigator();

const DraweNavigation: React.FC<LoginProps> = ({
  setIsAuthenticated,
}): React.JSX.Element => {
  return (
    <Drawer.Navigator
      initialRouteName="Menu"
      drawerContent={props => (
        <CustomDrawerContent
          {...props}
          setIsAuthenticated={setIsAuthenticated}
        />
      )}>
      <Drawer.Screen name="Menu" component={TabNavigator} />
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Notifications" component={Article} />
      <Drawer.Screen name="CustomerService" component={CustomerService} />
      <Drawer.Screen name="LoginScreen" component={LoginScreen} />
      {/* <Drawer.Screen name="LoginScreen" options={{headerShown: false}}>
        {props => (
          <LoginScreen {...props} setIsAuthenticated={setIsAuthenticated} />
        )}
      </Drawer.Screen> */}
    </Drawer.Navigator>
  );
};

export default DraweNavigation;
