import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from '../../services/api';
import toast, { Toaster } from 'react-hot-toast';
import { BsSearch } from "react-icons/bs";
import { MoviePageCard } from './MoviePageCard';
import { Form, FormInput, SearchBtn } from './MoviePageStyled';

export default function MoviesPage() {
  const [search, setSearch] = useState('');
  const [searchSubmit, setSearchSubmit] = useState('');
  const [searchFilms, setSearchFilms] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();

  useEffect(() => {
    if (searchParam.has('query')) {
      setSearchSubmit(searchParam.get('query'));
    }
    return () => {
      setSearchFilms([]);
    };
  }, [searchParam]);

  useEffect(() => {
    if (searchSubmit === '') {
      return;
    }
    const searchFilm = async () => {
      await fetchSearchMovie(searchSubmit)
        .then(data => {
          if (data.results.length > 0) {
            setSearchFilms(data.results);
            return;
          }
          throw Error();
        })
        .catch(error => {
          toast.error('Movie not found');
          console.log(error);
        });
    };
    searchFilm();
  }, [searchSubmit]);

  const handleSearch = event => {
    setSearch(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchSubmit(search);

    if (search === '') {
      toast.error('Enter what you want to find please');
      return;
    }

    setSearchParam({ query: search });
    setSearch('');
  };

  return (
    <>
      <Toaster />
      <Form onSubmit={handleSubmit}>
        <FormInput
          onChange={handleSearch}
          value={search}
          placeholder="Search movies..."
        />
        <SearchBtn type="submit">
          <BsSearch size={25} stroke="#3f51b5" />
        </SearchBtn>
      </Form>
      {searchFilms && <MoviePageCard searchFilms={searchFilms} />}
    </>
  );
}


