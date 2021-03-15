const ADD_USER = "ADD_USER";

let initialState = {
  users: [
    {
      email: "",
      password: "",
      userName: "",
      id: "",
    },
  ],
  currentUser: {
    email: "",
    password: "",
    userName: "",
    userId: "",
  },
};

const usersReducer = (state = initialState, action: any) => {
  let stateCopy;
  switch (action.type) {
    case ADD_USER:
      stateCopy = {
        ...state,
        users: action.newUserData,
        currentUser: action.newUserData,
      };
      return stateCopy;
    default:
      return state;
  }
};

export default usersReducer;
