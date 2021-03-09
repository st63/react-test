import React from "react";
import { Form, Field } from "react-final-form";
import { addPost } from "../../../redux/actions";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const TitleTextFieldAdapter = ({ input, meta, ...rest }: any) => (
  <TextField
    {...input}
    {...rest}
    variant="outlined"
    id="outlined-basic"
    label="Заголовок"
    size="small"
  />
);

const BodyTextFieldAdapter = ({ input, meta, ...rest }: any) => (
  <TextField
    {...input}
    {...rest}
    variant="outlined"
    id="outlined-basic"
    label="Текст"
    size="small"
  />
);

const AddPost = (props: any) => {
  return (
    <Form onSubmit={props.addPost}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="title"
            component={TitleTextFieldAdapter}
            type="text"
          ></Field>
          <Field
            name="body"
            component={BodyTextFieldAdapter}
            type="text"
          ></Field>
          <Button type="submit" size="small" variant="outlined" color="primary">
            Отправить
          </Button>
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
