import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './homeStyle.js';
import shortid from 'shortid';

export function Home() {
  const [state, setState] = useState({
    username: 'Ramjan',
    tabs: ['New', 'Trendy', 'Best rated'],
    activeTab: 'New',
  });

  return (
    <View style={styles.homeContainer}>
      <View style={styles.homeContent}>
        <Text style={styles.usernameText}>Hey {state?.username}</Text>
        <Text style={styles.learnText}>Learn new Skills today!</Text>
        <View style={styles.searchContainer}>
          <TextInput />
        </View>
        <View style={styles.tabHeaderContainer}>
          {state?.tabs?.map((tab) => (
            <TouchableOpacity key={shortid.generate()} style={styles.singleTab}>
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
          <View style={styles.tabBodyContainer}></View>
        </ScrollView>
      </View>
    </View>
  );
}
