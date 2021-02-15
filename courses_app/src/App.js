import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './navigators/Stack';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.areaContainer}>
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  areaContainer: {
    flex: 1,
  },
});

export default App;
