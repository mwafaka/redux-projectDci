import { FETCH_POSTS } from "../action/types";

const initialState = {
  items: [],
  searchTerm: ""
};
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };

    default:
      return state;
  }
}
