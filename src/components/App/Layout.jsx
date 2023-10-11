import { Suspense } from 'react';
import { Outlet } from "react-router-dom";

import { Container, Header, Link, List } from "./Layout.styled.js";


export const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <List>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/movies'>SearchMovies</Link></li>
          </List>
        </nav>
      </Header>

      <main>
        <Suspense fallback={<div>Loading...</div> }>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  )
}