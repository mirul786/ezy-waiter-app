import {StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import products from './Products';
import ProductCard from './ProductCard';
import { SafeAreaView } from 'react-native-safe-area-context';


const ProductContainer = () => {
   const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView contentContainerStyle={styles.productsContainer}>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          price={product.price}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          // imageUrl={product.imageUrl}
        />
      ))}
    </ScrollView>
    // <SafeAreaView style={styles.productsContainer}>
    //   <FlatList
    //     data={products}
    //     renderItem={({item}) => <ProductCard title={item.title} price={item.price}/>}
    //     keyExtractor={item => item.id}
    //   />
    // </SafeAreaView>
  );
};

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

export default ProductContainer;
