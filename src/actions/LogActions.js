import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS
} from "./types";

// export const getLogs = async dispatch => {
//   setLoading();
//   await fetch("http://localhost:5000/logs").then(res => {
//     dispatch({
//       type: GET_LOGS,
//       payload: res.logs
//     }).catch(err => {
//       dispatch({
//         type: LOGS_ERROR,
//         payload: err.res.data
//       });
//     });
//   });
// };

//returning a function directly inside of a another function
export const getLogs = () => async dispatch => {
  try {
    const res = await fetch("http://localhost:5000/logs");
    const data = await res.json();
    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

//add the logs

export const addLogs = log => async dispatch => {
  setLoading();
  const res = await fetch("http://localhost:5000/logs", {
    method: "POST",
    body: JSON.stringify(log),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await res.json();
  dispatch({
    type: ADD_LOG,
    payload: data
  });
};

//delete logs
export const deleteLog = id => async dispatch => {
  setLoading(true);
  await fetch(`http://localhost:5000/${id}`, {
    method: "DELETE"
  });
  dispatch({
    type: DELETE_LOG,
    payload: id
  });
};

//update the logs

export const updateLog = log => async dispatch => {
  setLoading();
  const res = await fetch(`http://localhost:5000/logs/${log.id}`, {
    method: "PUT",
    body: JSON.stringify(log),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await res.json();

  dispatch({
    type: UPDATE_LOG,
    payload: data
  });
};

//set current log

export const setCurrent = log => async dispatch => {
  dispatch({
    type: SET_CURRENT,
    payload: log
  });
};

export const clearCurrent = () => async dispatch => {
  dispatch({
    type: CLEAR_CURRENT
  });
};

//search the logs

export const searchLog = text => async dispatch => {
  setLoading();
  const res = await fetch(`http://localhost:5000/logs?q=${text}`);
  const data = await res.json();
  dispatch({
    type: SEARCH_LOGS,
    payload: data
  });
};
