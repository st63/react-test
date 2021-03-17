import React from "react";
import Paper from "@material-ui/core/Paper";
import MaterialTextField from "@material-ui/core/TextField";
import MaterialButton from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

export const FormContainer = styled(Paper)`
  overflow: hidden;
`;

export const FormHeader = styled(Typography)`
  text-align: center;
  background-color: #4e73df;
  background-image: linear-gradient(180deg, #4e73df 10%, #224abe 100%);
  background-size: cover;
  padding: 20px;
  margin: 0;
  color: #fff;
`;

FormHeader.defaultProps = {
  variant: "h5",
  gutterBottom: true,
};

export const FormBody = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
`;

export const TextField = ({ input, meta, ...rest }: any) => (
  <MaterialTextField
    {...input}
    {...rest}
    error={meta.error && meta.touched}
    helperText={meta.error && meta.touched ? meta.error : ""}
    fullWidth
  />
);

export const SubmitButton = styled(MaterialButton)`
  margin: 20px 0;
`;

SubmitButton.defaultProps = {
  variant: "contained",
  color: "primary",
  type: "submit",
};

export const FormError = styled(Typography)`
  color: #f44336;
`;

FormError.defaultProps = {
  variant: "caption",
  display: "block",
  gutterBottom: true,
};
