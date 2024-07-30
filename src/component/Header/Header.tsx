import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
      </View>
      <View style={styles.banner}>
        <Image
          source={require('../../assets/images/png/waiterLogo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Waiter Application</Text>
        <View style={styles.subtitle}>
          {/* <Icon name="cart-outline" size={30} color="#000" /> */}
          <Text>Delight in Every Bite</Text>
          {/* <Icon name="person-outline" size={30} color="#000" /> */}
        </View>
      </View>
      <View>
        {/* <Cart /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#FFA500',
    height: 150,
  },
  headerCenter: {
    alignItems: 'center',
    flex: 1,
  },
  banner: {
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 70,
    borderRadius: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000',
  },
  subtitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 80,
  },
});

export default Header;
