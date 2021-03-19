import React from "react";
import { Form, Field } from "react-final-form";
import { FORM_ERROR } from "final-form";
import { connect } from "react-redux";
import {
  FormContainer,
  FormHeader,
  FormBody,
  TextField,
  SubmitButton,
  FormError,
} from "../../../components/Form";
import { createPostAction } from "../../../redux/posts/actions";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export class AddPostEditor extends React.Component<any, any> {
  onEditorStateChange = (e: any) => {
	  console.log(this.props);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <Editor
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onChange={this.onEditorStateChange}
        />
      </div>
    );
  }
}

const AddPostForm = ({ handleSubmit, submitError }: any) => (
  <FormContainer>
    <FormHeader>Напишите пост</FormHeader>
    <form onSubmit={handleSubmit}>
      <FormBody>
        <Field
          name="title"
          label="Заголовок"
          component={TextField}
          type="text"
        />
        <Field name="body" component={AddPostEditor} type="text" />
        <SubmitButton>Добавить</SubmitButton>
        {submitError && <FormError>{submitError}</FormError>}
      </FormBody>
    </form>
  </FormContainer>
);

const validate = (values: any) => {
  const errors: any = {};
  if (!values.title) {
    errors.title = "Title required";
  }
  if (!values.body) {
    errors.body = "Text required";
  }
  return errors;
};

class AddPost extends React.Component<any, any> {
  createPost = async (formData: any) => {
    try {
      if (!formData) {
        return { [FORM_ERROR]: "post failed" };
      }

      this.props.dispatch(createPostAction(formData));
      this.props.history.push("/");
    } catch (e) {
      return { [FORM_ERROR]: e.message };
    }
  };

  render() {
    return (
      <Form onSubmit={this.createPost} validate={validate}>
        {AddPostForm}
      </Form>
    );
  }
}

const AddPostContainer = connect()(AddPost);

export default AddPostContainer;
