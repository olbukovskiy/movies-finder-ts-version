import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { BsFilm } from 'react-icons/bs';
import { ToastContainer } from 'react-toastify';

import { NavItems } from '../NavItems/NavItems';
import { Loader } from '../Loader/Loader';

import 'react-toastify/dist/ReactToastify.css';
import { AppContainer, Section, Header } from './SharedLayout.styled';

export const SharedLayout: React.FunctionComponent = () => {
  return (
    <>
      <AppContainer>
        <Header>
          <BsFilm color="#fff" size={32} />
          <NavItems />
        </Header>
        <Section>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Section>
        <ToastContainer />
      </AppContainer>
    </>
  );
};
