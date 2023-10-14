import { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from "react-router-dom";

import { Loader } from "../Loader/Loader"
import { logoutUserThunk } from 'redux/operations';
import { Container, Header, Link, List } from "./Layout.styled.js";


export const Layout = () => {
  const dispath = useDispatch()

  const handleLogout = () => {
    dispath(logoutUserThunk())
  }
  
  return (
    <Container>
      <Header>
        <nav>
          <List>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/contacts'>Contacts</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>Register</Link></li>
            <button onClick={handleLogout}>Logout</button>
          </List>
        </nav>
      </Header>

      <main>
        <Suspense fallback={
          <>
            <div>Loading...</div>
            <Loader />
          </> 
        }>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  )
}