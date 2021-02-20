import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './newProductStyle.js';

export function NewProduct({furniture, onNavigate}) {
  return (
    <View style={styles.furnitureContainer}>
      <TouchableOpacity
        onPress={() => onNavigate('ProductDetail', furniture)}
        style={styles.furnitureImageWrapper}>
        <Image source={{uri: furniture?.image}} style={styles.furnitureImage} />
      </TouchableOpacity>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.furnitureName}>
        {furniture?.name}
      </Text>
    </View>
  );
}
