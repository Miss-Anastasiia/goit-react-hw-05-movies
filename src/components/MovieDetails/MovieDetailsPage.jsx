import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/api';
import {
  LinkReturn,
  Paragraph,
  LinkCast,
  LinkRewiews,
  FilmInfoContainer,
  Section,
  GenresItem,
  GenresList,
  FilmMore,
} from './MovieDetailsStyled';
import { Loader } from '../Loader/Loader';
import {
  MainMovieTitle,
  Img,
  Title,
  SecondaryMovieTitle,
} from '../../styles/style';

export default function MovieDetailsPage() {
  const [movies, setMovies] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let { moviesId } = useParams();

  const location = useLocation();
  const locationFrom = location?.state?.from ?? '/';

  useEffect(() => {
    const oneMovie = async () => {
      setLoading(true);
      try {
        await fetchMovieDetails(moviesId).then(data => {
          setMovies(data);
        });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    oneMovie();
  }, [moviesId]);

  const releaseData = new Date(movies.release_date);
  const { release_date, title, vote_average, overview, genres, poster_path } =
    movies;

  return (
    <>
      <LinkReturn to={locationFrom}> ◀ BACK </LinkReturn>
      {loading && <Loader />}
      {error && <Title>Oops...there is nothing, try again</Title>}
      {!error && (
        <Section>
          {poster_path ? (
            <Img
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt=""
              min-width={'100px'}
            />
          ) : (
            <Img src='https://as2.ftcdn.net/v2/jpg/03/15/18/09/1000_F_315180932_rhiXFrJN27zXCCdrgx8V5GWbLd9zTHHA.jpg' alt="" />
          )}

          <FilmInfoContainer>
            <MainMovieTitle>
              {title} ({releaseData.getFullYear(release_date)})
            </MainMovieTitle>
            <SecondaryMovieTitle>
              User score: {vote_average * 10}%
            </SecondaryMovieTitle>
            <SecondaryMovieTitle>Genres:</SecondaryMovieTitle>
            <GenresList>
              {genres &&
                genres.map(({ name }) => (
                  <GenresItem key={name}>🎥 {name} |</GenresItem>
                ))}
            </GenresList>
            <SecondaryMovieTitle>Overview </SecondaryMovieTitle>
            {overview ? (
              <Paragraph>{overview}</Paragraph>
            ) : (
              <Paragraph>No overview</Paragraph>
            )}
          </FilmInfoContainer>
        </Section>
      )}
      {!error && (
        <Section>
          <LinkCast
            to={`/movies/${moviesId}/cast`}
            state={{ from: locationFrom }}
          >
            Cast
          </LinkCast>
          <LinkRewiews
            to={`/movies/${moviesId}/reviews`}
            state={{ from: locationFrom }}
          >
            Reviews
          </LinkRewiews>
        </Section>
      )}
      <FilmMore>
        <Outlet />
      </FilmMore>
    </>
  );
}