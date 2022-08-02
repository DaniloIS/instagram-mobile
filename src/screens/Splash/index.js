import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import icon from '../../assets/imgs/icon.png';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000)
  }, [])

  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.image} />
      <Text style={styles.title}>Instagram</Text>
    </View>
  )
}

export { Splash };