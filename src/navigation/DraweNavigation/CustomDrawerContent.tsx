import { StyleSheet } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = props => {
  const {navigation} = props;

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
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent

const styles = StyleSheet.create({})