import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const QuantityHandler = () => {
  const [number, setNumber] = useState(1);

  const plusButtonHandler = () => {
    if (number < 9) {
      setNumber(number + 1);
    }
  };

  const minusButtonHandler = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  const inputHandler = (text: string) => {
    const number = parseInt(text, 10);
    if (!isNaN(number) && number >= 1 && number <= 9) {
      setNumber(number);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TouchableOpacity
          onPress={plusButtonHandler}
          disabled={number === 9}
          style={[
            styles.button,
            styles.buttonLeft,
            number === 9 && styles.buttonDisabled,
          ]}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={String(number)}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={inputHandler}
        />
        <TouchableOpacity
          onPress={minusButtonHandler}
          disabled={number === 1}
          style={[
            styles.button,
            styles.buttonRight,
            number === 1 && styles.buttonDisabled,
          ]}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderRadius: 2,
    borderColor: 'lightgrey',
    borderWidth: 1,
    paddingVertical: 3,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  buttonLeft: {
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
  },
  buttonRight: {
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
  buttonDisabled: {
    backgroundColor: '#f0f0f0',
  },
  buttonText: {
    fontSize: 24,
    color: '#58595B',
  },
  input: {
    textAlign: 'center',
    fontSize: 20,
    borderColor: 'lightgrey',
    borderWidth: 1,
    paddingVertical: 5,
    backgroundColor: 'white',
    color: "black",
    width: 40,
  },
});

export default QuantityHandler;
