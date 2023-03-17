import PropTypes from 'prop-types';
import { MovieItemCard } from '../MovieItemCard/MovieItemCard';
import { MovieList } from '../../styles/style';

export function MovieHomePageCard({ films }) {
  return (
    <MovieList>
      {films.map(({ id, title, name, backdrop_path, release_date }) => (
        <MovieItemCard
          key={id}
          id={id}
          name={name}
          title={title}
          backdrop_path={backdrop_path}
          release_date={release_date}
        />
      ))}
    </MovieList>
  );
}

MovieHomePageCard.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
      backdrop_path: PropTypes.string.isRequired,
    })
  ),
};
