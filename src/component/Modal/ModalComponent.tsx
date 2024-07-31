import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import ViewProductDetails from '../ProductContainer/ViewProductDetails';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface ModalComponentProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  text: string;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  modalVisible,
  setModalVisible,
  text,
}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.closeButton}>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>
                  <AntDesign name="closecircleo" color={'black'} size={30} />
                </Text>
              </Pressable>
            </View>
            <ViewProductDetails />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              // onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>{text}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative', // Make sure the modalView has relative positioning
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 20,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ModalComponent;
