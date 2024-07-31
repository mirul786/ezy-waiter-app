import {useNavigation, NavigationProp} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Feed from '../../screens/Feed';
import {DrawerNavigatorParamList} from '../../navigation/types';
import ModalComponent from '../Modal/ModalComponent';

type ProductCardProps = {
  title: string;
  price: string;
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  modalVisible,
  setModalVisible,
}) => {
  const navigation = useNavigation<NavigationProp<DrawerNavigatorParamList>>();
  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible && setModalVisible(true)}>
        <View style={styles.cardContainer}>
          <Image
            source={require('../../assets/images/png/burger.jpg')}
            style={styles.productImage}
          />
          <View style={styles.cardContent}>
            <Text style={styles.productTitle}>{title}</Text>
            <Text style={styles.productPrice}>{price}</Text>
            <Icon name="heart-outline" size={24} color="#000" />
          </View>
        </View>
      </TouchableOpacity>
      <ModalComponent
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        text='Add to Cart'
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
