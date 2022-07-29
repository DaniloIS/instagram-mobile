import React from 'react';
import { View } from 'react-native';

import { Header } from './src/components/Header';
import { Post } from './src/components/Post';

import fence from './src/assets/imgs/fence.jpg'

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Header />
      <Post image={fence} />
    </View>
  )
}

export default App;