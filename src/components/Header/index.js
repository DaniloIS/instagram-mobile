import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

import icon from '../../assets/imgs/icon.png';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image source={icon} style={styles.image} />
        <Text style={styles.title}>Lambe Lambe</Text>
      </View>
    </View>
  )
}

export { Header };