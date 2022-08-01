import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { login } from '../../store/actions/user';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import styles from './styles';

const initialState = {
  name: '',
  email: '',
  password: ''
}

const SignInOrSignUp = () => {
  const [form, setForm] = useState(initialState);
  const [signIn, setSignIn] = useState(true);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  function handleSubmit() {
    const { name, email, password } = form;
    if(!signIn && !name || !email || !password) {
      Alert.alert('Preencha todos os campos corretamente!');
      return
    }

    dispatch(login(form));
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        {!signIn && <Input placeholder='Nome' value={form.name} onChange={e => setForm({ ...form, name: e })} />}
        <Input placeholder='Email' value={form.email} onChange={e => setForm({ ...form, email: e })} />
        <Input placeholder='Senha' value={form.password} onChange={e => setForm({ ...form, password: e })} password />

        <Button label={signIn ? 'Entrar' : 'Cadastrar'} onClick={handleSubmit} />
        <TouchableOpacity onPress={() => setSignIn(!signIn)}>
          <Text style={styles.btnText}>{signIn ? 'Criar uma nova conta...' : 'Clique aqui parar entrar'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export { SignInOrSignUp };