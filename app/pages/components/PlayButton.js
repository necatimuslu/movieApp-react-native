import React from 'react';
import {Pressable, Text, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const dimension = Dimensions.get('screen');
const PlayButton = ({handlePress}) => {
  return (
    <Pressable onPress={() => handlePress()} style={styles.button}>
      <Icon name={'caret-forward-outline'} size={30} color="#fff" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignContent: 'center',
    borderRadius: 50,
    width: 50,
    padding: 10,
    backgroundColor: '#4481FC',
  },
});

export default PlayButton;
