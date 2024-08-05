import {StyleSheet} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import TableCard from './TableCard';
import {useQuery} from '@tanstack/react-query';
import {getTableList} from '../../Api/StoreApi/StoreApi';

type TableContainerProps = {
  numColumns: number;
  setNumColumns: (numColumns: number) => void;
  selectedFloor: any;
};

const TableContainer: React.FC<TableContainerProps> = ({numColumns, selectedFloor}) => {
  const storeId = 77;

  const {isLoading, error, data} = useQuery({
    queryKey: ['tables', storeId],
    queryFn: () => getTableList(storeId),
  });
  // console.log('TableData', data?.data);
  return (
    <SafeAreaView style={styles.productsContainer}>
      <FlatList
        data={selectedFloor === undefined ? data?.data : selectedFloor}
        renderItem={({item}) => (
          <TableCard
            title={item.tableName}
            seatingCapacity={item.seatingCapacityCount}
          />
        )}
        keyExtractor={item => item.tableId.toString()}
        numColumns={numColumns}
        key={`${numColumns}-${data?.data.length}`} // Change key when numColumns changes
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
