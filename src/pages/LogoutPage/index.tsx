import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logoutAction } from "../../redux/auth/actions"

const LogoutPage = ({ logout }: any) => {
  React.useEffect(() => {
    logout()
  }, [logout]);

  return <Redirect push to="/login" />
};

export default connect(() => {}, { logout: logoutAction })(LogoutPage);
