import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {useQuery} from '@tanstack/react-query';
import {getTableListByFloorId} from '../../Api/StoreApi/StoreApi';

type FloorProps = {
  setSelectedFloor: any;
};

const Floor: React.FC<FloorProps> = ({setSelectedFloor}) => {
  const [floorIndex, setFloorIndex] = useState<number>(1);
  const [floorId, setFloorId] = useState<number>(1722504267959);
  const storeId = 77;
  

  useEffect(() => {
    // const floorId = floorIndex === 0 ? 1722504267959 : 1722505031073;
    if (floorIndex === 0) {
      setFloorId(1722504267959);
    } else {
      setFloorId(1722505031073);
    }
  }, [floorIndex, floorId]);

  const {isLoading, error, data} = useQuery({
    queryKey: ['tableListByFloor',floorId, storeId],
    queryFn: () => getTableListByFloorId(floorId, storeId),
  });
  const handleDropDownSelect = (itemValue: any, itemIndex: number) => {
    console.log('itemValue', itemIndex);
    setSelectedFloor(itemValue);
    setFloorIndex(itemIndex);
  };
  //   console.log('TableDataByFloor', data?.data);
  return (
    <View style={styles.container}>
      <Picker
        dropdownIconColor="#939185"
        mode="dropdown"
        selectedValue={floorIndex}
        onValueChange={(itemValue, itemIndex) =>
          handleDropDownSelect(itemValue, itemIndex)
        }>
        <Picker.Item label="Floor_1" value={data?.data} style={styles.text} />
        <Picker.Item label="Floor_2" value={data?.data} style={styles.text} />
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
