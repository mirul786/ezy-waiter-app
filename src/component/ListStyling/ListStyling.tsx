import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import ListIcon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

type ListStylingProps = {
  numColumns: number;
  setNumColumns: (numColumns: number) => void;
};

const ListStyling: React.FC<ListStylingProps> = ({setNumColumns}) => {
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity onPress={() => setNumColumns(2)}>
        <Icon name="appstore1" size={20} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setNumColumns(1)}>
        <ListIcon name="menu-sharp" size={20} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

export default ListStyling;

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 5,
  },
});
