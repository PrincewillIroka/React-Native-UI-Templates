import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  furnitureContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    width: Dimensions.get('window').width / 2.5,
    padding: 10,
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
  furnitureImage: {
    height: 100,
    width: 100,
    marginBottom: 5,
  },
  furnitureName: {
    width: '100%',
    fontWeight: 'bold',
    opacity: 0.8,
  },
  furnitureType: {
    width: '100%',
    opacity: 0.5,
    marginBottom: 10,
    fontSize: 13,
  },
  furnitureBottomRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  furniturePrice: {
    opacity: 0.7,
    fontSize: 13
  },
  addToCartBtn: {
    backgroundColor: '#B48B49',
    padding: 5,
    borderRadius: 50,
  },
});

export default styles;
