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
import { EditorState } from "draft-js";
import { convertToHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styled from "styled-components";

const EditorContainer = styled.div`
  width: 500px;
`;

export class AddPostEditor extends React.Component<any, any> {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState: any) => {
    this.setState({ editorState }, this.convertContentToHTML);
  };

  convertContentToHTML = () => {
    if (this.state.editorState) {
      const currentContentAsHTML = convertToHTML({
        entityToHTML: (entity, originalText) => {
				if (entity.type === "IMAGE") {
            return (
              <span>
						<img src={entity.data.src} />
              </span>
            );
          }
          return originalText;
        },
      })(
        // @ts-ignore
        this.state.editorState.getCurrentContent()
      );

      if (this.props.input && this.props.input.onChange) {
        this.props.input.onChange(currentContentAsHTML);
      }
    }
  };

  render() {
    return (
      <EditorContainer>
        <Editor onEditorStateChange={this.onEditorStateChange} />
      </EditorContainer>
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
