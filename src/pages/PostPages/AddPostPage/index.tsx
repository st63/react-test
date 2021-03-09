import React from "react";
import { Form, Field } from "react-final-form";
import { addPost } from "../../../redux/actions";
import { connect } from 'react-redux';

const AddPost = (props: any) => {
  return (
    <Form
      onSubmit={(formObj) => {
			  props.addPost(formObj);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="title">
            {({ input }) => (
              <input placeholder="Title" type="title" {...input} />
            )}
          </Field>
          <Field name="body">
            {({ input }) => <input placeholder="Body" type="text" {...input} />}
          </Field>
          <button type="submit">Submit</button>
        </form>
      )}
    </Form>
  );
};

let mapStateToProps = (state: any) => {
  return {};
};

const AddPostContainer = connect(mapStateToProps, { addPost })(AddPost);

export default AddPostContainer;
