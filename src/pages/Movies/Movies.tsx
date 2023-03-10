import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { MoviesList } from '../../components/MoviesList/MoviesList';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { SearchMoviesAPI } from '../../components/services/API';
import { Finish } from '../../components/Finish/Finish';
import { IGenre, IMovie } from '../../types';

const MoviesAPI = new SearchMoviesAPI();

export const Movies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [isRendered, setIsRendered] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const filmTitle = searchQuery.get('name') ?? '';
  const from = 'movies';

  useEffect(() => {
    MoviesAPI.searchGenres().then(response => setGenres(response!.data.genres));
  }, []);

  useEffect(() => {
    if (filmTitle === '' || !isRendered) {
      setIsRendered(true);
      return;
    }

    MoviesAPI.searchMovies(page, filmTitle).then(response => {
      setTotalPages(response!.data.total_pages);
      if (response!.data.results.length > 0) {
        toast.success(
          `Hooray! We found ${response!.data.total_results} movies`,
          {
            autoClose: 3000,
          }
        );
        setMovies(prevMovies => [...prevMovies, ...response!.data.results]);
      } else {
        toast.warn('Nothing found for your request', {
          autoClose: 3000,
        });
      }
    });
  }, [page, filmTitle, isRendered]);

  const submitHandler = (query: string): void => {
    let filmName: { name?: string };

    if (query.trim() !== '') filmName = { name: query };
    else {
      filmName = {};
      toast.error('Sorry, search field if empty :(', { autoClose: 3000 });
    }

    if (query !== filmName.name) {
      setMovies([]);
      setPage(1);
    }

    setSearchQuery(filmName);
  };

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
    <div>
      <SearchBox value={filmTitle} onSubmit={submitHandler} />
      {movies.length !== 0 && (
        <div>
          <MoviesList movies={movies} genres={genres} from={from} />
        </div>
      )}
      {page === totalPages && <Finish />}
    </div>
  );
};
