import { useState, useEffect } from 'react';
import {
  withRouter,
  Route,
  useHistory,
  Switch,
  useLocation,
} from 'react-router-dom';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Landing from '../Landing/Landing';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import './App.css';
import {
  convertMovieLink,
  markSavedMovies,
  getMovieByKeyword,
} from '../../utils/utils';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchMessage, setSearchMessage] = useState('');
  const [movies, setMovies] = useState([]);
  const [loginMessage, setLoginMessage] = useState('');
  const [registerMessage, setRegisterMessage] = useState('');
  const [profileMessage, setProfileMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const path = useLocation().pathname;

  const history = useHistory();

  function handleSignUpSubmit(userData) {
    setIsLoading(true);
    mainApi
      .signUpUser(userData)
      .then((res) => {
        if (res) {
          handleSignInSubmit({
            email: userData.email,
            password: userData.password,
          });
        }
      })
      .catch((err) => {
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 3000);
        if (err === 'Ошибка: 409 Conflict') {
          setRegisterMessage('Пользователь с таким email уже существует.');
        } else {
          setRegisterMessage('При регистрации пользователя произошла ошибка.');
        }
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleSignInSubmit(userData) {
    setIsLoading(true);
    mainApi
      .signInUser(userData)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setLoggedIn(true);
          history.push('/movies');
        }
      })
      .catch((err) => {
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 3000);
        if (err === 'Ошибка: 401 Unauthorized') {
          setLoginMessage('Неправильная почта или пароль.');
        } else {
          setLoginMessage('Что-то пошло не так. Попробуйте еще раз.');
        }
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleSignOutClick() {
    mainApi
      .signOutUser()
      .then((res) => {
        localStorage.clear();
        setLoggedIn(false);
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    function checkToken() {
      const jwt = localStorage.getItem('jwt');
      if (jwt) {
        setLoggedIn(true);
        if (path === '/signin' || path === '/signup') {
          history.push('/movies');
        } else {
          history.push(path);
        }
      }
    }

    checkToken();
  }, [history]);

  useEffect(() => {
    if (loggedIn) {
      Promise.all([mainApi.getUserData(), mainApi.getSavedMovies()])
        .then(([userData, movies]) => {
          setCurrentUser({ email: userData.email, name: userData.name });
          setSavedMovies(movies.reverse());
          localStorage.setItem('saved-movies', JSON.stringify(movies));
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  function handleUpdateUser(newUserData) {
    setIsLoading(true);
    mainApi
      .updateUserData(newUserData)
      .then((res) => {
        setCurrentUser(res);
        setShowMessage(true);
        setProfileMessage('Изменения успешно сохранены.');
        setTimeout(() => {
          setShowMessage(false);
        }, 3000);
      })
      .catch((err) => {
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 3000);
        setProfileMessage('При обновлении профиля произошла ошибка.');
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function getAllMovies(keyword) {
    setIsLoading(true);
    moviesApi
      .getMovies()
      .then((movies) => {
        localStorage.setItem('foundMovies',JSON.stringify(getMovieByKeyword(movies, keyword))
        );
        setMovies(
          markSavedMovies(getMovieByKeyword(movies, keyword), savedMovies)
        );
        setSearchMessage('Ничего не найдено.');
      })
      .catch((err) => {
        setSearchMessage(
          'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleSaveMovie(movie) {
    mainApi
      .saveMovie({
        movieId: movie.id,
        country: movie.country || 'unknown',
        description: movie.description,
        director: movie.director,
        duration: movie.duration,
        image: convertMovieLink(movie.image.url),
        thumbnail: convertMovieLink(movie.image.formats.thumbnail.url),
        nameEN: movie.nameEN || 'unknown',
        nameRU: movie.nameRU,
        trailer: movie.trailerLink,
        year: movie.year,
      })
      .then((savedMovie) => {
        setSavedMovies([savedMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDeleteMovie(movie) {
    const movieId = movie.id || movie.movieId;
    const movieToDelete = savedMovies.find(
      (savedMovie) => savedMovie.movieId === movieId
    );
    mainApi
      .deleteMovie(movieToDelete._id)
      .then(() => {
        const updatedSavedMovies = savedMovies.filter(
          (savedMovie) => savedMovie.movieId !== movieId
        );
        setSavedMovies(updatedSavedMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardButtonClick(movie) {
    if (!movie.isSaved && !movie._id) {
      handleSaveMovie(movie);
    } else {
      handleDeleteMovie(movie);
    }
  }

  useEffect(() => {
    const foundMovies = JSON.parse(localStorage.getItem('foundMovies'));
    if (foundMovies) {
      setMovies(markSavedMovies(foundMovies, savedMovies));
      setSearchMessage('Ничего не найдено.');
    } else {
      setSearchMessage('Начните поиск.');
      setMovies([]);
    }
  }, [savedMovies]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Landing loggedIn={loggedIn} />
          </Route>
          <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            component={Movies}
            movies={movies}
            onGetMovies={getAllMovies}
            isLoading={isLoading}
            searchMessage={searchMessage}
            onCardButtonClick={handleCardButtonClick}
          />

          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            savedMovies={savedMovies}
            onCardButtonClick={handleCardButtonClick}
          />
          <ProtectedRoute
            path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            onSignOut={handleSignOutClick}
            onUpdateUser={handleUpdateUser}
            message={profileMessage}
            showMessage={showMessage}
            isLoading={isLoading}
          />
          <Route path="/signin">
            <Login
              onLogin={handleSignInSubmit}
              message={loginMessage}
              showMessage={showMessage}
              isLoading={isLoading}
            />
          </Route>
          <Route path="/signup">
            <Register
              onRegister={handleSignUpSubmit}
              message={registerMessage}
              showMessage={showMessage}
              isLoading={isLoading}
            />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);