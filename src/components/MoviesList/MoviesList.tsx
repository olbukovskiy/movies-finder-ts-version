import { Link, useLocation } from 'react-router-dom';

import { Movie } from '../Movie/Movie';
import { MovieList } from './MovieList.styled';
import React from 'react';
import { IGenre, IMovie } from '../../types';

export const MoviesList: React.FunctionComponent<{
  movies: IMovie[];
  genres: IGenre[];
  from: string;
}> = ({ movies, genres, from }) => {
  const location = useLocation();
  return (
    <div style={{ padding: `${(props: any) => props.theme.space[3]}px` }}>
      <MovieList>
        {from === 'home'
          ? movies.map(movie => {
              return (
                <li key={movie.id}>
                  <Link to={`movies/${movie.id}`} state={{ from: location }}>
                    <Movie movieInfo={movie} genres={genres} />
                  </Link>
                </li>
              );
            })
          : movies.map(movie => {
              return (
                <li key={movie.id}>
                  <Link to={`${movie.id}`} state={{ from: location }}>
                    <Movie movieInfo={movie} genres={genres} />
                  </Link>
                </li>
              );
            })}
      </MovieList>
    </div>
  );
};
