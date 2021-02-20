import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import shortid from 'shortid';
import HotDogMenu from '../../assets/icons/HotDogMenu.png';
import styles from './homeStyle.js';
import {FeaturedProduct, NewProduct} from '../../components';
import {AuthContext} from '../../context';

export function Home({navigation}) {
  const {state, dispatch} = useContext(AuthContext);
  const [data, setData] = useState({username: 'Kimberly'});

  const handleNavigation = (route, params) => {
    navigation?.navigate(route, params);
  };

  const renderFeaturedProducts = ({item}) => {
    return (
      <FeaturedProduct
        furniture={item}
        onNavigate={(route, params) => handleNavigation(route, params)}
      />
    );
  };

  const renderNewProducts = ({item}) => {
    return (
      <NewProduct
        furniture={item}
        onNavigate={(route, params) => handleNavigation(route, params)}
      />
    );
  };

  return (
    <View style={styles.homeContainer}>
      <View style={styles.homeContent}>
        <View style={styles.homeHeader}>
          <TouchableOpacity style={styles.homeHeaderCircleContainer}>
            <Image source={HotDogMenu} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.homeHeaderCircleContainer}>
            <MaterialCommunityIcons
              name="cart-outline"
              size={20}
              color="#333333"
            />
            <Text style={styles.noInCartText}>{state?.cart?.length}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.greetingText}>Hello, {data?.username}</Text>
        <Text style={styles.chooseText}>Choose Your Furniture!</Text>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#333333" />
          <TextInput placeholder="Search" style={styles.searchInput} />
        </View>
        <ScrollView
          style={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}>
          <View style={styles.productsContainer}>
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionHeaderText}>FEATURED PRODUCTS</Text>
                <TouchableOpacity style={styles.sectionHeaderLeft}>
                  <Text style={styles.sectionHeaderLeftText}>See all</Text>
                  <Ionicons
                    name="arrow-forward-sharp"
                    size={20}
                    color="#D1D1D1"
                  />
                </TouchableOpacity>
              </View>
              <FlatList
                data={state?.featuredProducts}
                keyExtractor={(item, index) => shortid.generate()}
                renderItem={renderFeaturedProducts}
                horizontal={true}
                contentContainerStyle={styles.sectionScrollContainer}
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionHeaderText}>NEW PRODUCTS</Text>
              </View>
              <View style={styles.sectionContent}>
                <FlatList
                  data={state?.newProducts}
                  keyExtractor={(item, index) => shortid.generate()}
                  renderItem={renderNewProducts}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
