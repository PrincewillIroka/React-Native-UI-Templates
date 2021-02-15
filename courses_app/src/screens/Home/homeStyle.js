import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  homeContent: {
    height: '100%',
    padding: 16,
  },
  usernameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  learnText: {
    fontSize: 16,
    marginBottom: 30,
    opacity: 0.6,
  },
  searchContainer: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 30,
    borderRadius: 5,
  },
  tabHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 40,
  },
  singleTab: {
    marginRight: 20,
    display: 'flex',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  activeTabText: {
    opacity: 0.9,
  },
  inActiveTabText: {
    opacity: 0.3,
  },
  activeTabBottom: {
    height: 10,
    width: 10,
    backgroundColor: '#B79069',
    borderRadius: 50,
  },
  tabBodyContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  courseContainer: {
    width: '43%',
    borderRadius: 12,
    marginBottom: 30,
  },
  courseShortHeight: {
    height: 160,
  },
  courseLongHeight: {
    height: 200,
  },
  courseTitletext: {
    fontWeight: 'bold',
    fontSize: 16,
    opacity: 0.9,
  },
  courseNumbertext: {
    fontSize: 13,
  },
  illustrationImage: {
    flex: 1,
    position: 'relative',
    borderRadius: 10,
    width: '100%',
  },
  backgroundStyle: {
    resizeMode: 'cover',
    position: 'absolute',
    top: 55,
  },
  transparentBg: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  bg0: {
    backgroundColor: '#FDAAB0',
  },
  bg1: {
    backgroundColor: '#E296DE',
  },
  bg2: {
    backgroundColor: '#9E7CF4',
  },
  bg3: {
    backgroundColor: '#96D8CA',
  },
});

export default styles;
