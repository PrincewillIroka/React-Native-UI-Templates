import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import shortid from 'shortid';
import styles from './homeStyle.js';
import UXImage from '../../assets/illustrations/3647007.png';
import PSImage from '../../assets/illustrations/4991639.png';
import DVImage from '../../assets/illustrations/9814.png';
import IlImage from '../../assets/illustrations/Wavy_Bus-35_Single-03.png';

export function Home() {
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
    username: 'Ramjan',
    tabs: ['New', 'Trendy', 'Best rated'],
    activeTab: 'New',
    displayedCourses: courses,
  });

  const getBackgroundByIndex = (id) => {
    return id === 0
      ? styles.bg0
      : id === 1
      ? styles.bg1
      : id === 2
      ? styles.bg2
      : styles.bg3;
  };

  const getIllustration = (id) => {
    return id === 0
      ? UXImage
      : id === 1
      ? PSImage
      : id === 2
      ? IlImage
      : DVImage;
  };

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

  return (
    <View style={styles.homeContainer}>
      <View style={styles.homeContent}>
        <Text style={styles.usernameText}>Hey {state?.username}</Text>
        <Text style={styles.learnText}>Learn new Skills today!</Text>
        <View style={styles.searchContainer}>
          <TextInput />
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
        <ScrollView style={styles.scrollViewContent}>
          <View style={styles.tabBodyContainer}>
            {state?.displayedCourses?.map((course, index) => (
              <TouchableOpacity
                key={shortid.generate()}
                style={[
                  styles.courseContainer,
                  index % 2
                    ? styles.courseLongHeight
                    : styles.courseShortHeight,
                  getBackgroundByIndex(course?.id),
                ]}>
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
