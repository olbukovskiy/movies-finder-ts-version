import { ReviewsListItem } from '../ReviewsListItem/ReviewsListItem';
import { ReviewList } from './ReviewsList.styled';
import { CastCatalogueTitle } from '../CastList/CastList.styled';
import { IReview } from '../../types';

export const ReviewsList: React.FunctionComponent<{ reviews: IReview[] }> = ({
  reviews,
}) => {
  return (
    <>
      <CastCatalogueTitle>Reviews</CastCatalogueTitle>
      <ReviewList>
        {reviews.map(review => {
          return <ReviewsListItem key={review.author} review={review} />;
        })}
      </ReviewList>
    </>
  );
};
