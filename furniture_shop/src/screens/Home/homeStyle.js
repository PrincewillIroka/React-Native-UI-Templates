import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  homeContent: {
    height: '100%',
    padding: 16,
  },
  homeHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  homeHeaderCircleContainer: {
    backgroundColor: '#fff',
    height: 50,
    width: 50,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  noInCartText: {
    position: 'absolute',
    top: 2,
    right: 14,
    fontSize: 20,
    color: '#B48B49',
    fontWeight:"bold"
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 3,
  },
  greetingText: {
    fontSize: 16,
    opacity: 0.4,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  chooseText: {
    fontWeight: 'bold',
    fontSize: 18,
    opacity: 0.8,
    marginBottom: 30,
  },
  searchContainer: {
    height: 40,
    width: '100%',
    backgroundColor: '#FEFEFE',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FBFBFB',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    padding: 7,
    marginBottom: 20,
  },
  searchInput: {
    width: '100%',
    height: 40,
    fontSize: 15,
  },
  scrollViewContent: {
    paddingBottom: 40,
    paddingTop: 20,
  },
  productsContainer: {
    display: 'flex',
  },
  section: {
    display: 'flex',
    marginBottom: 50,
  },
  sectionHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  sectionHeaderText: {
    color: '#000',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 16,
  },
  sectionHeaderLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionHeaderLeftText: {
    color: '#a7a7a7',
    marginRight: 5,
  },
  sectionScrollContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 1,
  },
  sectionContent: {
    paddingTop: 15,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
});

export default styles;
