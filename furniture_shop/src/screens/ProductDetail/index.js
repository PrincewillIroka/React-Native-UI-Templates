import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './productDetailStyle';
import {AuthContext} from '../../context';

export function ProductDetail({route, navigation}) {
  const {state, dispatch} = useContext(AuthContext);

  const handleBackButton = () => {
    navigation?.goBack();
  };

  return (
    <View style={styles.productDetailContainer}>
      <View style={styles.productDetailContent}>
        <View style={styles.productDetailHeader}>
          <TouchableOpacity
            style={styles.productDetailCircleContainer}
            onPress={() => handleBackButton()}>
            <MaterialIcons name="arrow-back-ios" size={18} color="#333333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.productDetailCircleContainer}>
            <MaterialCommunityIcons
              name="cart-outline"
              size={20}
              color="#333333"
            />
            <Text style={styles.noInCartText}>{state?.cart?.length}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
