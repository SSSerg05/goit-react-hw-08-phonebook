import { Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from "react-router-dom";

import { Loader } from "../Loader/Loader"
import { logoutUserThunk } from 'redux/operations';
import { selectAuthetification } from 'redux/selectors';
import { Container, Header, Link, List, } from "./Layout.styled.js";


export const Layout = () => {
  const dispath = useDispatch()
  const authetification = useSelector(selectAuthetification);

  const handleLogout = () => {
    dispath(logoutUserThunk())
  }


  return (
    // <Theme theme={ligthTheme}>
      <Container>
        <Header>
          <nav>
            <List>
              <li><Link to='/'>Home</Link></li>
              { (authetification && ( 
                <>
                  <li><Link to='/contacts'>Contacts</Link></li>
                  <li><button onClick={handleLogout}>Logout</button></li>
                </>
              )) || (
                <>
                  <li><Link to='/login'>Login</Link></li>
                  <li><Link to='/register'>Register</Link></li>
                </>
              )}
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
    // </Theme>
  )
}