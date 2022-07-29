import React from 'react';
import { View, Text, Alert } from 'react-native';

import styles from './styles';

const Comments = ({ comments }) => {
  let view = null;

  if(comments) {
    view = comments.map((item, idx) => {
      return (
        <View style={styles.commentsContainer} key={idx}>
          <Text style={styles.nickname}>{item.nickname}: </Text>
          <Text style={styles.comment}>{item.comment}</Text>
        </View>
      )
    })
  }
  return (
    <View style={styles.container}>
      {view}
    </View>
  )
}

export { Comments };