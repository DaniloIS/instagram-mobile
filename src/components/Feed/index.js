import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Header } from '../Header';
import { Post } from '../Post';

import styles from './styles';

const Feed = () => {
  const postsReducer = useSelector(state => state.posts);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    if(postsReducer) setPosts(postsReducer.posts)
    console.log(postsReducer)
  }, [postsReducer])

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