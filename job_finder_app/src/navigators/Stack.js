import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Home,
  JobDetail,
  Bookmarks,
  Settings,
  Notifications,
  Messages,
} from '../screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, tintColor}) => (
            <Foundation
              name="home"
              color={focused ? '#49AC5A' : '#ccc'}
              size={24}
            />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={Bookmarks}
        options={{
          tabBarIcon: ({focused, tintColor}) => (
            <Ionicons
              name="ios-bookmarks"
              color={focused ? '#49AC5A' : '#ccc'}
              size={20}
            />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: ({focused, tintColor}) => (
            <MaterialCommunityIcons
              name="message-text"
              color={focused ? '#49AC5A' : '#ccc'}
              size={24}
            />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({focused, tintColor}) => (
            <Ionicons
              name="ios-notifications"
              color={focused ? '#49AC5A' : '#ccc'}
              size={24}
            />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused, tintColor}) => (
            <Ionicons
              name="settings-sharp"
              color={focused ? '#49AC5A' : '#ccc'}
              size={24}
            />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const NavStack = () => {
  return (
    <Stack.Navigator initialRouteName="JobDetail">
      <Stack.Screen
        name="JobDetail"
        component={JobDetail}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="TabStack">
      <Stack.Screen
        name="TabStack"
        component={TabStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NavStack"
        component={NavStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
