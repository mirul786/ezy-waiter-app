import {Alert, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import SearchBar from '../component/SearchBar/SearchBar';
import Header from '../component/Header/Header';
import ProductContainer from '../component/ProductContainer/ProductContainer';
import ListStyling from '../component/ListStyling/ListStyling';

const HomeScreen = () => {
  const [numColumns, setNumColumns] = useState<number>(2); // Default number of columns
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.lists}>
        <SearchBar
          placeholder="Search your table"
          onSearchButtonPress={() => Alert.alert('Button is pressed')}
        />
        <ListStyling numColumns={numColumns} setNumColumns={setNumColumns} />
      </View>
      <ProductContainer numColumns={numColumns} setNumColumns={setNumColumns} />
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
  lists: {
    flexDirection: 'row',
    // justifyContent: "space-between",
    alignItems: 'center',
  },
});
