import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

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