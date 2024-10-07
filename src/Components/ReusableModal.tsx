import React from 'react';
import {View, Text, Modal, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { vh,vw} from '../utils/dimension';

type ReusableModalProps = {
  showModal: boolean;
  toggleModal: () => void;
  option1Text: string;
  option2Text: string;
  option3Text: string;
  option1Img: any;
  option2Img: any;
  option3Img: any;
  option1Action?: () => void;
  option2Action?: () => void;
};

const ReusableModal: React.FC<ReusableModalProps> = ({
  showModal,
  toggleModal,
  option1Text,
  option2Text,
  option3Text,
  option1Img,
  option2Img,
  option3Img,
  option1Action,
  option2Action,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={toggleModal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.modalOption} onPress={option1Action}>
            <Image source={option1Img} style={styles.optionImg} />
            <Text style={styles.modalOptionText}>{option1Text}</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity style={styles.modalOption} onPress={option2Action}>
            <Image source={option2Img} style={styles.optionImg} />
            <Text style={styles.modalOptionText}>{option2Text}</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity style={styles.modalOption} onPress={toggleModal}>
            <Image source={option3Img} style={styles.optionImg} />
            <Text style={styles.modalOptionText}>{option3Text}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ReusableModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: vw(393),
    height: vh(272),
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: 'white',
    alignItems:'center',
  },
  separator: {
    width: vw(345),
    borderWidth: 1,
    borderColor: '#E6E9EE',
    marginTop:8,
  },
  modalOption: {
    width: vw(345),
    height: vh(48),
    borderRadius: 16,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    marginTop: vh(10),
  },
  modalOptionText: {
    fontSize: 18,
    fontWeight:'400',
    textAlign: 'center',
    color: '#000000',
    marginLeft:vw(16),
  },
  optionImg: {
    width: vw(24),
    height: vh(24),
  },
});
