import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
  DELETE_LOG
} from "./types";

export const getTechs = () => async dispatch => {
  try {
    const res = await fetch("http://localhost:5000/techs");
    const data = await res.json();
    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.data
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

//add techs

export const addTechs = tech => async dispatch => {
  setLoading();
  const res = await fetch("http://localhost:5000/techs", {
    method: "POST",
    body: JSON.stringify(tech),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await res.json();
  dispatch({
    type: ADD_TECH,
    payload: data
  });
};

//delete techs

export const deleteTechs = id => async dispatch => {
  setLoading();
  await fetch(`http://localhost:5000/techs/${id}`, {
    method: "DELETE"
  });
  dispatch({
    type: DELETE_TECH,
    payload: id
  });
};
