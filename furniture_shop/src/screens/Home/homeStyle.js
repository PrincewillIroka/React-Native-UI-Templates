import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  homeContent: {
    height: '100%',
    padding: 16,
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
    marginBottom: 30
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
    marginBottom: 40
  },
  searchInput: {
    width: '100%',
    height: 40,
    fontSize: 15
  },
});

export default styles;
