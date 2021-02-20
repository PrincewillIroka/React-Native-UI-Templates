import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  productDetailContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productDetailContent: {
    height: '100%',
    padding: 16,
    position: 'relative',
  },
  productDetailHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  productDetailCircleContainer: {
    backgroundColor: '#fafafa',
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
    fontWeight: 'bold',
    zIndex: 10
  },
  productDetailSection: {
    paddingBottom: 50,
  },
  addToCartBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#AF8845',
    borderRadius: 30,
    paddingVertical: 10,
    position: 'absolute',
    bottom: 10,
    width: '100%',
    left: '5%',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
  productImage: {
    height: 220,
    width: '100%',
    resizeMode: 'contain',
    marginBottom: 30,
  },
  productDetailRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 30,
  },
  productDetailName: {
    width: '100%',
    fontWeight: 'bold',
    opacity: 0.8,
    fontSize: 18,
  },
  productDetailType: {
    width: '100%',
    opacity: 0.5,
    marginBottom: 10,
    fontSize: 14,
  },
  productDetailPrice: {
    opacity: 0.7,
    fontSize: 17,
  },
  productTitleText: {
    fontSize: 15,
    marginBottom: 5,
  },
  productQuantityRow: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15,
  },
  productQuantityValue: {
    fontSize: 18,
    borderColor: '#f4f4f4',
    borderWidth: 1,
    borderRadius: 15,
    textAlign: 'center',
    marginHorizontal: 5,
    paddingVertical: 6,
    paddingHorizontal: 18,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  productDescription: {
    opacity: 0.6,
    fontSize: 13,
    lineHeight: 18
  },
});

export default styles;
