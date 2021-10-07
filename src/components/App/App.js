import { Switch, Route } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Landing from '../Landing/Landing';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import './App.css';
import movies from '../../utils/movies.js';

function App() {
  const likedMovies = movies.filter((movie) => movie.isLiked === true);

  return (
    <div className="app">
      <Switch>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/movies">
          <Movies movies={movies} />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies savedMovies={likedMovies} />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;