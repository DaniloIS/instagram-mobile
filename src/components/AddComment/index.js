import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback as TWF, Alert, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../store/actions/post';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const AddComment = ({ postId}) => {
  const [comment, setComment] = useState('');
  const [editMode, setEditMode] = useState(false);
  const user = useSelector(state => state.user);

  const dispatch = useDispatch();

  function handleAddComment() {
    dispatch(addComment({
      postId,
      comments: {
        nickname: user.name,
        comment
      }
    }))
    setComment('')
    setEditMode(false)
    Alert.alert('Adicionado!', comment)
  }

  let commentArea = null
  if(editMode) {
    commentArea = (
      <View style={styles.container}>
        <TextInput
          placeholder='Pode comentar...'
          placeholderTextColor='#e3e3e3'
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