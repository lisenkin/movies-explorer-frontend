import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({
  movies,
  searchMessage,
  onCardButtonClick,
  moreCards,
  onMoreCardsButtonClick,
}) {
  const moviesQty = movies.length > 0;

  return (
    <>
      <section className="movies-card-list">
        {!moviesQty && (
          <p className="movies-card-list__message">{searchMessage}</p>
        )}
        {movies.map((movie) => {
          return (
            <MoviesCard
              movie={movie}
              key={movie.id || movie.movieId}
              onCardButtonClick={onCardButtonClick}
            />
          );
        })}
      </section>
      <div className="movies-card-list__button-container">
        {moreCards && (
          <button
            className="button movies-card-list__button"
            type="button"
            onClick={onMoreCardsButtonClick}
          >
            Ещё
          </button>
        )}
      </div>
    </>
  );
}

export default MoviesCardList;