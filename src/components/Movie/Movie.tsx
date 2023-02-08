import {
  findGenres,
  dateOptimizer,
  picturePathPlace,
  titleOptimizer,
} from '../services/API';

import { IMovie, IGenre } from '../../types';

import {
  MovieListItemContainer,
  MovieListItemImage,
  MoviesListData,
  MovieHeading,
  MovieData,
} from './Movie.styled';

export const Movie: React.FunctionComponent<{
  movieInfo: IMovie;
  genres: IGenre[];
}> = ({ movieInfo, genres }) => {
  const { poster_path, title, name, genre_ids, release_date, first_air_date } =
    movieInfo;
  return (
    <MovieListItemContainer>
      <MovieListItemImage>
        <img
          src={picturePathPlace(poster_path)}
          alt={titleOptimizer(title, name)}
        />
      </MovieListItemImage>
      <MoviesListData>
        <MovieHeading>{titleOptimizer(title, name)}</MovieHeading>
        <MovieData>
          <span>{findGenres(genres, genre_ids)}</span>
          <span>&#10072;</span>
          <span>{dateOptimizer(release_date, first_air_date)}</span>
        </MovieData>
      </MoviesListData>
    </MovieListItemContainer>
  );
};
