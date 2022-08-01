import { Dimensions, Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20
  },

  title: {
    fontSize: 20,
    marginTop: Platform.OS === 'ios' ? 30 : 10,
    fontWeight: 'bold',
    color: '#000'
  },

  imageContainer: {
    width: '100%',
    height: Dimensions.get('window').width / 2,
    backgroundColor: '#eee',
    marginTop: 10
  },

  image: {
    width: '100%',
    height: Dimensions.get('window').width / 2,
    resizeMode: 'center'
  },

  formContainer: {
    width: '100%',
    height: 250,
    justifyContent: 'space-evenly'
  }
})