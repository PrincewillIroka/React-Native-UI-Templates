import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, CoursesList} from '../screens';

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CoursesList"
        component={CoursesList}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
