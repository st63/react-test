import React from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { getAuth } from '../../redux/auth/actions';
import { Redirect } from "react-router";

const Authorize = (props: any) => {
	if (props.userName) return  <Redirect to={'/'} />

  return (
    <Form
      onSubmit={(formObj) => {
			props.getAuth(formObj);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="userName"
            placeholder="Введите ваше имя пользователя"
            component="input"
            type="text"
          ></Field>
          <br />
          <Field
            name="password"
            placeholder="Введите пароль"
            component="input"
            type="text"
          ></Field>
          <br />
          <button type="submit">Войти</button>
        </form>
      )}
    </Form>
  );
};

let mapStateToProps = (state: any) => {
	return {
		userName: state.auth.currentUserName,
  };
};

const AuthorizeContainer = connect(mapStateToProps, {getAuth})(Authorize);

export default AuthorizeContainer;
