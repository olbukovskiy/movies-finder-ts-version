import { IReview } from '../../types';

import { ReviewListItemTitle } from './ReviewsListItem.styled';
import { ReviewListItem } from './ReviewsListItem.styled';
export const ReviewsListItem: React.FunctionComponent<{ review: IReview }> = ({
  review,
}) => {
  return (
    <ReviewListItem>
      <ReviewListItemTitle>Author: {review.author}</ReviewListItemTitle>
      <p>{review.content}</p>
    </ReviewListItem>
  );
};
