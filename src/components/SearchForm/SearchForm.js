import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({
  onSearchSubmit,
  onFilterChecked,
  handleToggle,
  isLoading,
}) {
  const [keyword, setKeyword] = useState('');
  const [error, setError] = useState('');

  function handleChange(evt) {
    setKeyword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSearchSubmit(keyword);
  }

  function handleClick() {
    if (!keyword) {
      setError('Нужно ввести ключевое слово.');
    } else {
      setError('');
    }
  }

  return (
    <>
      <div className="searchForm" >
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-form__input"
          placeholder="Фильм"
          type="search"
          required
          value={keyword}
          onChange={handleChange}
        />
      </form>
      <button
          className={`button search-form__button ${
            isLoading ? 'search-form__button_disabled' : ''
          }`}
          type="submit"
          onClick={handleSubmit}
          disabled={isLoading}
         
        >
          Найти
        </button>
      </div>
      <span className="search-form_error">{error}</span>
      <FilterCheckbox
        onFilterChecked={onFilterChecked}
        handleToggle={handleToggle}
        isLoading={isLoading}
      />
    </>
  );
}

export default SearchForm;