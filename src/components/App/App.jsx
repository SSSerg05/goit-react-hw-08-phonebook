import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from "react-router-dom";

import { Layout } from "./Layout";

import { selectToken, selectAuthetification } from 'redux/selectors';
import { refreshUserThunk } from 'redux/operations';
import { Container } from "./App.styled";
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';


export const App = () => {

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authetification = useSelector(selectAuthetification)

  // autoLogin current user (refresh)
  useEffect(() => {
    if (!token || authetification) return;

    dispatch(refreshUserThunk());
  }, [token, authetification, dispatch])
 
  const HomePage = lazy(() => import('../../pages/HomePage'));
  const LoginPage = lazy(() => import('../../pages/LoginPage'));
  const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
  const ContactsPage = lazy(() => import('../../pages/ContactsPage'));

    return (
      <Container>
        <Routes>
          <Route path="/" element={ <Layout />}>
            <Route index element= {<HomePage />} />
            <Route path="login" element={ <LoginPage /> } />
            <Route path="register" element={ <RegisterPage /> } />
            <Route 
              path="contacts" 
              element={ 
                <PrivateRoute redirecTo='/login'>
                  <ContactsPage /> 
                </PrivateRoute>} />
          </Route>
        </Routes>
      </Container>
    );
};

export default App
