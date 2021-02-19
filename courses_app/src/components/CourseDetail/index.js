import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './courseDetailStyle';

export function CourseDetail({courseDetail}) {
  return (
    <View style={styles.singleCourse}>
      <ImageBackground
        source={{
          uri: courseDetail?.image,
        }}
        style={styles.courseImage}
        imageStyle={styles.courseBackgroundStyle}>
        <TouchableOpacity style={styles.playButton}>
          <MaterialIcons name="play-arrow" size={25} color="#000" />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.courseRightContainer}>
        {courseDetail?.isBookmarked ? (
          <MaterialIcons
            name="bookmark"
            size={20}
            color="#292929"
            style={styles.bookmarkIcon}
          />
        ) : (
          <MaterialIcons
            name="bookmark-border"
            size={20}
            color="#292929"
            style={styles.bookmarkIcon}
          />
        )}
        <Text>{courseDetail?.noOfVideos} videos</Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.courseInfo}>
          {courseDetail?.title}
        </Text>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBarItem, {width: `${courseDetail?.progress}%`}]}></View>
        </View>
      </View>
    </View>
  );
}
