import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Home = lazy(() =>
  import('../../pages/Home/Home').then(module => ({
    ...module,
    default: module.Home,
  }))
);

const MovieDetails = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails').then(module => ({
    ...module,
    default: module.MovieDetails,
  }))
);

const Movies = lazy(() =>
  import('../../pages/Movies/Movies').then(module => ({
    ...module,
    default: module.Movies,
  }))
);

const Cast = lazy(() =>
  import('../../components/Cast/Cast').then(module => ({
    ...module,
    default: module.Cast,
  }))
);

const Reviews = lazy(() =>
  import('../../components/Reviews/Reviews').then(module => ({
    ...module,
    default: module.Reviews,
  }))
);

const SharedLayout = lazy(() =>
  import('../../components/SharedLayout/SharedLayout').then(module => ({
    ...module,
    default: module.SharedLayout,
  }))
);

export const App: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
