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

export function Home() {
  const {state, dispatch} = useContext(AuthContext);
  const [data, setData] = useState({username: 'Kimberly'});

  const renderGridItem = ({item, index}) => {
    return <FeaturedProduct furniture={item} />;
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
              color="#D7D2CE"
            />
            <Text style={styles.noInCartText}>{state?.cart?.length}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.greetingText}>Hello, {data?.username}</Text>
        <Text style={styles.chooseText}>Choose Your Furniture!</Text>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#D7D2CE" />
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
                renderItem={renderGridItem}
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
                <NewProduct />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
