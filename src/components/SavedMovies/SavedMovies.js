import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';

import { getMovieByKeyword, getShortMovies } from '../../utils/utils';

function SavedMovies({ savedMovies, onCardButtonClick, loggedIn }) {
  const [movieSearchWord, setMovieSearchWord] = useState('');
  const [isFilterChecked, setIsFilterChecked] = useState(false);
  const [movies, setMovies] = useState(savedMovies);

  function handleSearchSubmit(value) {
    setMovieSearchWord(value);
  }

  function toggleFilter() {
    setIsFilterChecked(!isFilterChecked);
  }

  useEffect(() => {
    const foundMovies = getMovieByKeyword(savedMovies, movieSearchWord);
    const filteredMovies = getShortMovies(foundMovies, isFilterChecked);
    setMovies(filteredMovies);
  }, [savedMovies, movieSearchWord, isFilterChecked]);
  return (
    <>
      <Header  loggedIn={loggedIn} />
      <main className="saved-movies-content movies-section app__section">
      <SearchForm
          onSearchSubmit={handleSearchSubmit}
          isFilterChecked={isFilterChecked}
          handleToggle={toggleFilter}
        />
        <MoviesCardList
          movies={movies}
          onCardButtonClick={onCardButtonClick}
          searchMessage={
            savedMovies.length < 1
              ? 'Нет сохраненных фильмов.'
              : 'Ничего не найдено.'
          }
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;