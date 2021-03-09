import React from "react";
import { Form, Field } from "react-final-form";
import { addPost } from "../../../redux/actions";
import { connect } from "react-redux";

const AddPost = (props: any) => {
  return (
    <Form onSubmit={props.addPost}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="title"
            component="input"
            placeholder="Title"
            type="text"
          ></Field>
          <Field
            name="body"
            component="input"
            placeholder="Body"
            type="text"
          ></Field>
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
