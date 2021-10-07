import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <input type="checkbox" className="filter-checkbox__input" />
      <label className="filter-checkbox__title">Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;