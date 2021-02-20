import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  productDetailContainer: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  productDetailContent: {
    height: '100%',
    padding: 16,
  },
  productDetailHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  productDetailCircleContainer: {
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
    right: 15,
    fontSize: 20,
    color: '#B48B49',
    fontWeight:"bold"
  },
});

export default styles;
