import React, { useState } from 'react';
import { Alert, ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import styles from './styles';

const AddPhoto = () => {
  const [image, setImage] = useState(null);
  const [comment, setComment] = useState('');

  function pickerImage() {
    launchCamera({
      mediaType: 'photo'
    })
  }

  function save() {
    Alert.alert('Imagem adicionada!', comment);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Compartilhe uma imagem</Text>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
        <TouchableOpacity onPress={pickerImage} style={styles.button}>
          <Text style={styles.buttonText}>Escolha a foto</Text>
        </TouchableOpacity>
        <TextInput placeholder='Algum comentário para a foto?' style={styles.input} value={comment} onChangeText={e => setComment(e)} />
        <TouchableOpacity onPress={save}  style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export { AddPhoto };