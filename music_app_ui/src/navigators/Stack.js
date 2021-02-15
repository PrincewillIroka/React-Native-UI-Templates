import React from 'react';
import {Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Upload, Track} from '../screens';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Upload"
      drawerStyle={{backgroundColor: '#222225'}}
      drawerContentOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Drawer.Screen
        name="Upload"
        component={Upload}
        options={{
          drawerLabel: ({focused, color}) => (
            <Text style={{color: '#fff'}}>Upload</Text>
          ),
          drawerIcon: ({focused, size}) => (
            <MaterialCommunityIcons
              name="transfer-up"
              size={20}
              color={focused ? '#fff' : '#ccc'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const SingleStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Track"
        component={Track}
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
