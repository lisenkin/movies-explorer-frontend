import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  return (
    <>
      <div className="searchForm">
      <form className="search-form">
        <input
          className="search-form__input"
          placeholder="Фильм"
          type="search"
          required
        />
      </form>
      <button className="button search-form__button" type="submit">Найти</button>
      </div>
      <FilterCheckbox />
    </>
  );
}

export default SearchForm;