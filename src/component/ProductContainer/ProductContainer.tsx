import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import products from './Products';
import ProductCard from './ProductCard';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useQuery} from '@tanstack/react-query';
import {getProductList} from '../../Api/StoreApi/StoreApi';

type ProductContainerProps = {
  numColumns: number;
  setNumColumns: (numColumns: number) => void;
};

const ProductContainer: React.FC<ProductContainerProps> = ({numColumns}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const storeId = 77;

  const {isLoading, error, data} = useQuery({
    queryKey: ['tables', storeId],
    queryFn: () => getProductList(storeId),
  });

  console.log('ProductData', data?.data);
  return (
    <SafeAreaView style={styles.productsContainer}>
      <FlatList
        data={data?.data?.product}
        renderItem={({item}) => (
          <ProductCard
            title={item.productName}
            price={item.sellingPrice}
            url={item.imageUrl}
            productId={item?.productId}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        )}
        keyExtractor={item => item.productId}
        numColumns={numColumns}
        key={`${numColumns}-${products.length}`} // Change key when numColumns changes
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

export default ProductContainer;
