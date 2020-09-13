import axios from "axios";
import { GET_ERRORS, GET_PROJECTS, GET_PROJECT, DELETE_PROJECT } from "./types";

export const createUser = (user, history) => async dispatch => {
  try {
      console.log("in action");
    await axios.post("http://192.168.0.162:8094/register", user);
    console.log("in action01");
    console.log(GET_ERRORS);
    console.log("in action02");
    //history.push("/");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    console.log("in action1");
    console.log(err);
    console.log("in action2");


    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};