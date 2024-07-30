import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SearchBar from '../component/SearchBar/SearchBar';
import Header from '../component/Header/Header';
import ProductContainer from '../component/ProductContainer/ProductContainer';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar
        placeholder="Search your product"
        onSearchButtonPress={() => Alert.alert('Button is pressed')}
      />
      <ProductContainer />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
