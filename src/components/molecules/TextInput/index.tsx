import React from 'react';
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps,
  View,
  Text,
} from 'react-native';

interface CustomTextInputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: object;
  inputStyle?: object;
  labelStyle?: object;
  errorStyle?: object;
}

const TextInput: React.FC<CustomTextInputProps> = ({
  label,
  error,
  containerStyle,
  inputStyle,
  labelStyle,
  errorStyle,
  ...rest
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <RNTextInput style={[styles.input, inputStyle]} {...rest} />
      {error && <Text style={[styles.error, errorStyle]}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});

export default TextInput;
