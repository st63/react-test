export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

const initialState = {};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN:
      return  {
        ...state,
        username: action.username
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
