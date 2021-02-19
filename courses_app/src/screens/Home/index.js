import React, {useState, useContext} from 'react';
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
import {AuthContext} from '../../context';

const categories = [
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

export function Home({navigation}) {
  const {state, dispatch} = useContext(AuthContext);

  const [data, setData] = useState({
    tabs: ['New', 'Trendy', 'Best rated'],
    activeTab: 'New',
    displayedCategories: categories,
  });

  const handleTabPress = (tab, index) => {
    let {activeTab, displayedCategories} = data;
    activeTab = tab;

    if (index === 0) {
      displayedCategories = categories;
    } else if (index === 1) {
      displayedCategories = categories?.filter((category) => category.isTrendy);
    } else if (index === 2) {
      displayedCategories = categories?.filter(
        (category) => category.isBestRated,
      );
    }

    setData({...data, activeTab, displayedCategories});
  };

  const handleNavigation = (route, params) => {
    navigation?.navigate('SingleStack', {screen: route, params});
  };

  const handleDrawer = () => {
    navigation?.openDrawer();
  };

  return (
    <View style={styles.homeContainer}>
      <View style={styles.homeContent}>
        <TouchableOpacity
          style={styles.headerContainer}
          onPress={() => handleDrawer()}>
          <Image source={FriesMenu} />
          <Image source={ProfilePhoto} style={styles.profilePhotoImage} />
        </TouchableOpacity>
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
          {data?.tabs?.map((tab, index) => (
            <TouchableOpacity
              key={shortid.generate()}
              style={styles.singleTab}
              onPress={() => handleTabPress(tab, index)}>
              <Text
                style={[
                  styles.tabText,
                  data?.activeTab === tab
                    ? styles.activeTabText
                    : styles.inActiveTabText,
                ]}>
                {tab}
              </Text>
              {data?.activeTab === tab ? (
                <View style={styles.activeTabBottom}></View>
              ) : null}
            </TouchableOpacity>
          ))}
        </View>
        <ScrollView
          style={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}>
          <View style={styles.tabBodyContainer}>
            {data?.displayedCategories?.map((category, index) => (
              <TouchableOpacity
                key={shortid.generate()}
                style={[
                  styles.categoryContainer,
                  index % 2
                    ? styles.categoryLongHeight
                    : styles.categoryShortHeight,
                  getBackground(category?.id),
                ]}
                onPress={() => handleNavigation('CoursesList', category)}>
                <ImageBackground
                  source={getIllustration(category?.id)}
                  style={styles.illustrationImage}
                  imageStyle={styles.backgroundStyle}>
                  <View style={styles.transparentBg}>
                    <Text style={styles.categoryTitletext}>
                      {category?.title}
                    </Text>
                    <Text style={styles.categoryNumbertext}>
                      {category?.number}
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
