import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const addUser = (formObj: any) => {
	return (dispatch: any) => {
	  axios("http://localhost:3200/users", {
		 method: "POST",
		 data: {
			email: formObj.email,
			password: formObj.password,
			login: formObj.login,
			userId: uuidv4(),
		 },
		 headers: {
			"Content-type": "application/json; charset=UTF-8",
		 },
	  }).then((response: any) => {
		 console.log(response.data);
		 dispatch(addUserAction(response.data));
	  });
	};
 };
 

export const addUserAction = (newUserData: any) => ({
	type: "ADD_USER",
	newUserData,
 });
 