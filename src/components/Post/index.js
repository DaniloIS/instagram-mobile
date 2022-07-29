import React from 'react';
import { View, Image } from 'react-native';
import { AddComment } from '../AddComment';
import { Author } from '../Author';
import { Comments } from '../Comments';

import styles from './styles';

const Post = ({ image, comments }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Author email='danilo.santos.clear@gmail.com' nickname='DaniloIS' />
      <Comments comments={comments} />
      <AddComment />
    </View>
  )
}

export { Post };