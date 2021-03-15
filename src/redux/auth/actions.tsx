import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const registr = (formObj: any) => {
  return (dispatch: any) => {
    axios("http://localhost:3200/users", {
      method: "POST",
      data: {
        userName: formObj.userName,
        password: formObj.password,
        userId: uuidv4(),
      },
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response: any) => {
      dispatch(registrAction());
    });
  };
};

export const registrAction = () => ({
  type: "REGISTR",
});

export const getAuth = (authData: any) => {
  return (dispatch: any) => {
    axios
      .get(
        `http://localhost:3200/users?userName=${authData.userName}&password=${authData.password}`
      )
      .then((response: any) => {
        dispatch(getUserName(response.data[0].userName));
      });
  };
};

export const getUserName = (userName: any) => ({
	type: "GET_USER_NAME",
	userName,
 });

