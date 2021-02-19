import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  coursesListContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  bgContainer: {
    width: '100%',
    height: '30%',
  },
  illustrationImage: {
    flex: 1,
    position: 'relative',
    borderRadius: 10,
    width: '100%',
  },
  illustrationBackgroundStyle: {
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: '#eee',
    height: 32,
    width: 32,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coursesListContent: {
    top: '25%',
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 30,
  },
  coursesListTitle: {
    marginLeft: 30,
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 15,
  },
  scrollViewContent: {
    paddingTop: 15,
    flex: 1,
  },
  coursesListWrapper: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  singleCourse: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    paddingVertical: 7,
    marginBottom: 30,
    borderRadius: 5,
    paddingHorizontal: 7,
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  courseImage: {
    height: 90,
    width: 90,
    marginRight: 10,
  },
  courseBackgroundStyle: {
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    borderRadius: 5,
  },
  playButton: {
    height: 30,
    width: 30,
    backgroundColor: '#fff',
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: '30%',
    left: '30%',
  },
  courseRightContainer: {display: 'flex', width: '100%'},
  bookmarkIcon: {
    marginLeft: '63%',
  },
  courseInfo: {
    fontWeight: 'bold',
    width: '69%',
    marginBottom: 'auto',
    fontSize: 14,
  },
  progressBarContainer: {
    backgroundColor: '#EEEDF4',
    height: 10,
    width: '69%',
    borderRadius: 20,
  },
  progressBarItem: {
    backgroundColor: '#D9864E',
    height: 10,
    borderRadius: 20,
  },
  sectionScrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 60,
  },
});

export default styles;
