import { SET_POSTS, ADD_COMMENT, CREATING_POST, POST_CREATED } from './actionTypes';
import axios from 'axios';

export const addPost = post => {
  return (dispatch, getState) => {
    dispatch(creatingPost())
    axios.post(`/posts.json?auth=${getState().user.token}`, { ...post })
      .then(res => {
        dispatch(getPosts())
        dispatch(postCreated())
      })
      .catch(err => console.log(err))
  }
}

export const addComment = payload => {
  return (dispatch, getState) => {
    axios.get(`/posts/${payload.postId}.json`)
      .then(res => {
        const comments = res.data.comments || []
        comments.push(payload.comments)
        axios.patch(`/posts/${payload.postId}.json?auth=${getState().user.token}`, { comments })
          .then(res => {
            dispatch(getPosts())
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  }
  // return {
  //   type: ADD_COMMENT,
  //   payload: payload
  // }
}

export const setPosts = posts =>{
  return {
    type: SET_POSTS,
    payload: posts
  }
}

export const getPosts = () => {
  return dispatch => {
    axios.get('/posts.json')
      .then(res => {
        const rawPosts = res.data
        const posts = []

        for(let key in rawPosts) {
          posts.push({
            ...rawPosts[key],
            id: key
          })
        }

        dispatch(setPosts(posts.reverse()))
        
      })
      .catch(err => console.log(err))
  }
}

export const creatingPost = () => {
  return {
    type: CREATING_POST
  }
}

export const postCreated = () => {
  return {
    type: POST_CREATED
  }
}