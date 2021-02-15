import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  navHeader: {
    backgroundColor: '#222225',
    height: 60,
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  navIconImage: {
    height: 25,
    width: 25,
    resizeMode: 'cover',
  },
  logoContainer: {
    width: 107,
    height: 37,
    position: 'relative',
  },
  logoImage: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
    zIndex: 1,
  },
  controlIcons: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  menuOptionText: {
    fontSize: 15,
    paddingLeft: 7,
    paddingBottom: 5,
  },
});

export default styles;
