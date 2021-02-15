import * as React from 'react';
import {View, TouchableOpacity, ScrollView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './uploadStyle.js';
import {CustomText} from '../../components';
import {NavDrawerHeader} from '../../components';

export function Upload({navigation}) {
  return (
    <View style={styles.uploadContainer}>
      <NavDrawerHeader navigation={navigation} />
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.layoutContent}>
          <TouchableOpacity style={styles.singleCard}>
            <View style={styles.iconWrapper}>
              <MaterialIcons name="music-note" color="#fff" size={30} />
            </View>
            <CustomText
              type={1}
              text="Upload single song"
              style={styles.uploadSingleSongText}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.singleCard}>
            <View style={styles.iconWrapper}>
              <MaterialIcons name="library-music" color="#fff" size={30} />
            </View>
            <CustomText
              type={1}
              text="Upload an album"
              style={styles.uploadSingleSongText}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
