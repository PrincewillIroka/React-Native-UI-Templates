import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Home, JobDetail, Bookmarks} from '../screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({tintColor}) => (
            <AntDesign name="home" color="#ccc" size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={Bookmarks}
        options={{
          title: 'Bookmarks',
          tabBarIcon: ({tintColor}) => (
            <FontAwesome name="bookmark" color="#ccc" size={25} />
          ),
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
