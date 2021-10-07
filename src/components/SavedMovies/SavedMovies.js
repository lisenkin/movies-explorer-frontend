import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';

function SavedMovies({ savedMovies }) {
  return (
    <>
      <Header />
      <main className="saved-movies-content movies-section app__section">
        <SearchForm />
        <MoviesCardList movies={savedMovies} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;