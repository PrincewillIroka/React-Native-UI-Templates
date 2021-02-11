import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function CustomText({type, text, size, style}) {
  return (
    <Text
      style={[type === 1 ? styles.colorOne : styles.colorTwo, style]}
      numberOfLines={1}
      ellipsizeMode="tail">
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  colorOne: {
    color: '#c3c3c6',
  },
  colorTwo: {
    color: '#8d8d8d',
  },
});
