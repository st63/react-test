const AUTHORIZE = "AUTHORIZE";

let initialState = {
  auth:
    {
      email: "",
      password: "",
      userName: "",
      userId: "",
    },
};

const authReducer = (state = initialState, action: any) => {
  let stateCopy;
  switch (action.type) {
    case AUTHORIZE:
      stateCopy = {
        ...state,
        auth: action.authorizeData,
      };
      return stateCopy;
    default:
      return state;
  }
};

export default authReducer;
