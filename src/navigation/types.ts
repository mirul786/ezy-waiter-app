// src/navigation/types.ts
import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParamList = {
  LoginScreen: undefined;
  Feed: undefined;
  // Add other screens here
};

export type DrawerNavigatorParamList = {
  Menu: NavigatorScreenParams<RootStackParamList>;
  Feed: undefined;
  Notifications: undefined;
  CustomerService: undefined;
  LoginScreen: undefined;
};
