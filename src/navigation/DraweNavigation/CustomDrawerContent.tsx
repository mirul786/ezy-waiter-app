import {StyleSheet} from 'react-native';
import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {LoginProps} from '../../model/AuthModel';

interface CustomDrawerContentProps
  extends DrawerContentComponentProps,
    LoginProps {}

const CustomDrawerContent: React.FC<CustomDrawerContentProps> = props => {
  const {navigation, setIsAuthenticated} = props;

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        icon={({color, size}) => (
          <AntDesign name="stepforward" color={color} size={size} />
        )}
        label={'Feed'}
        onPress={() => navigation.navigate('Feed')}
      />
      <DrawerItem
        icon={({color, size}) => (
          <AntDesign name="notification" color={color} size={size} />
        )}
        label={'Notifications'}
        onPress={() => navigation.navigate('Notifications')}
      />
      <DrawerItem
        icon={({color, size}) => (
          <AntDesign name="customerservice" color={color} size={size} />
        )}
        label={'Customer Service'}
        onPress={() => navigation.navigate('CustomerService')}
      />
      <DrawerItem
        icon={({color, size}) => (
          <AntDesign name="shoppingcart" color={color} size={size} />
        )}
        label={'Cart'}
        onPress={() => navigation.navigate('Cart')}
      />
      <DrawerItem
        icon={({color, size}) => (
          <AntDesign name="logout" color={color} size={size} />
        )}
        label={'Logout'}
        onPress={() => setIsAuthenticated && setIsAuthenticated(false)}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({});
