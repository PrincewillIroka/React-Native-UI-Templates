import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './coursesListStyle';
import {getIllustration, getBackground} from '../../utils';

export function CoursesList({route, navigation}) {
  const course = route?.params;

  const handleBackButton = () => {
    navigation?.goBack();
  };

  return (
    <View style={styles.coursesListContainer}>
      <View style={[styles.bgContainer, getBackground(course?.id)]}>
        <ImageBackground
          source={getIllustration(course?.id)}
          style={styles.illustrationImage}
          imageStyle={styles.illustrationBackgroundStyle}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => handleBackButton()}>
            <MaterialIcons name="keyboard-arrow-left" size={25} color="#000" />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={styles.coursesListContent}>
        <Text style={styles.coursesListTitle}>
          {course?.title} Courses List
        </Text>
        <ScrollView
          style={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}>
          <View style={styles.coursesListWrapper}>
            <View style={styles.singleCourse}>
              <ImageBackground
                source={{
                  uri:
                    'data:image/jpeg;base64,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',
                }}
                style={styles.courseImage}
                imageStyle={styles.courseBackgroundStyle}>
                <TouchableOpacity style={styles.playButton}>
                  <MaterialIcons name="play-arrow" size={25} color="#000" />
                </TouchableOpacity>
              </ImageBackground>
              <View style={styles.courseRightContainer}>
                <MaterialIcons
                  name="bookmark"
                  size={20}
                  color="#000"
                  style={styles.bookmarkIcon}
                />
                <Text>15 videos</Text>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={styles.courseInfo}>
                  Free Adobe XD Tutorial: User Experience Design Course with
                  Adobe XD Course
                </Text>
                <View style={styles.progressBarContainer}>
                  <View style={[styles.progressBarItem, {width: '30%'}]}></View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
