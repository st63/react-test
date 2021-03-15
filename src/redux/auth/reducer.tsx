const REGISTR = "REGISTR";
const GET_USER_NAME = "GET_USER_NAME";

let initialState = {
  auth: {
    email: "",
    password: "",
    userName: "",
    userId: "",
  },
  isRegistr: false,
  currentUserName: "",
};

const authReducer = (state = initialState, action: any) => {
  let stateCopy;
  switch (action.type) {
    case REGISTR:
      stateCopy = {
        ...state,
        isRegistr: true,
      };
      return stateCopy;
    case GET_USER_NAME:
      stateCopy = {
        ...state,
        currentUserName: action.userName,
      };
      return stateCopy;
    default:
      return state;
  }
};

export default authReducer;
