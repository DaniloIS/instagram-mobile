import { ADD_COMMENT, SET_POSTS, CREATING_POST, POST_CREATED } from '../actions/actionTypes';

const initialState =  {
  posts: [],
  isUploading: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload
      }
    case ADD_COMMENT:
      return {
        ...state,
        posts: state.posts.map(post => {
          if(post.id === action.payload.postId) {
            if(post.comments) {
              post.comments = post.comments.concat(action.payload.comments)
            } else {
              post.comments = [action.payload.comments]
            }
          }
          return post
        })
      }
    case CREATING_POST:
      return {
        ...state,
        isUploading: true
      }
    case POST_CREATED:
      return {
        ...state,
        isUploading: false
      }
    default: 
      return state
  }
}

export default reducer;