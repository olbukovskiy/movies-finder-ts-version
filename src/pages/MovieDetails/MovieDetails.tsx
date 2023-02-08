import { useState, Suspense, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import {
  movieDetailsGenres,
  picturePathPlace,
  SearchMoviesAPI,
} from '../../components/services/API';

import { Loader } from '../../components/Loader/Loader';
import { BackLink } from '../../components/BackLink/BackLink';

import {
  MovieDetailsContainer,
  MovieDetailsImage,
  MovieDetailsInfo,
  MovieDetailsTitle,
  MovieDetailsText,
  MovieDetailsSubsectionTitle,
  MovieDetailsTextModifier,
  MovieDetailsList,
  MovieDetailsListItem,
  MovieDetailsWrapper,
  MovieWrapper,
} from './MovieDetails.styled';
import { IGenre } from '../../types';

interface IMovieParams {
  title: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  overview: string;
  genres: IGenre[];
}

const MoviesAPI = new SearchMoviesAPI();

export const MovieDetails: React.FunctionComponent = () => {
  const [movieDetails, setMovieDetails] = useState<IMovieParams | null>(null);
  const { movieId } = useParams<{ movieId: string }>();
  const location = useLocation();
  const backLinkHref: string = location.state?.from ?? '/';

  useEffect(() => {
    if (typeof movieId !== 'undefined') {
      MoviesAPI.searchMovieDetails(movieId).then(response =>
        setMovieDetails(response!.data)
      );
    }
  }, [movieId]);

  return (
    <>
      {movieDetails && (
        <div>
          <BackLink to={backLinkHref}>Back</BackLink>
          <MovieDetailsContainer>
            <MovieWrapper>
              <MovieDetailsImage>
                <img
                  src={picturePathPlace(movieDetails.poster_path)}
                  alt={movieDetails.title}
                />
              </MovieDetailsImage>
              <MovieDetailsWrapper>
                <MovieDetailsInfo>
                  <MovieDetailsTitle>{movieDetails.title}</MovieDetailsTitle>
                  <MovieDetailsText>
                    Movie rating:{' '}
                    <MovieDetailsTextModifier>
                      {movieDetails.vote_average.toFixed(1)}
                    </MovieDetailsTextModifier>
                  </MovieDetailsText>
                  <MovieDetailsText>
                    Votes:{' '}
                    <MovieDetailsTextModifier>
                      {movieDetails.vote_count}
                    </MovieDetailsTextModifier>
                  </MovieDetailsText>
                  <div>
                    <MovieDetailsSubsectionTitle>
                      Overview
                    </MovieDetailsSubsectionTitle>
                    <MovieDetailsText>{movieDetails.overview}</MovieDetailsText>
                  </div>
                  <div>
                    <MovieDetailsSubsectionTitle>
                      Genres
                    </MovieDetailsSubsectionTitle>
                    <MovieDetailsText>
                      {movieDetailsGenres(movieDetails.genres)}
                    </MovieDetailsText>
                  </div>
                </MovieDetailsInfo>
                <MovieDetailsList>
                  <MovieDetailsListItem>
                    <Link to="cast" state={{ from: backLinkHref }}>
                      Cast
                    </Link>
                  </MovieDetailsListItem>
                  <MovieDetailsListItem>
                    <Link to="reviews" state={{ from: backLinkHref }}>
                      Reviews
                    </Link>
                  </MovieDetailsListItem>
                </MovieDetailsList>
              </MovieDetailsWrapper>
            </MovieWrapper>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </MovieDetailsContainer>
        </div>
      )}
    </>
  );
};
