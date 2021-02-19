import React, {useContext} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import shortid from 'shortid';
import styles from './coursesListStyle';
import {getIllustration, getBackground} from '../../utils';
import {AuthContext} from '../../context';
import {CourseDetail} from '../../components';

export function CoursesList({route, navigation}) {
  const course = route?.params;

  const {state, dispatch} = useContext(AuthContext);

  const handleBackButton = () => {
    navigation?.goBack();
  };

  const renderCourseList = ({item}) => {
    return <CourseDetail courseDetail={item} />;
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
        <FlatList
          data={state?.courses}
          keyExtractor={() => shortid.generate()}
          renderItem={renderCourseList}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.sectionScrollContainer}
        />
      </View>
    </View>
  );
}
