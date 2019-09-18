import { GET_LOGS, LOGS_ERROR, SET_LOADING } from "../actions/types";

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false
      };

    case LOGS_ERROR: {
      console.log(action.payload);
      return {
        ...state,
        error: action.payload
      };
    }

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
