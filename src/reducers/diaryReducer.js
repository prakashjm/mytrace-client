import { GET_DIARY, GET_DIARIES } from "../actions/types";

const initialState = {
  diaries: [],
  diary: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DIARIES:
      return {
        ...state,
        diaries: action.payload
      };

    case GET_DIARY:
      return {
        ...state,
        project: action.payload
      };

     
    default:
      return state;
  }
}
