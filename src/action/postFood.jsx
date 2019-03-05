import { FETCH_POSTS } from "./types";

export const fetchPosts = () => dispatch => {
  return fetch(
    "http://api.yummly.com/v1/api/recipes?_app_id=fb0534aa&_app_key=d0c7e146d728da382232c1adc2728ce3"
  )
    .then(res => res.json())
    .then(posts => {
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      });
    });
};
