import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import { SecondaryButtonProps } from '../../model/ReUsableInterFace';

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  onPress,
  disabled,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, disabled && styles.disabled]}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6c757d',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  disabled: {
    backgroundColor: '#A9A9A9',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default SecondaryButton;
