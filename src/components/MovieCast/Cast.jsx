import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../services/api';
import { MovieText, Title, SecondaryMovieTitle } from '../../styles/style';
import { ImageCast, CastItem } from './CastStyled';
import { Loader } from '../Loader/Loader';
import { setSliderSettings } from '../slider/slider';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Cast() {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        await fetchCast(moviesId).then(data => setActors(data.cast));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [moviesId]);

  const showNoActors = !loading && actors.length === 0;

  return (
    <>
      {loading && <Loader />}
      {showNoActors && <Title>No actors for this movie</Title>}
      <Slider {...setSliderSettings(actors.length)} width="100%">
        {!error &&
          actors &&
          actors.map(({ id, character, name, profile_path }) => (
            <CastItem key={id}>
              {profile_path ? (
                <ImageCast
                  src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                  alt=""
                />
              ) : (
                <ImageCast src='https://icon-library.com/images/no-photo-available-icon/no-photo-available-icon-20.jpg' alt="" />
              )}
              {name ? (
                <SecondaryMovieTitle>{name}</SecondaryMovieTitle>
              ) : (
                <SecondaryMovieTitle>No actor`s name</SecondaryMovieTitle>
              )}
              {character ? (
                <MovieText>{character}</MovieText>
              ) : (
                <MovieText>No actor`s character</MovieText>
              )}
            </CastItem>
          ))}
      </Slider>
    </>
  );
}

Cast.propTypes = {
  searchFilms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      character: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
      backdrop_path: PropTypes.string.isRequired,
    })
  ),
};