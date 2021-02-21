import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './jobDetailStyle.js';
import {AuthContext} from '../../context';

export function JobDetail({route, navigation}) {
  const job = route?.params?.job;
  const {state, dispatch} = useContext(AuthContext);
  const [data, setData] = useState({
    jobInfo: `Our team is composed of people from different cultures, backgrounds, knowledge and skills mingled and working together to build the best platform from scratch which makes it very exciting.\nYou will be working on a fun, energetic and a once-in-a-lifetime environment that will enable you to achieve your best possible outcome in your career`,
    jobResponsibility: `\u25CF Plan, prototype, scope and develop backend components. Requirements can vary significantly with the client, particular creative execution and technical requirements, but ultimately you will be responsible for backend components with each project.
    \n\u25CF Learn, champion, and build upon Medusa,  our backend framework, to continually improve functionality and maintain reusable modules.
    \n\u25CF Manage cloud infrastructure on GCP. Implement reliable auto-scaling solutions. Monitor server resources and usage.
    \n\u25CF Support live events and ensure servers are running smoothly, load tested, and optimized for expected traffic.`,
  });

  const isBookmarked = () => {
    let value;
    let bookmarkedJobs = state?.bookmarks;
    value = bookmarkedJobs?.find(
      (bookmarkedJob) => bookmarkedJob.id === job.id,
    );
    return value;
  };

  const handleBackButton = () => {
    navigation?.goBack();
  };

  return (
    <View style={styles.jobDetailContainer}>
      <View style={styles.jobDetailContent}>
        <View style={styles.jobDetailHeader}>
          <TouchableOpacity
            style={styles.jobDetailCircleContainer}
            onPress={() => handleBackButton()}>
            <AntDesign name="arrowleft" size={22} color="#333333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.jobDetailCircleContainer}>
            {isBookmarked() ? (
              <FontAwesome name="bookmark" color="#49AC5A" size={20} />
            ) : (
              <FontAwesome name="bookmark-o" color="#ccc" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.jobDetaiRow1}>
          <Image source={{uri: job?.company?.logo}} style={styles.jobImage} />
          <Text
            style={styles.jobCompany}
            numberOfLines={1}
            ellipsizeMode="tail">
            {job?.company?.name}
          </Text>
          <Text style={styles.jobRole} numberOfLines={1} ellipsizeMode="tail">
            {job?.role}
          </Text>
          <View style={styles.flexRow}>
            <Text
              style={styles.jobSalary}
              numberOfLines={1}
              ellipsizeMode="tail">
              {job?.salary} |
            </Text>
            <Text
              style={styles.jobLocation}
              numberOfLines={1}
              ellipsizeMode="tail">
              {job?.location}
            </Text>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.jobDetailSection}>
            <Text style={styles.heading}>Job description</Text>
            <Text style={styles.jobInfoText}>{data?.jobInfo}</Text>
            <Text style={styles.heading}>Responsibilities</Text>
            <Text style={styles.jobInfoText}>{data?.jobResponsibility}</Text>
          </View>
        </ScrollView>
        <View style={styles.bottomWrapper}>
          <TouchableOpacity style={styles.applyHereBtn}>
            <Text style={styles.applyHereText}>Apply here</Text>
            <MaterialIcons name="double-arrow" color="#fff" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
