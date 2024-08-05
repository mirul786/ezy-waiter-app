import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {useQuery} from '@tanstack/react-query';
import {getTableListByFloorId} from '../../Api/StoreApi/StoreApi';

const Floor = () => {
  const [selectedFloor, setSelectedFloor] = useState();
  const storeId = 77;
  const floorId = 1722504267959;

  const {isLoading, error, data} = useQuery({
    queryKey: ['tableListByFloor', storeId],
    queryFn: () => getTableListByFloorId(floorId, storeId),
  });
  const handleDropDownSelect = (itemValue: any) => {
    console.log("itemValue",itemValue)
  };
//   console.log('TableDataByFloor', data?.data);
  return (
    <View style={styles.container}>
      <Picker
        dropdownIconColor="#939185"
        mode="dropdown"
        selectedValue={selectedFloor}
        onValueChange={(itemValue, itemIndex) =>
          handleDropDownSelect(itemValue)
        }>
        <Picker.Item label="Floor_1" value={data?.data} style={styles.text} />
        <Picker.Item label="Floor_2" value="js" style={styles.text} />
      </Picker>
    </View>
  );
};

export default Floor;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    marginLeft: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 1},
    elevation: 3,
    width: '40%',
    height: 40,
  },
  text: {
    color: '#939185',
  },
});
