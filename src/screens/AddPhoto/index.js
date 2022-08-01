import React, { useState } from 'react';
import { Alert, ScrollView, TextInput, TouchableOpacity, View, Text, Image } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { addPost } from '../../store/actions/post';

import styles from './styles';

const AddPhoto = () => {
  const [image, setImage] = useState(null);
  const [comment, setComment] = useState('');
  const user = useSelector(state => state.user)

  const dispatch = useDispatch();

  function pickerImage() {
    // launchCamera({
    //   mediaType: 'photo'
    // })
    launchImageLibrary({
      title: 'Escolha a imagem',
      maxWidth: 800,
      maxHeight: 600
    }).then(res => {
      setImage({uri: res.assets[0].uri})
    })
  }

  function save() {
    dispatch(addPost({
      id: Math.random(),
      nickname: user.name,
      email: user.email,
      image: image,
      comments: [
        {
          nickname: user.name,
          comment: comment
        },
      ]
    }))
    Alert.alert('Imagem adicionada!', comment);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Compartilhe uma imagem</Text>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
        <View style={styles.formContainer}>
          <Button label='Escolha a foto' onClick={pickerImage} />
          <Input placeholder='Algum comentário para a foto?'  value={comment} onChange={e => setComment(e)} />
          <Button label='Salvar' onClick={save} />
        </View>
      </View>
    </ScrollView>
  )
}

export { AddPhoto };