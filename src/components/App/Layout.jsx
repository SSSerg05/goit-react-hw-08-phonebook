import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from "react-router-dom";

import { Loader } from "../Loader/Loader"
import { selectAuthetification } from 'redux/selectors';
import Logout from 'components/Logout/Logout';
import { Container, Header, Link, List, Nav } from "./Layout.styled.js";
import { Theme } from 'components/Theme/Theme';


export const Layout = () => {
  
  const authetificated = useSelector(selectAuthetification);

  return (
    // <Theme theme={ligthTheme}>
      <Container>
        <Header>
          <Nav>

            <List>
              <li><Link to='/'>Home</Link></li>
              { (authetificated && ( 
                <>
                  <li><Link to='/contacts'>Contacts</Link></li>
                </>
              )) || (
                <>
                  <li><Link to='/login'>Login</Link></li>
                  <li><Link to='/register'>Register</Link></li>
                </>
              )}
            </List>
            
            { authetificated && ( <Logout /> ) || ( <Theme />) }

          </Nav>
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