import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import tables from './Tables';
import TableCard from './TableCard';

const TableContainer = () => {
  return (
    <ScrollView contentContainerStyle={styles.productsContainer}>
      {tables.map((product, index) => (
        <TableCard
          key={index}
          title={product.title}
          price={product.price}
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

export default TableContainer;
