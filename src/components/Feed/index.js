import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

import { Header } from '../Header';
import { Post } from '../Post';

import styles from './styles';

const Feed = () => {
  const [posts, setPosts] = useState([{
    id: Math.random(),
    nickname: 'Danilo',
    email: 'danilo.santos.clear@gmail.com',
    image: require('../../assets/imgs/fence.jpg'),
    comments: [
      {
        nickname: 'Diego Isidoro',
        comment: 'Muito bom!'
      },
      {
        nickname: 'Larry',
        comment: 'Lindooooo'
      }
    ]
  }, {
    id: Math.random(),
    nickname: 'Diogo',
    email: 'diogo@gmail.com',
    image: require('../../assets/imgs/bw.jpg'),
    comments: []
  }])

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={posts}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => <Post key={item.id} {...item} />}
      />
    </View>
  )
}

export { Feed };