import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  furnitureContainer: {
    width: Dimensions.get('window').width / 2.8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 7,
    marginRight: Dimensions.get('window').width / 20,
    height: 130,
  },
  furnitureImageWrapper: {
    height: '80%',
    width: '100%',
    marginBottom: 5,
  },
  furnitureImage: {
    height: '100%',
    width: '100%',
    borderRadius: 15,
  },
  furnitureName: {
    width: '85%',
    fontWeight: 'bold',
    opacity: 0.6,
    textAlign: 'center',
    fontSize: 12,
  },
});

export default styles;
