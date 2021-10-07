import Header from '../Header/Header';
import './Profile.css';

function Profile() {
  return (
    <>
      <Header />
      <main className="profile-content">
        <section className="profile">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <form className="profile__form" id="profile-form">
            <label className="profile__field profile__field_has-border">
              Имя
              <input
                className="profile__input"
                type="text"
                defaultValue="Виталий"
                required
              />
            </label>
            <label className="profile__field">
              E-mail
              <input
                className="profile__input"
                type="text"
                defaultValue="pochta@yandex.ru"
                required
              />
            </label>
          </form>
          <button
            className="button profile__button profile__button_type_submit"
            type="submit"
            form="profile-form"
          >
            Редактировать
          </button>
          <button
            className="button profile__button profile__button_type_logout"
            type="button"
            form="profile-form"
          >
            Выйти из аккаунта
          </button>
        </section>
      </main>
    </>
  );
}

export default Profile;