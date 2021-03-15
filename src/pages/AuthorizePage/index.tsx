import React from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { authorize } from "../../redux/actions";

const Authorize = (props: any) => {
  return (
    <Form onSubmit={props.authorize}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="email" placeholder='Ваш email' component="input" type="text"></Field><br/>
          <Field name="password" placeholder='Придумайте password' component="input" type="text"></Field><br/>
          <Field name="login" placeholder='Придумайте login' component="input" type="text"></Field><br/>
          <button type="submit">Зарегистрироваться</button>
        </form>
      )}
    </Form>
  );
};

let mapStateToProps = (state: any) => {
  return {};
};

const AuthorizeContainer = connect(mapStateToProps, { authorize })(Authorize);

export default AuthorizeContainer;
