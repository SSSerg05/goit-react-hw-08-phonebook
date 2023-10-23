import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectAuthetification } from "redux/selectors";

const PublicRoute = ({children, redirecTo = '/'}) => {
  const authetificated = useSelector(selectAuthetification);

  return authetificated ? <Navigate to={redirecTo} /> : children;
}

export default PublicRoute;
