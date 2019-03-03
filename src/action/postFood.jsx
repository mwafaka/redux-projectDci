import { FETCH_POSTS } from "./types";

export const fetchPosts = () => dispatch => {
  fetch("http://api.yummly.com/v1/api/recipes?_app_id=fb0534aa&_app_key=
  0c435675fc62e8b6fe983905a3957090")
  .then(res => res.json())
  .then(posts =>
    dispatch({
      type: FETCH_POSTS,
      payload: posts
    })
  );
};
