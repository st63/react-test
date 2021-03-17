import React from "react";
import { FORM_ERROR } from 'final-form';
import { Form, Field } from "react-final-form";
import { withRouter } from "react-router";
import { registration } from '../../api'
import { FormContainer, FormHeader, FormBody, TextField, SubmitButton, FormError } from '../../components/Form'

const RegistrationForm = ({ handleSubmit, submitError }: any) => (
  <FormContainer>
    <FormHeader>
      Регистрация
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
          Зарегистрироваться
        </SubmitButton>
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

class RegistrationPage extends React.Component<any, any> {
  registrateUser = async (formData: any) => {
    try {
      await registration(formData)
      this.props.history.push("/login")
    } catch (e: any) {
      return { [FORM_ERROR]: e.message }
    }
  }

  render() {
    return (
      <Form onSubmit={this.registrateUser} validate={validate}>
        {RegistrationForm}
      </Form>
    )
  }
}

export default withRouter(RegistrationPage);
