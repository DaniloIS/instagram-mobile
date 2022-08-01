import React from 'react';
import { View, Image, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Gravatar } from 'react-native-gravatar';

import styles from './styles';

import icon from '../../assets/imgs/icon.png';

const Header = () => {
  const user = useSelector(state => state.user);

  const gravatar = user ? <Gravatar style={styles.avatar} options={{ email: user.email, secure: true }} /> : null;

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image source={icon} style={styles.image} />
        <Text style={styles.title}>Lambe Lambe</Text>
      </View>
      <View style={styles.userContainer}>
        <Text style={styles.user}>{user.name}</Text>
        {gravatar}
      </View>
    </View>
  )
}

export { Header };