import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function CustomerService(): React.JSX.Element {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.articleContainer}>Customer Service Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  articleContainer: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CustomerService;