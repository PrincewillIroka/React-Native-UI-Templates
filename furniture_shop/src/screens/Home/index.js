import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './homeStyle.js';

export function Home() {
  const [state, setState] = useState({username: 'Kimberly'});

  return (
    <View style={styles.homeContainer}>
      <View style={styles.homeContent}>
        <Text style={styles.greetingText}>Hello, {state?.username}</Text>
        <Text style={styles.chooseText}>Choose Your Furniture!</Text>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#D7D2CE" />
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
          />
        </View>
        <ScrollView
          style={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}></ScrollView>
      </View>
    </View>
  );
}
