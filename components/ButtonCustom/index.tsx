import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({label, color = 'purple', onPress}) => {
  return (
    <TouchableOpacity
      style={styles.button(color)}
      activeOpacity={0.5}
      onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: color,
    padding: 15,
    borderRadius: 25,
    marginTop: 20,
    alignItems: 'center',
  }),
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
