import React, { useContext } from "react";
import { Route } from "react-router-dom";
import Context from "./context";
import Redirect from "react-router-dom/Redirect";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { state } = useContext(Context);
  return (
    <Route render={props =>
      !state.isAuth ? <Redirect to='/login' /> : <Component {...props} />}
    {...rest} />
  );
}

export default ProtectedRoute;
