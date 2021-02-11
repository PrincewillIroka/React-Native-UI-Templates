import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {MaterialIcons} from 'react-native-vector-icons';
import styles from './appStyle';
import {CustomText} from './components';

export function Upload({navigation}) {
  return (
    <View style={styles.uploadContainer}>
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.layoutContent}>
          <View style={styles.singleCard}>
            <View style={styles.iconWrapper}>
              <MaterialIcons name="music-note" color="#fff" size={30} />
            </View>
            <CustomText
              type={1}
              text="Upload single song"
              style={styles.uploadSingleSongText}
            />
          </View>
          <View style={styles.singleCard}>
            <View style={styles.iconWrapper}>
              <MaterialIcons name="library-music" color="#fff" size={30} />
            </View>
            <CustomText
              type={1}
              text="Upload an album"
              style={styles.uploadSingleSongText}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
