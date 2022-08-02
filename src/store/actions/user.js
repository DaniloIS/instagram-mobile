import { LOADING_USER, USER_LOADED, USER_LOGGED_IN, USER_LOGGED_OUT } from './actionTypes';
import axios from 'axios';

// const authBaseURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
const authBaseURL = 'https://identitytoolkit.googleapis.com/v1/accounts:';
const API_KEY = 'AIzaSyBNgtSmR_a6kN5jioA-Cn5d0OGlIs_EuO0';

export const userLogged = user => {
  return {
    type: USER_LOGGED_IN,
    payload: user
  }
}

export const logout = () => {
  return {
    type: USER_LOGGED_OUT
  }
}

export const createUser = user => {
  return dispatch => {
    dispatch(loadingUser())
    axios.post(`${authBaseURL}signUp?key=${API_KEY}`, {
      email: user.email,
      password: user.password,
      returnSecureToken: true
    })
    .catch(err => console.log(err))
    .then(res => {
      if(res.data.localId) {
        axios.put(`/users/${res.data.localId}.json`, {
          name: user.name
        })
        .catch(err => console.log(err))
        .then(res => {
          user.password = null,
          dispatch(userLogged(user))
          dispatch(userLoaded())
        })
      }
    })
  }
}

export const loadingUser = () => {
  return {
    type: LOADING_USER
  }
}

export const userLoaded = () => {
  return {
    type: USER_LOADED
  }
}

export const login = user => {
  return dispatch => {
    dispatch(loadingUser())
    axios.post(`${authBaseURL}signInWithPassword?key=${API_KEY}`, {
      email: user.email,
      password: user.password,
      returnSecureToken: true
    })
      .catch(err =>  console.log(err))
      .then(res => {
        user.token = res.data.idToken
        if(res.data.localId) {
          axios.get(`/users/${res.data.localId}.json`)
            .catch(err => console.log(err))
            .then(res => {
              user.password = null,
              user.name = res.data.name
              dispatch(userLogged(user))
              dispatch(userLoaded())
            })
        }
      })
  }
}