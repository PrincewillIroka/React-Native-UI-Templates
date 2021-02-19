import React from 'react';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, CoursesList} from '../screens';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

const SingleStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CoursesList"
        component={CoursesList}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="DrawerStack">
      <Stack.Screen
        name="DrawerStack"
        component={DrawerStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SingleStack"
        component={SingleStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
