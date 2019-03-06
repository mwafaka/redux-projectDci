import { FETCH_POSTS } from "./types";

export const fetchPosts = searchTerm => {
  return dispatch => {
    return fetch(
      `http://api.yummly.com/v1/api/recipes?_app_id=fb0534aa&_app_key=d0c7e146d728da382232c1adc2728ce3&q=${searchTerm}
    `
    )
      .then(res => res.json())
      .then(posts => {
        console.log(searchTerm, posts);
        dispatch({
          type: FETCH_POSTS,
          payload: posts,
          q: searchTerm
        });
      });
  };
};
