import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  //   Picker,
} from 'react-native';
import QuantityHandler from '../Modal/QuantityHandler';

const ViewProductDetails = () => {
  const [quantity, setQuantity] = useState('1');

  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/png/burger.jpg')}
          style={styles.productImage}
        />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.productTitle}>Classic Hamburger</Text>
        <Text style={styles.productDescription}>
          A half pound of flame broiled angus beef served with french fries
        </Text>
        {/* <Text style={styles.productPrice}>$10.00</Text>
        <Text style={styles.quantityLabel}>Quantity</Text> */}
      </View>
      <View style={styles.handleItem}>
        <Text style={styles.quantityLabel}>Price</Text>
        <Text style={styles.productPrice}>$10.00</Text>
      </View>
      <View style={styles.handleItem}>
        <Text style={styles.quantityLabel}>Quantity</Text>
        <QuantityHandler />
      </View>
      <View style={styles.handleItem}>
        <Text style={styles.quantityLabel}>Size</Text>
        <Text style={styles.itemSize}>Regular</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    // marginTop: 5,
  },
  imageContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  productImage: {
    width: '50%',
    height: 100,
    alignItems: 'center',
  },
  cardContent: {
    padding: 10,
  },
  productTitle: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 20,
    color: '#00f',
    fontWeight: 'bold',
    paddingRight: 20,
    // marginBottom: 10,
  },
  handleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityLabel: {
    fontSize: 20,
    color: '#666',
    paddingTop: 10,
  },
  itemSize: {
    fontSize: 20,
    color: '#666',
    paddingTop: 10,
    paddingRight: 15,
  },
});

export default ViewProductDetails;
