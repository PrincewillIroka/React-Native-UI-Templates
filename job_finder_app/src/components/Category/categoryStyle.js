import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  categoryContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    width: Dimensions.get('window').width / 2.5,
    padding: 10,
    paddingTop: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0,
    shadowRadius: 0.5,
    elevation: 2,
    marginRight: Dimensions.get('window').width / 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryImage: {
    height: 100,
    width: '100%',
    resizeMode: 'contain',
    marginBottom: 10,
    borderRadius: 5,
  },
  categoryTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
  },
  categoryNoOfJobs: {
    opacity: 0.5,
  },
});

export default styles;
