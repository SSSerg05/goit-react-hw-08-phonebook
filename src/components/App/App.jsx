import { lazy } from 'react';
import { Route, Routes } from "react-router-dom";

import { Layout } from "./Layout";

import { Phonebook } from '../Phonebook/Phonebook';
import { Container } from "./App.styled";


export const App = () => {
 
  const Home = lazy(() => import('../../pages/Home'));
  const Login = lazy(() => import('../../pages/Login'));
  const Regester = lazy(() => import('../../pages/Regester'));
  const Contacts = lazy(() => import('../../pages/Contacts'));
  // const Cast = lazy(() => import('./Cast/Сast'));
  // const Reviews = lazy(() => import('./Review/Reviews'));
  
    return (
  
      <Routes>
        <Route path="/" element={ <Layout />}>
          <Route index element= {<Home />} />
          <Route path="login" element={ <Login /> } />
          <Route path="regester" element={ <Regester /> } />
          <Route path="contacts" element={ <Contacts /> } />
          {/* <Route path="movies/:movieId" element={ <MovieDetails /> }> */}
            {/* <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} /> */}
          {/* </Route> */}
        </Route>
      </Routes>
  
    );


  // return (
  //   <Container>
  //     <Phonebook />
  //   </Container>
  // );
};
