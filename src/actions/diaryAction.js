import axios from "axios";
import { GET_ERRORS, GET_DIARY, GET_DIARIES } from "./types";

export const createDiaryContent = (diaryContent, history) => async dispatch => {
  try {
    await axios.post("/api/diary/savediary", diaryContent);
    history.push("/home");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getProjects = () => async dispatch => {
  const res = await axios.get("/api/project/all");
  dispatch({
    type: GET_DIARIES,
    payload: res.data
  });
};
export const getDiaries = () => async dispatch => {
  const res = await axios.get("/api/diary/diaryall");
  console.log(">>");
  console.log(res.data);
  dispatch({
    type: GET_DIARIES,
    payload: res.data
  });
};


export const getProject = (id, history) => async dispatch => {
  try {
    const res = await axios.get(`/api/project/${id}`);
    dispatch({
      type: GET_DIARY,
      payload: res.data
    });
  } catch (error) {
    history.push("/dashboard");
  }
};

 