import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { SearchMoviesAPI } from '../services/API';
import { IReview } from '../../types';
import { ReviewsList } from '../ReviewsList/ReviewsList';

const MoviesAPI = new SearchMoviesAPI();

export const Reviews: React.FunctionComponent = () => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { movieId } = useParams<{ movieId: string }>();

  useEffect(() => {
    MoviesAPI.searchMovieReviews(movieId).then(resolve => {
      setReviews(resolve!.data.results);
      setIsLoading(false);
    });
  }, [movieId]);

  return (
    <Fragment>
      {!!reviews && !isLoading && (
        <div>
          {reviews.length === 0 && (
            <div>We don't have any reviews for this movie</div>
          )}
          {reviews.length > 0 && (
            <div>
              <ReviewsList reviews={reviews} />
            </div>
          )}
        </div>
      )}
    </Fragment>
  );
};
