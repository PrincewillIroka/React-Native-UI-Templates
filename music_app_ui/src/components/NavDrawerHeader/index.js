import React, {useContext} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import styles from './navDrawerHeaderStyle';
import NavIcon from '../../assets/menu-icon.png';
import Logo from '../../assets/logo.png';
import {getScreenParent} from '../../utils/navigationHelper';
import {navigateToNestedRoute} from '../../navigators/RootNavigation';

export function NavDrawerHeader({navigation}) {

  const handleToggleNavDrawer = () => {
    navigation?.openDrawer();
  };

  const handleNavigation = (route) => {
    navigateToNestedRoute(getScreenParent(route), route);
  };

  return (
    <View style={styles.navHeader}>
      <TouchableOpacity onPress={() => handleToggleNavDrawer()}>
        <Image source={NavIcon} style={styles.navIconImage} />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logoImage} />
      </View>
      <View style={styles.controlIcons}>
        <Ionicons name="search" size={23} color="#ebebeb" />
        <Menu>
          <MenuTrigger>
            <MaterialCommunityIcons
              name="account-circle"
              size={23}
              color="#ebebeb"
              style={{marginLeft: 15}}
            />
          </MenuTrigger>
          <MenuOptions>
            <MenuOption>
              <Text style={styles.menuOptionText}>Login</Text>
            </MenuOption>
            <MenuOption>
              <Text style={styles.menuOptionText}>Sign Up</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
    </View>
  );
}
