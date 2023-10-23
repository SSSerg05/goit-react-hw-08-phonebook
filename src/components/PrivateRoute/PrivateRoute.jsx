import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectAuthetification, selectIsRefreshing, } from "redux/filters/selectors";

const PrivateRoute = ({children, redirecTo = '/'}) => {
  const authetificated = useSelector(selectAuthetification);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !authetificated && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirecTo} /> : children;
}

export default PrivateRoute;