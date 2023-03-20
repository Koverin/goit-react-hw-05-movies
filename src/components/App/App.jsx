import { NavLink, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { HeaderNav, Navigate, Title } from './App.styled';

import { Loader } from '../Loader/Loader';
import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';
import NotFound from '../../pages/NotFound/NotFound';

export function App() {
  return (
    <>
      <HeaderNav>
        <Navigate>
          <NavLink style={{ textDecoration: 'none' }} to="/">
            <Title>Home</Title>
          </NavLink>
          <NavLink style={{ textDecoration: 'none' }} to="/movies">
            <Title> Movies</Title>
          </NavLink>
        </Navigate>
      </HeaderNav>
      <div>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}
