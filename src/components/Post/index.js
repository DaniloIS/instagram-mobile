import React from 'react';
import { View, Image } from 'react-native';
import { Author } from '../Author';

import styles from './styles';

const Post = ({ image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Author email='danilo.santos.clear@gmail.com' nickname='DaniloIS' />
    </View>
  )
}

export { Post };