import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../store/actions/post';

import { Header } from '../Header';
import { Post } from '../Post';

import styles from './styles';

const Feed = () => {
  const postsReducer = useSelector(state => state.posts);
  const [posts, setPosts] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if(postsReducer) setPosts(postsReducer.posts)
    dispatch(getPosts())
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