import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from "react-router-dom";

import { Loader } from "../Loader/Loader"
import { selectAuthetification } from 'redux/selectors';
import Logout from 'components/Logout/Logout';
import { Container, Header, Link, List, Nav } from "./Layout.styled.js";
import { Theme } from 'components/Theme/Theme';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { UserRegistration } from 'components/UserRegistration/UserRegestraation';


export const Layout = () => {
  
  const authetificated = useSelector(selectAuthetification);

  return (
    // <Theme theme={ligthTheme}>
      <Container>
        <Header>
          <Nav>

           {(authetificated && <UserMenu />) || <UserRegistration />}

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