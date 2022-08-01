import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const Button = ({ label, onClick, bgColor = '#4286f4', color = '#fff', size = ['100%', 46] }) => {
  return (
    <TouchableOpacity style={[styles.btn, { backgroundColor: bgColor, width: size[0], height: size[1] }]} onPress={onClick} activeOpacity={0.90}>
      <Text style={[styles.btnText, { color: color }]}>{label}</Text>
    </TouchableOpacity>
  )
}

export { Button };