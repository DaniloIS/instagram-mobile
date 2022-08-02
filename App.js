import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
axios.defaults.baseURL = 'https://instaclone-48202-default-rtdb.firebaseio.com';

import { setMessage } from './src/store/actions/message';
import storeConfig from './src/store/storeConfig';

const store = storeConfig();

import { Routes } from './src/routes';

const App = () => {
  
  return (
    <Provider store={store}>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </View>
    </Provider>
  )
}

export default App;