import './Burger.css';

function Burger({ isBurgerOpened, onClick }) {
  return (
    <div
      className={`burger ${isBurgerOpened ? 'burger_opened' : ''}`}
      onClick={onClick}
    ></div>
  );
}

export default Burger;