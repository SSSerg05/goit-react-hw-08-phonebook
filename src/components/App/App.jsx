import { useEffect, lazy, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from "react-router-dom";

import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import { Layout } from "./Layout";
import { selectToken, selectAuthetification } from 'redux/selectors';
import { refreshUserThunk } from 'redux/authOperations';
import { Container } from "./App.styled";


export const App = () => {

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authetificated = useSelector(selectAuthetification)

  // autoLogin current user (refresh)
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch])
 
  const HomePage = lazy(() => import('../../pages/HomePage'));
  const LoginPage = lazy(() => import('../../pages/LoginPage'));
  const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
  const ContactsPage = lazy(() => import('../../pages/ContactsPage'));


  return ( 
    <Container>
      <Routes>
        <Route path="/" element={ <Layout />}>
          <Route index element= {<HomePage />} />

          <Route path="/login" element={ <LoginPage /> } />
          {/* <Route 
            path="login" 
            element={ 
              <PublicRoute redirectTo="/contacts">
                <LoginPage />
              </PublicRoute >
          }/> */}
          
          <Route path="register" element={ <RegisterPage /> } />
          {/* <Route 
            path="register" 
            element={ 
              <PublicRoute redirectTo="/contacts">
                <RegisterPage />
              </PublicRoute >
          }/> */}

          <Route 
            path="contacts" 
            element={ 
              <PrivateRoute redirecTo='/login'>
                <ContactsPage /> 
              </PrivateRoute>} 
          />
        </Route>
      </Routes>
    </Container>
  );
};

export default App
