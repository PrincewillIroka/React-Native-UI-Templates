import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  jobDetailContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  jobDetailContent: {
    height: '100%',
    padding: 16,
    paddingBottom: 0,
    position: 'relative',
  },
  jobDetailHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  jobDetailCircleContainer: {
    backgroundColor: '#fafafa',
    height: 50,
    width: 50,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  jobDetaiRow1: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 50,
  },
  jobImage: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  jobCompany: {
    opacity: 0.4,
    fontSize: 16,
    fontWeight: 'bold',
  },
  jobRole: {
    fontWeight: 'bold',
    fontSize: 18,
    opacity: 0.8,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  jobSalary: {
    fontSize: 14,
    opacity: 0.4,
    fontWeight: 'bold',
  },
  jobLocation: {
    fontSize: 14,
    marginLeft: 5,
    opacity: 0.4,
    fontWeight: 'bold',
  },
  jobDetailSection:{
      paddingBottom: 80
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 15.5,
    opacity: 0.9,
    marginBottom: 10,
  },
  jobInfoText: {
    lineHeight: 20,
    opacity: 0.6,
    fontSize: 14,
    marginBottom: 40,
  },
  bottomWrapper: {
    position: 'absolute',
    bottom: 10,
    marginLeft: '5%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  applyHereBtn: {
    backgroundColor: '#49AC5A',
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  applyHereText: {
    color: '#fff',
    marginRight: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default styles;
