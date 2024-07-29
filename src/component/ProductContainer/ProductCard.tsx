import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type ProductCardProps = {
  title: string;
  price: string;
  //   imageUrl: string;
};

const ProductCard: React.FC<ProductCardProps> = ({title, price}) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={require('../../assets/images/dinein.png')}
        style={styles.productImage}
      />
      <View style={styles.cardContent}>
        <Text style={styles.productTitle}>{title}</Text>
        <Text style={styles.productPrice}>{price}</Text>
        <Icon name="heart-outline" size={24} color="#000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 150,
    margin: 10,
    backgroundColor: '#FFF',
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
