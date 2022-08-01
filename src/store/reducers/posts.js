import { ADD_COMMENT, ADD_POST } from '../actions/actionTypes';

const initialState =  {
  posts: [{
    id: Math.random(),
    nickname: 'Danilo',
    email: 'danilo.santos.clear@gmail.com',
    image: require('../../assets/imgs/fence.jpg'),
    comments: [
      {
        nickname: 'Diego Isidoro',
        comment: 'Muito bom!'
      },
      {
        nickname: 'Larry',
        comment: 'Lindooooo'
      }
    ]
  }, {
    id: Math.random(),
    nickname: 'Diogo',
    email: 'diogo@gmail.com',
    image: require('../../assets/imgs/bw.jpg'),
    comments: []
  }]
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat({ ...action.payload })
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
    default: 
      return state
  }
}

export default reducer;