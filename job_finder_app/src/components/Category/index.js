import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import styles from './categoryStyle.js';

export function Category({category}) {
  return (
    <TouchableOpacity style={styles.categoryContainer}>
      <Image source={{uri: category?.image}} style={styles.categoryImage} />
      <Text style={styles.categoryTitle} numberOfLines={1} ellipsizeMode="tail">
        {category?.title}
      </Text>
      <Text
        style={styles.categoryNoOfJobs}
        numberOfLines={1}
        ellipsizeMode="tail">
        {category?.noOfJobs} Jobs
      </Text>
    </TouchableOpacity>
  );
}
