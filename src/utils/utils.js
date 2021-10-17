import * as constants from './constants';

export const convertMovieLink = (link) => {
  return `https://api.nomoreparties.co${link}`;
};

export const convertMovieDuration = (duration) => {
  return `${Math.floor(duration / 60) || 0}ч ${Math.floor(duration % 60)}м`;
};

export const getMovieByKeyword = (movies, keyword) =>
  movies.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(keyword.toLowerCase());
  });

export const markSavedMovies = (allMovies, savedMovies) => {
  savedMovies.forEach((savedMovie) => {
    const movie = allMovies.find((movie) => movie.nameRU === savedMovie.nameRU);
    if (typeof movie !== 'undefined') {
      movie.isSaved = true;
    }
  });

  return allMovies;
};

export const getShortMovies = (movies, checked) => {
  return movies.filter((movie) =>
    checked ? movie.duration <= constants.SHORT_MOVIE_DURATION : Number
  );
};

export const getMoviesQty = () => {
  if (window.innerWidth <= constants.SMALL_SCREEN_SIZE) {
    return constants.MIN_MOVIES_QUANTITY_TO_SHOW;
  } else if (window.innerWidth <= constants.MIDDLE_SCREEN_SIZE) {
    return constants.MIDDLE_MOVIES_QUANTITY_TO_SHOW;
  } else {
    return constants.MAX_MOVIES_QUANTITY_TO_SHOW;
  }
};

export const getMoreMovies = () => {
  if (window.innerWidth <= constants.MIDDLE_SCREEN_SIZE) {
    return constants.MIN_MOVIES_QUANTITY_TO_ADD;
  } else if (window.innerWidth <= constants.LARGE_SCREEN_SIZE) {
    return constants.MIDDLE_MOVIES_QUANTITY_TO_ADD;
  } else {
    return constants.MAX_MOVIES_QUANTITY_TO_ADD;
  }
};

