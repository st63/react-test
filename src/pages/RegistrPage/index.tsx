import React from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { registr } from "../../redux/auth/actions";

const Registr = (props: any) => {
	if (props.isRegistr) return  <Redirect to={'/authorize'} />

  return (
    <Form onSubmit={props.registr}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="userName"
            placeholder="Придумайте имя пользователя"
            component="input"
            type="text"
          ></Field>
          <br />
          <Field
            name="password"
            placeholder="Придумайте пароль"
            component="input"
            type="text"
          ></Field>
          <br />
          <button type="submit">Зарегистрироваться</button>
        </form>
      )}
    </Form>
  );
};

let mapStateToProps = (state: any) => {
	return {
	  isRegistr: state.auth.isRegistr,
  };
};

const RegistrContainer = connect(mapStateToProps, { registr })(Registr);

export default RegistrContainer;
