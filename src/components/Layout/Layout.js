import { useLocation, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { ToastContainer } from 'react-toastify';
import { Loader } from 'components/Skeleton';
import { Container, Main } from './Layout.styled';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  const location = useLocation();
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <Container>
      {isRefreshing ? (
        <Loader />
      ) : (
        <>
          <AppBar />
          <Main>
            <Suspense fallback={<Loader page={location.pathname} />}>
              <Outlet />
            </Suspense>
          </Main>
        </>
      )}
      <ToastContainer />
    </Container>
  );
};
