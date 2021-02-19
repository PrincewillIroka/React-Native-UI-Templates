import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './newProductStyle.js';

export function NewProduct({furniture}) {
  return (
    <View style={styles.furnitureContainer}>
      <Image source={{uri: furniture?.image}} style={styles.furnitureImage} />
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.furnitureName}>
        {furniture?.name}
      </Text>
    </View>
  );
}
