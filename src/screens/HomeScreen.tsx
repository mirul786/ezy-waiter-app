import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../component/SearchBar/SearchBar'
import { ScrollView } from 'react-native-gesture-handler'
import ProductCard from '../component/ProductContainer/ProductCard'
import Header from '../component/Header/Header'
// import table from '../assets/images/dinein.png';

const products = [
  {
    title: 'Fish & Chips',
    price: '$14.00',
    // imageUrl: '../assets/images/spoon.png',
  },
  {
    title: 'Atlantic Salmon',
    price: '$18.00',
    // imageUrl: table,
  },
  {
    title: 'Fish & Chips',
    price: '$14.00',
    // imageUrl: '../assets/images/spoon.png',
  },
  {
    title: 'Atlantic Salmon',
    price: '$18.00',
    // imageUrl: table,
  },
  {
    title: 'Fish & Chips',
    price: '$14.00',
    // imageUrl: '../assets/images/spoon.png',
  },
  {
    title: 'Atlantic Salmon',
    price: '$18.00',
    // imageUrl: table,
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <ScrollView contentContainerStyle={styles.productsContainer}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            // imageUrl={product.imageUrl}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default HomeScreen

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