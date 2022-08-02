import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
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
  const loading = useSelector(state => state.posts.isUploading)

  const dispatch = useDispatch();
  const navigation = useNavigation();

  // useEffect(() => {
  //   console.log(loading)
  //   if (!loading) {
  //     setImage(null);
  //     setComment('');
  //     navigation.navigate('Feed');
  //   }
  // }, [loading])

  function pickerImage() {
    // launchCamera({
    //   mediaType: 'photo'
    // })
    launchImageLibrary({
      title: 'Escolha a imagem',
      maxWidth: 800,
      maxHeight: 600,
      includeBase64: true
    }).then(res => {
      setImage({ uri: res.assets[0].uri, base64: res.assets[0].base64 })
    })
  }

  function save() {
    if(!image) {
      Alert.alert('Adicione uma imagem!');
      return
    }
    
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
    
    setImage(null);
    setComment('');
    navigation.navigate('Feed');
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
          <Button label='Salvar' onClick={save} disabled={loading} bgColor={loading && '#aaa'} />
        </View>
      </View>
    </ScrollView>
  )
}

export { AddPhoto };