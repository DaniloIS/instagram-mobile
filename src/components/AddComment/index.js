import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback as TWF, Alert, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const AddComment = () => {
  const [comment, setComment] = useState('');
  const [editMode, setEditMode] = useState(false);

  function handleAddComment() {
    Alert.alert('Adicionado!', comment)
  }

  let commentArea = null
  if(editMode) {
    commentArea = (
      <View style={styles.container}>
        <TextInput
          placeholder='Pode comentar...'
          style={styles.input}
          autoFocus={true}
          value={comment}
          onChangeText={e => setComment(e)}
          onSubmitEditing={handleAddComment}
        />
        <TWF onPress={() => setEditMode(false)}>
          <Icon name='times' size={15} color='#555' />
        </TWF>
      </View>
    )
  } else {
    commentArea = (
      <TWF onPress={() => setEditMode(true)}>
        <View style={styles.container}>
          <Icon name='comment-o' size={25} color='#555' />
          <Text style={styles.caption}>
            Adicione um comentário...
          </Text>
        </View>
      </TWF>
    )
  }
  return (
    <View style={{flex: 1}}>
      {commentArea}
    </View>
  )
}

export { AddComment };