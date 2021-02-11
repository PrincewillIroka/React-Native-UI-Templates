import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  uploadContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollViewContent: {
    height: '100%',
    padding: 16,
  },
  uploadContent: {
    marginBottom: 50,
    padding: 16,
  },
  layoutContent: {
    marginTop: 40,
    display: 'flex',
  },
  uploadSingleSongText: {
    fontSize: 20,
  },
  iconWrapper: {
    backgroundColor: '#00bcd4',
    height: 70,
    width: 70,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  singleCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222225',
    height: 280,
    marginTop: 40,
  },
});

export default styles;
