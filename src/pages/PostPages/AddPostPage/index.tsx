import React from "react";
import { Form, Field } from "react-final-form";
import { addPost } from "../../../redux/actions";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const TitleTextFieldAdapter = ({ input, meta, ...rest }: any) => (
  <TextField {...input} {...rest} fullWidth label="Заголовок" />
);

const BodyTextFieldAdapter = ({ input, meta, ...rest }: any) => (
  <TextField
    {...input}
    {...rest}
    fullWidth
    label="Текст поста"
    id="standard-multiline-static"
    multiline
    rows={10}
  />
);

const StyledAddPostPaper = styled(Paper)`
  border-radius: 15px;
  padding: 20px;
`;

const StyledButton = styled(Button)`
  margin: 20px 0px 0px 0px;
`;

const AddPost = (props: any) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12}>
        <StyledAddPostPaper>
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
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="flex-start"
                >
                  <StyledButton
                    type="submit"
                    size="small"
                    variant="contained"
                    color="primary"
                  >
                    Создать
                  </StyledButton>
                </Grid>
              </form>
            )}
          </Form>
        </StyledAddPostPaper>
      </Grid>
    </Grid>
  );
};

let mapStateToProps = (state: any) => {
  return {};
};

const AddPostContainer = connect(mapStateToProps, { addPost })(AddPost);

export default AddPostContainer;
