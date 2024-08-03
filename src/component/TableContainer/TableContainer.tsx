import {StyleSheet, Text, View} from 'react-native';
import React, { useContext } from 'react';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import TableCard from './TableCard';
import { useQuery } from '@tanstack/react-query';
import { getTableList } from '../../Api/StoreApi/StoreApi';

const TableContainer = () => {
  const storeId = 77;

  const {isLoading, error, data} = useQuery({
    queryKey: ['tables', storeId],
    queryFn: () => getTableList(storeId),
  });
  console.log("TableData", data?.data)
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
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data?.data}
        renderItem={({item}) => (
          <TableCard
            title={item.tableName}
            seatingCapacity={item.seatingCapacityCount}
          />
        )}
        keyExtractor={item => item.tableId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default TableContainer;
