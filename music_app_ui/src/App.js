import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './navigators/Stack';
import {navigationRef, isReadyRef} from './navigators/RootNavigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <NavigationContainer ref={navigationRef}>
          <AppStack />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default App;
