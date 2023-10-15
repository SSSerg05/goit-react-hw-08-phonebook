import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from "react-router-dom";

import { Layout } from "./Layout";

// import { Phonebook } from '../Phonebook/Phonebook';
import { selectToken } from 'redux/selectors';
import { refreshUserThunk } from 'redux/operations';
import { Container } from "./App.styled";


export const App = () => {

  const dispatch = useDispatch();
  const token = useSelector(selectToken);


  // autoLogin current user
  useEffect(() => {
    if (!token) return;

    dispatch(refreshUserThunk());
  }, [token, dispatch])
 
  const Home = lazy(() => import('../../pages/Home'));
  const Login = lazy(() => import('../../pages/Login'));
  const Register = lazy(() => import('../../pages/Register'));
  const Contacts = lazy(() => import('../../pages/Contacts'));

    return (
      <Container>
        <Routes>
          <Route path="/" element={ <Layout />}>
            <Route index element= {<Home />} />
            <Route path="login" element={ <Login /> } />
            <Route path="register" element={ <Register /> } />
            <Route path="contacts" element={ <Contacts /> } />
          </Route>
        </Routes>
      </Container>
    );


  // return (
  //   <Container>
  //     <Phonebook />
  //   </Container>
  // );
};

export default App
