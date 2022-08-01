import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: Platform === 'ios' ? 20 : 0,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#bbb',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    height: 30,
    width: 30,
    resizeMode: 'contain'
  },

  title: {
    color: '#000',
    fontFamily: 'shelter',
    height: 30,
    fontSize: 25
  },

  userContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  user: {
    fontSize: 10,
    color: '#888'
  },

  avatar: {
    width: 30,
    height: 30,
    marginLeft: 10
  }
})