import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20
  },

  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 100
  },

  nickname: {
    marginTop: 30,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000'
  },

  email: {
    marginTop: 20,
    fontSize: 20,
    color: '#000'
  }
})