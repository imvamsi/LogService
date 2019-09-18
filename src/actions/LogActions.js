import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./types";

export const getLogs = async dispatch => {
  setLoading();
  await fetch("http://localhost:/5000/logs").then(res => {
    dispatch({
      type: GET_LOGS,
      payload: res.data
    }).catch(err => {
      dispatch({
        type: LOGS_ERROR,
        payload: err.res.data
      });
    });
  });
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
