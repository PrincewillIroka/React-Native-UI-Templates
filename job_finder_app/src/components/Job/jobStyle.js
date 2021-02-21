import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  jobContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0,
    shadowRadius: 0.5,
    elevation: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
  },
  jobImage: {
    height: 80,
    width: '23%',
    resizeMode: 'contain',
  },
  jobInfo: {
    width: '60%',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  jobCompany: {
    width: '100%',
    opacity: 0.5,
    fontSize: 13,
    fontWeight: 'bold',
  },
  jobRole: {
    fontWeight: 'bold',
    fontSize: 14,
    width: '100%',
    opacity: 0.9,
  },
  jobSalary: {
    fontSize: 13,
  },
  jobLocation: {
    fontSize: 13,
    marginLeft: 5,
  },
});

export default styles;
