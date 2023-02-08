import { useState, useEffect } from 'react';

import { MoviesList } from '../../components/MoviesList/MoviesList';
import { SearchMoviesAPI } from '../../components/services/API';
import { Finish } from '../../components/Finish/Finish';
import { TrendingHeading } from './Home.styled';
import { IGenre, IMovie } from '../../types';

const MoviesAPI = new SearchMoviesAPI();

export const Home: React.FunctionComponent = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<null | number>(null);
  const [isRendered, setIsRendered] = useState<boolean>(false);
  const from = 'home';

  useEffect(() => {
    MoviesAPI.searchGenres().then(response => {
      setGenres(response!.data.genres);
    });
  }, []);

  useEffect(() => {
    if (!isRendered) {
      setIsRendered(true);
      return;
    }

    MoviesAPI.searchTrendingMovies(page.toString()).then(response => {
      setTotalPages(response!.data.total_pages);
      setMovies(prevMovies => [...prevMovies, ...response!.data.results]);
    });
  }, [page, isRendered]);

  const scrollHandler = () => {
    const { scrollHeight, clientHeight, scrollTop } = document.documentElement;

    if (clientHeight + scrollTop + 1 >= scrollHeight) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <>
      <TrendingHeading>Trending today</TrendingHeading>
      {movies.length !== 0 && (
        <MoviesList movies={movies} genres={genres} from={from} />
      )}
      {page === totalPages && <Finish />}
    </>
  );
};
