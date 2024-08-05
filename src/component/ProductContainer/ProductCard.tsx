import {useNavigation, NavigationProp} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Feed from '../../screens/Feed';
import {DrawerNavigatorParamList} from '../../navigation/types';
import ModalComponent from '../Modal/ModalComponent';
import Toast from 'react-native-toast-message';

type ProductCardProps = {
  title: string;
  price: string;
  url: string;
  productId: number;
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  url,
  productId,
  modalVisible,
  setModalVisible,
}) => {
  const navigation = useNavigation<NavigationProp<DrawerNavigatorParamList>>();
  const addToCartHandler = () => {
    // Your logic to add the product to the cart
    console.log(`added to cart`);
    Toast.show({
      type: 'success',
      text1: 'Added to cart',
    });
    setModalVisible(false); // Optionally close the modal after adding to cart
    navigation.navigate('Cart');
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible && setModalVisible(true)}
        activeOpacity={0.6}
        delayLongPress={500}>
        <View style={styles.cardContainer}>
          <Image
            // source={require('../../assets/images/png/burger.jpg')}
            source={{uri: url}}
            style={styles.productImage}
          />
          <View style={styles.cardContent}>
            <Text style={styles.productTitle}>{title}</Text>
            <Text style={styles.productPrice}>
              {'₹'}
              {price}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <ModalComponent
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        url={url}
        productId={productId}
        text="Add to Cart"
        onPress={addToCartHandler} // Pass the onPress handler
      />
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 150,
    margin: 10,
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 1},
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 100,
  },
  cardContent: {
    padding: 10,
  },
  productTitle: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
});

export default ProductCard;
