import React from "react";
import { Form, Field } from "react-final-form";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { FORM_ERROR } from 'final-form';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { FormContainer, FormHeader, FormBody, TextField, SubmitButton, FormError } from '../../components/Form'
import { loginAction } from '../../redux/auth/actions'
import { login } from '../../api'

const LoginForm = ({ handleSubmit, submitError }: any) => (
  <FormContainer>
    <FormHeader>
      Авторизация
    </FormHeader>
    <form onSubmit={handleSubmit}>
      <FormBody>
        <Field
          name="username"
          label="username"
          component={TextField}
        />
        <Field
          name="password"
          label="password"
          component={TextField}
          type="password"
        />
        <SubmitButton>
          Войти
        </SubmitButton>
        <Link to="/registration">Зарегистрироваться</Link>
        {submitError && <FormError>{submitError}</FormError>}
      </FormBody>
    </form>
  </FormContainer>
)

const validate = (values: any) => {
  const errors: any = {}
  if (!values.username) {
    errors.username = 'Username required'
  }
  if (!values.password) {
    errors.password = 'Password required'
  }
  return errors
}

class LoginPage extends React.Component<any, any> {
  loginUser = async (formData: any) => {
    try {
      const user = await login(formData)

      if (!user) {
        return { [FORM_ERROR]: 'login failed' }
      }

      this.props.dispatch(loginAction(user))
      this.props.history.push('/')
    } catch (e) {
      return { [FORM_ERROR]: e.message }
    }
  }

  render() {
    return (
      <Form onSubmit={this.loginUser} validate={validate}>
        {LoginForm}
      </Form>
    )
  }
}


export default compose<any>(connect(), withRouter)(LoginPage);