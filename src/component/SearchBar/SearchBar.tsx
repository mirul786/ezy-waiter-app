import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { SearchBarProps } from 'react-native-screens';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBar: React.FC<SearchBarProps> = ({placeholder}) => {
  return (
    <View style={styles.searchBarContainer}>
      <Icon name="search" size={20} color="green" />
      <TextInput placeholder= {placeholder} style={styles.searchInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 1},
    elevation: 3,
    width: "75%",
    height: 50
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: '#939185',
  },
});

export default SearchBar;
