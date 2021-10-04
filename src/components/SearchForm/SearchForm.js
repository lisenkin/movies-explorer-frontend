import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  return (
    <>
      <form className="search-form">
        <input
          className="search-form__input"
          placeholder="Фильм"
          type="search"
          required
        />
        <button className="button search-form__button" type="submit"></button>
      </form>
      <FilterCheckbox />
    </>
  );
}

export default SearchForm;