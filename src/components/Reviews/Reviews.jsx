import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../services/api';
import { Title, SecondaryMovieTitle } from '../../styles/style';
import { ReviewsItem, ReviewsList, ReviewText } from './ReviewsStyled';
import { Loader } from '../Loader/Loader';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { moviesId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        await fetchReviews(moviesId).then(data => setReviews(data.results));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [moviesId]);

  const showNoReviews = !loading && reviews.length === 0;

  return (
    <>
      {loading && <Loader />}
      {showNoReviews && <Title>No reviews for this movie</Title>}
      <ReviewsList>
        {!error &&
          reviews.map(review => (
            <ReviewsItem key={review.id}>
              <SecondaryMovieTitle>{review.author} :</SecondaryMovieTitle>
              <ReviewText>{review.content}</ReviewText>
            </ReviewsItem>
          ))}
      </ReviewsList>
    </>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};