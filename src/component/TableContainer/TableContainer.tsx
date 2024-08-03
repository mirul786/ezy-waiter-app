import {StyleSheet, Text, View} from 'react-native';
import React, { useContext } from 'react';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
// import Tables from './Tables';
import TableCard from './TableCard';
import { useQuery } from '@tanstack/react-query';
import { getTableList } from '../../Api/StoreApi/StoreApi';
import { UserContext } from '../../ContextApi/UserContext';

const TableContainer = () => {
  const storeId = 77;
  const {user} = useContext(UserContext);

  console.log('My user', user);

  const {isLoading, error, data} = useQuery({
    queryKey: ['tables', storeId],
    queryFn: () => getTableList(storeId),
  });
  // console.log("TableData", data?.data)
  return (
    // <ScrollView contentContainerStyle={styles.productsContainer}>
    //   {tables.map((product, index) => (
    //     <TableCard
    //       key={index}
    //       title={product.title}
    //       price={product.price}
    //       // imageUrl={product.imageUrl}
    //     />
    //   ))}
    // </ScrollView>
    <SafeAreaView style={styles.productsContainer}>
      <FlatList
        data={data?.data}
        renderItem={({item}) => (
          <TableCard title={item.title} price={item.price} />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
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
