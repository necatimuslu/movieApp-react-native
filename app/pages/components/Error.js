import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Error = ({errorText, errorText2}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{errorText}</Text>
      <Text style={styles.text}>{errorText2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});
export default Error;
