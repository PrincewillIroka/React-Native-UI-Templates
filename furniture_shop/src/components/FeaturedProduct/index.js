import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './featuredProductStyle.js';

export function FeaturedProduct({furniture}) {
  return (
    <View style={styles.furnitureContainer}>
      <Image source={{uri: furniture?.image}} style={styles.furnitureImage} />
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.furnitureName}>
        {furniture?.name}
      </Text>
      <Text numberOfLines={2} ellipsizeMode="tail" style={styles.furnitureType}>
        {furniture?.type}
      </Text>
      <View style={styles.furnitureBottomRow}>
        <Text style={styles.furniturePrice}>${furniture?.price}</Text>
        <TouchableOpacity style={styles.addToCartBtn}>
          <AntDesign name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
