import axios from "axios";
import {
  GET_USER,
  GET_USER_ALERT,
  GET_USER_ERROR,
  GET_USER_LOADING,
  GET_USER_MODE,
  GET_USER_STORE,
} from "./actionTypes";

export const getLoading = () => ({
  type: GET_USER_LOADING,
});

export const getError = () => ({
  type: GET_USER_ERROR,
});

export const setUser = (payload) => ({
  type: GET_USER,
  payload,
});

export const setMode = (payload) => ({
  type: GET_USER_MODE,
  payload,
});

export const setStore = (payload) => ({
  type: GET_USER_STORE,
  payload,
});

export const setAlert = (payload) => ({
  type: GET_USER_ALERT,
  payload,
});

export const fetchUser = (email) => async (dispatch) => {
  try {
    dispatch(getLoading());
    const today = new Date();
    const dayOfWeek = today.getDay();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const url = `https://backend.wisechamps.com/student`;
    const res = await axios.post(url, { email: email });
    const mode = res.data.mode;
    if (res.data.credits === 0) {
      dispatch(setAlert("credits"));
    } else if (
      (dayOfWeek >= 4 &&
        dayOfWeek <= 6 &&
        (hours > 18 || (hours === 18 && minutes >= 50)) &&
        (hours < 19 || (hours === 19 && minutes < 0))) ||
      (dayOfWeek === 0 &&
        hours === 10 &&
        minutes >= 50 &&
        hours === 11 &&
        minutes < 0)
    ) {
      dispatch(setAlert("aboutToStart"));
    } else if (
      (dayOfWeek >= 4 &&
        dayOfWeek <= 6 &&
        ((hours === 19 && minutes >= 0) || (hours === 19 && minutes < 30))) ||
      (dayOfWeek === 0 &&
        ((hours === 11 && minutes >= 0) || (hours === 11 && minutes < 30)))
    ) {
      dispatch(setAlert("inProgress"));
    } else if (res.data.credits <= 2) {
      dispatch(setAlert("lowCredits"));
    }
    if (res.data.status === 200) {
      dispatch(
        setUser({
          name: res.data.name,
          credits: res.data.credits,
          coins: res.data.coins,
          email: email,
          phone: res.data.phone,
          id: res.data.contactId,
          studentName: res.data.studentName,
          referrals: res.data.referrals === 0 ? [] : res.data.referrals,
          quizzes: res.data.quizzes,
          age: res.data.age,
          category: res.data.category,
        })
      );
    }

    dispatch(setMode(mode));
  } catch (error) {
    dispatch(getError());
  }
};

export const getStoreURL = (email) => async (dispatch) => {
  try {
    const url = `https://backend.wisechamps.com/pointagram/hash`;
    const res = await axios.post(url, { email: email });
    if (res.data.status === 200) {
      dispatch(
        setStore(
          `https://tv.pointagram.com/v/?showprofile=1&prid=${res.data.playerId}&ts=${res.data.timestamp}&client=${res.data.appId}&code=${res.data.hmac}&show=rewardstore`
        )
      );
    }
  } catch (error) {
    dispatch(getError());
  }
};
