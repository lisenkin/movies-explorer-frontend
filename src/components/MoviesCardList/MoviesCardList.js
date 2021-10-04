import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ movies }) {
  return (
    <>
      <section className="movies-card-list">
        {movies.map((movie) => {
          return <MoviesCard movie={movie} key={movie.id} />;
        })}
      </section>
      <div className="movies-card-list__button-container">
        {movies.length > 12 && (
          <button className="button movies-card-list__button" type="button">
            Ещё
          </button>
        )}
      </div>
    </>
  );
}

export default MoviesCardList;