import {
  GET_USER,
  GET_USER_ALERT,
  GET_USER_ERROR,
  GET_USER_LOADING,
  GET_USER_MODE,
  GET_USER_STORE,
  SET_USER_LOADING,
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
    address: null,
    referrals: [],
    quizzes: 0,
    age: 0,
    category: "",
    session: [],
    coinsHistory: [],
  },
  mode: "",
  store: "",
  alert: [],
};

// const initialState = {
//   loading: false,
//   error: false,
//   user: {
//     email: "akash1.wisechamps@gmail.com",
//     phone: "917018178377",
//     name: "Akash",
//     credits: 155,
//     coins: 40505,
//     id: "4878003000003001027",
//     studentName: "Akash",
//     address: null,
//     referrals: [
//       {
//         Student_Name: "Akash Kumar",
//         Phone: "91407878454",
//         id: "4878003000003001028",
//         quizAttempted: 4,
//       },
//       {
//         Student_Name: "Akash Kumar",
//         Phone: "91407878454",
//         id: "4878003000003001028",
//         quizAttempted: 4,
//       },
//       {
//         Student_Name: "Akash Kumar",
//         Phone: "91407878454",
//         id: "4878003000003001028",
//         quizAttempted: 4,
//       },
//       {
//         Student_Name: "Akash Kumar",
//         Phone: "91407878454",
//         id: "4878003000003001028",
//         quizAttempted: 12,
//       },
//       {
//         Student_Name: "Akash Kumar",
//         Phone: "91407878454",
//         id: "4878003000003001028",
//         quizAttempted: 4,
//       },
//     ],
//     quizzes: 54650,
//     age: 213,
//     category: "Active",
//     session: [],
//     coinsHistory: [
//       {
//         Coins: 500,
//         Updated_Date: "2024-03-05",
//         id: "4878003000017076271",
//         Action_Type: "Credit",
//         Description: "First 50 quizzes completed",
//       },
//       {
//         Coins: 2000,
//         Updated_Date: "2024-03-03",
//         id: "4878003000017076272",
//         Action_Type: "Debit",
//         Description: "Purchased a Gift",
//       },
//       {
//         Coins: 200,
//         Updated_Date: "2024-02-28",
//         id: "4878003000017076273",
//         Action_Type: "Credit",
//         Description: "Lucky Draw Winner",
//       },
//     ],
//   },
//   mode: "user",
//   store: "",
//   alert: ["address"],
// };

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case SET_USER_LOADING: {
      return {
        ...state,
        loading: false,
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
