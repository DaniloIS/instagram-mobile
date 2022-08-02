import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },

  title: {
    color: '#000',
    fontSize: 50,
    fontWeight: 'bold'
  }
})