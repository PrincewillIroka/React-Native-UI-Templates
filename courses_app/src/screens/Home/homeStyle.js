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
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
    alignItems: 'center',
  },
  profilePhotoImage: {
    height: 40,
    width: 40,
    borderRadius: 5,
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 3,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  usernameText: {
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.7,
    marginLeft: 5,
  },
  learnText: {
    fontSize: 16,
    marginBottom: 30,
    opacity: 0.6,
  },
  searchContainer: {
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 30,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  searchInput: {
    height: 40,
    fontSize: 15,
    marginLeft: 5,
    width: '80%',
  },
  dropdownContainer: {
    borderLeftColor: '#ddd',
    borderLeftWidth: 1,
    height: 40,
    width: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  scrollViewContent:{
    paddingTop: 10,
    paddingBottom: 40
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
  categoryContainer: {
    width: '43%',
    borderRadius: 12,
    marginBottom: 30,
  },
  categoryShortHeight: {
    height: 160,
  },
  categoryLongHeight: {
    height: 200,
  },
  categoryTitletext: {
    fontWeight: 'bold',
    fontSize: 16,
    opacity: 0.9,
  },
  categoryNumbertext: {
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
