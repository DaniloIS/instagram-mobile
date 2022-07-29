import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Routes } from './src/routes';

const App = () => {
  
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </View>
  )
}

export default App;