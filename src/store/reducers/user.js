import { USER_LOGGED_IN, USER_LOGGED_OUT, LOADING_USER, USER_LOADED  } from '../actions/actionTypes';

const initialState = {
  name: null,
  email: null,
  token: null,
  isLoading: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case USER_LOGGED_IN:
      console.log(action.payload)
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        token: action.payload.token
      }
    case USER_LOGGED_OUT:
      return {
        ...initialState
      }
    case LOADING_USER:
      return {
        ...state,
        isLoading: true
      }
    case USER_LOADED:
      return {
        ...state,
        isLoading: false
      }
    default: 
      return state
  }
}

export default reducer;