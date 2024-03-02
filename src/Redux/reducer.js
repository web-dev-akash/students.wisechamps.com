import {
  GET_USER,
  GET_USER_ALERT,
  GET_USER_ERROR,
  GET_USER_LOADING,
  GET_USER_MODE,
  GET_USER_STORE,
} from "./actionTypes";

const initialState = {
  loading: false,
  error: false,
  user: {
    email: "",
    phone: "",
    name: "",
    credits: 0,
    coins: 0,
    id: "",
    studentName: "",
    referrals: [],
    quizzes: 0,
    age: 0,
    category: "",
    session: [],
  },
  mode: "",
  store: "",
  alert: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_USER_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_USER: {
      return {
        ...state,
        loading: false,
        error: false,
        user: payload,
      };
    }
    case GET_USER_MODE: {
      return {
        ...state,
        loading: false,
        error: false,
        mode: payload,
      };
    }
    case GET_USER_STORE: {
      return {
        ...state,
        store: payload,
      };
    }
    case GET_USER_ALERT: {
      return {
        ...state,
        alert: payload,
      };
    }
    default: {
      return state;
    }
  }
};
