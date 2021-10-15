import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import AuthPage from '../AuthPage/AuthPage';
import { patterns } from '../../utils/constants';

function Register({ onRegister, message, showMessage, isLoading }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const { name, email, password } = values;

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister({
      name,
      email,
      password,
    });
  }



  return (
    <AuthPage
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      question="Уже зарегистрированы?"
      path="/signin"
      linkText="Войти"
      onSubmit={handleSubmit}
      isValid={isValid}
      message={message}
      showMessage={showMessage}
      isLoading={isLoading}
    >
      <label className="auth__field">
        Имя
        <input
          name="name"
          type="text"
          className="auth__input"
          minLength="2"
          maxLength="30"
          required
          autoComplete="off"
          onChange={handleChange}
          value={name || ''}
        />
      </label>
      <span className="auth__error">{errors.name}</span>
      <label htmlFor="email" className="auth__field">
        E-mail
        <input
          name="email"
          type="email"
          className="auth__input"
          required
          autoComplete="off"
          onChange={handleChange}
          value={email || ''}
          pattern={patterns.name}
        />
      </label>
      <span className="auth__error">{errors.email}</span>
      <label className="auth__field">
        Пароль
        <input
          name="password"
          type="password"
          className="auth__input"
          required
          autoComplete="off"
          onChange={handleChange}
          value={password || ''}
        />
      </label>
      <span className="auth__error">{errors.password}</span>
    </AuthPage>
  );
}

export default Register;