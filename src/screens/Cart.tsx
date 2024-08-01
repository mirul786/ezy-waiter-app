import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
  TextInput,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import QuantityHandler from '../component/Modal/QuantityHandler';

const Cart = () => {
  const [products, setProducts] = useState([
    {id: 1, name: 'Cold coffee', price: 120, discountedPrice: 60, quantity: 2},
    {id: 2, name: 'Smart Watch', price: 600, discountedPrice: 600, quantity: 1},
    {
      id: 3,
      name: 'Product-Red-500',
      price: 80,
      discountedPrice: 80,
      quantity: 1,
    },
  ]);

  const [paymentMode, setPaymentMode] = useState('Cash');
  const [additionalDiscount, setAdditionalDiscount] = useState(0);

  const incrementQuantity = (id: number) => {
    setProducts(
      products.map(product =>
        product.id === id
          ? {...product, quantity: product.quantity + 1}
          : product,
      ),
    );
  };

  const decrementQuantity = (id: number) => {
    setProducts(
      products.map(product =>
        product.id === id && product.quantity > 0
          ? {...product, quantity: product.quantity - 1}
          : product,
      ),
    );
  };

  const renderProduct = (item: any) => (
    <View style={styles.productContainer}>
      <Image
        source={require('../assets/images/png/burger.jpg')}
        style={styles.productImage}
      />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{'Cold coffee'}</Text>
        <Text style={styles.productPrice}>₹{'60'}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <QuantityHandler />
        <Text style={styles.quantityText}>{item.quantity}</Text>
      </View>
    </View>
  );

  const totalItems = products.reduce(
    (sum, product) => sum + product.quantity,
    0,
  );
  const totalAmount = products.reduce(
    (sum, product) => sum + product.quantity * product.discountedPrice,
    0,
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id.toString()}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>
          Customer: Guest <Text style={styles.link}>change</Text>
        </Text>
        <Text style={styles.productName}>
          Sales Executive: Admin <Text style={styles.link}>change</Text>
        </Text>
        <Text style={styles.tax}>Tax: ₹86.40</Text>
        <Text style={styles.discount}>Discount: ₹0</Text>
      </View>
      <View style={styles.discountContainer}>
        <Text style={styles.productName}>Apply additional discount</Text>
        <View style={styles.discountInputContainer}>
          <TextInput
            style={styles.discountInput}
            placeholder="Flat discount"
            keyboardType="numeric"
          />
          <View style={styles.discountTypeContainer}>
            <Text>%</Text>
            <Text>₹</Text>
          </View>
        </View>
        <Text>₹{additionalDiscount}</Text>
      </View>
      <View style={styles.summaryContainer}>
        <Text style={styles.productName}>Item: {products.length}</Text>
        <Text style={styles.productName}>Quantity: {totalItems}</Text>
        <Text style={styles.productName}>Total: ₹{totalAmount + 86.4}</Text>
      </View>
      <View style={styles.paymentContainer}>
        <View style={styles.paymentButtonsContainer}>
          <Pressable style={styles.clearCartButton}>
            <Text style={styles.clearCartButtonText}>Clear Cart</Text>
          </Pressable>
          <Pressable style={styles.fastPayButton}>
            <Text style={styles.fastPayButtonText}>FastPay</Text>
          </Pressable>
        </View>
      </View>
      <Pressable style={styles.holdButton}>
        <Text style={styles.holdButtonText}>Put On Hold</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 5,
  },
  productImage: {
    width: 50,
    height: 50,
  },
  productDetails: {
    flex: 1,
    marginLeft: 10,
    color: 'black',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  productPrice: {
    color: 'gray',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    padding: 5,
    backgroundColor: '#ddd',
    borderRadius: 3,
  },
  quantityButtonText: {
    fontSize: 16,
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  infoContainer: {
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 5,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginLeft: 10
  },
  tax: {
    color: 'red',
  },
  discount: {
    color: 'green',
  },
  discountContainer: {
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 5,
  },
  discountInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  discountInput: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
    marginRight: 5,
    backgroundColor: "gray"
  },
  discountTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  summaryContainer: {
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 5,
  },
  paymentContainer: {
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 5,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  paymentButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  clearCartButton: {
    flex: 1,
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 3,
    alignItems: 'center',
    marginRight: 5,
  },
  clearCartButtonText: {
    fontSize: 16,
  },
  fastPayButton: {
    flex: 1,
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 3,
    alignItems: 'center',
    marginLeft: 5,
  },
  fastPayButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  holdButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  holdButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Cart;
