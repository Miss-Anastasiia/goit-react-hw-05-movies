import { GlobalStyle } from '../../styles/GlobalStyle';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Container } from '../Container/Container';
import { Link, Nav, Wrapper } from './LayoutStyled';
import { Loader } from '../Loader/Loader';

export const Layout = () => {
  return (
    <>
      <Wrapper>
        <GlobalStyle />
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
        <Suspense fallback={<Loader />}>
          <Container>
            <Outlet />
            <Toaster />
          </Container>
        </Suspense>
      </Wrapper>
    </>
  );
};
