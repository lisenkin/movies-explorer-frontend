import './FilterCheckbox.css';

function FilterCheckbox({ isFilterChecked, handleToggle }) {
  return (
    <div className="filter-checkbox">
       <input
        type="checkbox"
        className="filter-checkbox__input"
        checked={isFilterChecked}
        onChange={handleToggle}
      />
      <label className="filter-checkbox__title">Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;