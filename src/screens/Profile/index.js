import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { Gravatar } from 'react-native-gravatar';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/actions/user';

import { Button } from '../../components/Button';

import styles from './styles';

const Profile = () => {
  const user = useSelector(state => state.user);
  const options = { email: user.email, secure: true }

  const dispatch = useDispatch();
  const navigation = useNavigation();

  function handleLogout() {
    dispatch(logout());
    navigation.navigate('Auth')
  }

  return (
    <View style={styles.container}>
      <Gravatar options={options} style={styles.avatar} />
      <Text style={styles.nickname}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <Button label='Sair' onClick={handleLogout} />
    </View>
  )
}

export { Profile };