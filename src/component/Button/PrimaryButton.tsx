import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {PrimaryButtonProps} from '../../model/ReUsableInterFace';

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onPress,
  disabled,
  loading,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[styles.button, (disabled || loading) && styles.disabled]}>
      <View style={styles.textContainer}>
        {loading ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
          <Text style={styles.text}>{children}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00BFFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 24,
  },
  disabled: {
    backgroundColor: '#A9A9A9',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default PrimaryButton;
