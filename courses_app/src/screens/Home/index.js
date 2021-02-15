import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import shortid from 'shortid';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './homeStyle.js';
import FriesMenu from '../../assets/icons/FriesMenu.png';
import ProfilePhoto from '../../assets/photos/photo-1494790108377-be9c29b29330.jpg';
import {getIllustration, getBackground} from '../../utils';

export function Home({navigation}) {
  const courses = [
    {
      id: 0,
      title: 'UX Design',
      number: 36,
      isTrendy: false,
      isBestRated: true,
    },
    {
      id: 1,
      title: 'Photoshop',
      number: 22,
      isTrendy: true,
      isBestRated: true,
    },
    {
      id: 2,
      title: 'Illustrator',
      number: 40,
      isTrendy: true,
      isBestRated: false,
    },
    {
      id: 3,
      title: 'Development',
      number: 55,
      isTrendy: true,
      isBestRated: true,
    },
  ];

  const [state, setState] = useState({
    username: 'Georgina',
    tabs: ['New', 'Trendy', 'Best rated'],
    activeTab: 'New',
    displayedCourses: courses,
  });

  const handleTabPress = (tab, index) => {
    let {activeTab, displayedCourses} = state;
    activeTab = tab;

    if (index === 0) {
      displayedCourses = courses;
    } else if (index === 1) {
      displayedCourses = courses?.filter((course) => course.isTrendy);
    } else if (index === 2) {
      displayedCourses = courses?.filter((course) => course.isBestRated);
    }

    setState({...state, activeTab, displayedCourses});
  };

  const handleNavigation = (route, params) => {
    navigation?.navigate(route, params);
  };

  return (
    <View style={styles.homeContainer}>
      <View style={styles.homeContent}>
        <View style={styles.headerContainer}>
          <Image source={FriesMenu} />
          <Image source={ProfilePhoto} style={styles.profilePhotoImage} />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>Hi</Text>
          <Text style={styles.usernameText}>{state?.username}</Text>
        </View>
        <Text style={styles.learnText}>Learn new Skills today!</Text>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={23} color="#808080" />
          <TextInput
            placeholder="Search for a course"
            style={styles.searchInput}
          />
          <TouchableOpacity style={styles.dropdownContainer}>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={23}
              color="#808080"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.tabHeaderContainer}>
          {state?.tabs?.map((tab, index) => (
            <TouchableOpacity
              key={shortid.generate()}
              style={styles.singleTab}
              onPress={() => handleTabPress(tab, index)}>
              <Text
                style={[
                  styles.tabText,
                  state?.activeTab === tab
                    ? styles.activeTabText
                    : styles.inActiveTabText,
                ]}>
                {tab}
              </Text>
              {state?.activeTab === tab ? (
                <View style={styles.activeTabBottom}></View>
              ) : null}
            </TouchableOpacity>
          ))}
        </View>
        <ScrollView
          style={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}>
          <View style={styles.tabBodyContainer}>
            {state?.displayedCourses?.map((course, index) => (
              <TouchableOpacity
                key={shortid.generate()}
                style={[
                  styles.courseContainer,
                  index % 2
                    ? styles.courseLongHeight
                    : styles.courseShortHeight,
                  getBackground(course?.id),
                ]}
                onPress={() => handleNavigation('CoursesList', course)}>
                <ImageBackground
                  source={getIllustration(course?.id)}
                  style={styles.illustrationImage}
                  imageStyle={styles.backgroundStyle}>
                  <View style={styles.transparentBg}>
                    <Text style={styles.courseTitletext}>{course?.title}</Text>
                    <Text style={styles.courseNumbertext}>
                      {course?.number}
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
