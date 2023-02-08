import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ICastItem } from '../../types';

import { CastList } from '../CastList/CastList';
import { SearchMoviesAPI } from '../services/API';

const MoviesAPI = new SearchMoviesAPI();

export const Cast = () => {
  const [cast, setCast] = useState<ICastItem[]>([]);
  const { movieId } = useParams<{ movieId: string }>();

  useEffect(() => {
    MoviesAPI.searchMovieCredits(movieId).then(resolve => {
      setCast(resolve!.data.cast);
    });
  }, [movieId]);

  return (
    <Fragment>
      {cast.length === 0 && (
        <div>We don't have any information about this movie crew</div>
      )}
      {cast.length > 0 && <CastList cast={cast} />}
    </Fragment>
  );
};
