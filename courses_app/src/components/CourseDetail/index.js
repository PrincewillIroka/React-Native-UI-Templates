import React, {useContext} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './courseDetailStyle';
import {AuthContext} from '../../context';

export function CourseDetail({courseDetail}) {
  const {state, dispatch} = useContext(AuthContext);

  const handleBookmark = () => {
    dispatch({
      type: 'addBookmark',
      payload: {courseDetail},
    });
  };

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
        <TouchableOpacity onPress={() => handleBookmark()}>
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
        </TouchableOpacity>
        <Text>{courseDetail?.noOfVideos} videos</Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.courseInfo}>
          {courseDetail?.title}
        </Text>
        <View style={styles.progressBarContainer}>
          <View
            style={[
              styles.progressBarItem,
              {width: `${courseDetail?.progress}%`},
            ]}></View>
        </View>
      </View>
    </View>
  );
}
