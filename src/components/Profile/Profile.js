import { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import Message from '../Message/Message';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import './Profile.css';

function Profile({
  message,
  onUpdateUser,
  onSignOut,
  isLoading,
  loggedIn,
  showMessage,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const currentUser = useContext(CurrentUserContext);

  const { values, isValid, handleChange, setValues } = useFormWithValidation();

  const { name, email } = values;

  const isInputValid =
    isValid && (name !== currentUser.name || email !== currentUser.email);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name: name || currentUser.name,
      email: email || currentUser.email,
    });
    toggleEdit();
  }

  useEffect(() => {
    setValues(currentUser);
  }, [currentUser, setValues]);

  function toggleEdit() {
    setIsEditing(!isEditing);
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="profile-content">
        <section className="profile">
          <h1 className="profile__title">Привет, {currentUser.name}!</h1>
          <form
            className="profile__form"
            id="profile-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <label className="profile__field profile__field_has-border">
              Имя
              <input
                className="profile__input"
                type="text"
                name="name"
                autoComplete="off"
                required
                value={name || ''}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </label>
            <label className="profile__field">
              E-mail
              <input
                className="profile__input"
                type="text"
                name="email"
                required
                value={email || ''}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </label>
          </form>
          <Message message={message} showMessage={showMessage} />
          {!isEditing && (
            <button
              className="button profile__button profile__button_type_edit"
              type="button"
              form="profile-form"
              onClick={toggleEdit}
              disabled={isLoading}
            >
              Редактировать
            </button>
          )}
          {isEditing && (
            <button
              className={`button profile__button profile__button_type_submit ${
                isInputValid ? '' : 'profile__button_disabled'
              }`}
              type="submit"
              form="profile-form"
              disabled={!isInputValid}
            >
              Сохранить
            </button>
          )}
          {!isEditing && (
            <button
              className="button profile__button profile__button_type_logout"
              type="button"
              form="profile-form"
              onClick={onSignOut}
            >
              Выйти из аккаунта
            </button>
          )}
        </section>
      </main>
    </>
  );
}

export default Profile;