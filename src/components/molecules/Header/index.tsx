import React from 'react';
import {View, Text, StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface HeaderProps {
  title: string;
  subtitle?: string;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  containerStyle,
  titleStyle,
  subtitleStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {subtitle ? (
        <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
});

export default Header;
