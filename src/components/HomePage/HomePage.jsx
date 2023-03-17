import { useState, useEffect } from 'react';
import { fetchTrendMovie } from '../../services/api';
import { MovieHomePageCard } from './MovieHomePageCard';
import { Title } from '../../styles/style';

export default function HomePage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchMovieList = async () => {
      await fetchTrendMovie().then(data => setFilms(data.results));
    };
    fetchMovieList();
    return;
  }, []);

  const toDay = new Date().toLocaleDateString();

  return (
    <article>
      <Title>Trending today: {toDay}</Title>
      <MovieHomePageCard films={films} />
    </article>
  );
}