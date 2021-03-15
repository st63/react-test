const AUTHORIZE = "AUTHORIZE";

let initialState = {
  users: [
    {
      email: "",
      password: "",
      login: "",
    },
  ],
  currentUser: {
    email: "",
    password: "",
    login: "",
    userId: "",
  },
};

const authReducer = (state = initialState, action: any) => {
  let stateCopy;
  switch (action.type) {
    case AUTHORIZE:
      stateCopy = {
        ...state,
        users: action.authorizeData,
        currentUser: action.authorizeData,
      };
      return stateCopy;
    default:
      return state;
  }
};

export default authReducer;
