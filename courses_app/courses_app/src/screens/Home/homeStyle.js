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
  },
});

export default styles;
