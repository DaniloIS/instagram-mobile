import React from 'react';
import { View, Text } from 'react-native';
import { Gravatar } from 'react-native-gravatar';

import styles from './styles';

const Author = ({ email, nickname }) => {
  return (
    <View style={styles.container}>
      <Gravatar options={{ email: email, secure: true }} style={styles.avatar} />
      <Text style={styles.nickname}>{nickname}</Text>
    </View>
  )
} 

export { Author };