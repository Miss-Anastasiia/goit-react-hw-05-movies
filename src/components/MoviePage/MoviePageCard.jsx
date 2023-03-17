import PropTypes from 'prop-types';
import { MovieItemCard } from '../MovieItemCard/MovieItemCard';
import { MovieList } from '../../styles/style';

export function MoviePageCard({ searchFilms }) {
  return (
    <MovieList>
      {searchFilms.map(({ id, title, release_date, name, backdrop_path }) => (
        <MovieItemCard
          key={id}
          id={id}
          release_date={release_date}
          title={title}
          name={name}
          backdrop_path={backdrop_path}
        />
      ))}
    </MovieList>
  );
}

MoviePageCard.propTypes = {
  searchFilms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
      backdrop_path: PropTypes.string,
    })
  ),
};