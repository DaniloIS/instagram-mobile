import { Dimensions, Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },

  title: {
    fontSize: 20,
    marginTop: Platform.OS === 'ios' ? 30 : 10,
    fontWeight: 'bold'
  },

  imageContainer: {
    width: '90%',
    height: Dimensions.get('window').width * 3 / 4,
    backgroundColor: '#eee',
    marginTop: 10
  },

  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 3 / 4,
    resizeMode: 'center'
  },

  button: {
    
  }
})