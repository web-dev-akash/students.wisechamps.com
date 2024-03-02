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
    email: "akash1.wisechamps@gmail.com",
    phone: "917018178377",
    name: "Akash",
    credits: 0,
    coins: 12,
    id: "12",
    studentName: "Akash",
    referrals: [
      {
        Credits: 1,
        Email: "rnksngw@gmail.com",
        Student_Name: "Daksh sangwan",
        Phone: "918818079636",
        id: "4878003000015261199",
        Student_Grade: "7",
        quizAttempted: 5,
      },
      {
        Credits: 7,
        Email: "vineetsinghaldelhi@msn.com",
        Student_Name: "Garvit Singhal",
        Phone: "917503632900",
        id: "4878003000016121090",
        Student_Grade: "2",
        quizAttempted: 3,
      },
      {
        Credits: 3,
        Email: "dk111hack@gmail.com",
        Student_Name: "Anshika",
        Phone: "918607644477",
        id: "4878003000012496001",
        Student_Grade: "5",
        quizAttempted: 1,
      },
      {
        Credits: 10,
        Email: "anjuhooda84@gmail.com",
        Student_Name: "Makes",
        Phone: "918447786905",
        id: "4878003000013078049",
        Student_Grade: "5",
        quizAttempted: 0,
      },
      {
        Credits: 10,
        Email: "sandeepstar999@gmail.com",
        Student_Name: "Bhumi Mittal",
        Phone: "918168171705",
        id: "4878003000013105225",
        Student_Grade: "5",
        quizAttempted: 0,
      },
      {
        Credits: 10,
        Email: "sehgalsunena@gmail.com",
        Student_Name: "Chhavi",
        Phone: "917988974212",
        id: "4878003000013870155",
        Student_Grade: "5",
        quizAttempted: 0,
      },
    ],
    quizzes: 15,
    age: 120,
    category: "Active",
    session: [],
  },
  mode: "user",
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
